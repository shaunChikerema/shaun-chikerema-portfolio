'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import {
  FileText, Scan, Pen, Type, Square, Download,
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut,
  Loader2, X, Check, ArrowRight
} from 'lucide-react';

// ── Types ───────────────────────────────────────────────────────
type Tool = 'select' | 'draw' | 'text' | 'highlight' | 'rect' | 'arrow';

interface Annotation {
  id: string;
  pageNum: number;
  type: Tool;
  data: any;
  color: string;
  width?: number;
}

interface OcrResult {
  pageNum: number;
  text: string;
  loading: boolean;
}

const ACCENT = '#0ea5e9';
const COLORS = ['#0ea5e9', '#ef4444', '#22c55e', '#f59e0b', '#a855f7', '#000000'];

// ── Helpers ─────────────────────────────────────────────────────
function uid() { return Math.random().toString(36).slice(2); }

// ── Tool Button ─────────────────────────────────────────────────
function ToolBtn({ icon: Icon, label, active, onClick }: { icon: any; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} title={label}
      className="flex flex-col items-center gap-0.5 px-2 py-2 rounded transition-all"
      style={{
        background: active ? 'rgba(14,165,233,0.15)' : 'transparent',
        color: active ? ACCENT : 'rgba(255,255,255,0.55)',
        border: active ? `1px solid rgba(14,165,233,0.3)` : '1px solid transparent',
      }}>
      <Icon size={16} />
      <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.05em' }}>{label}</span>
    </button>
  );
}

// ── Empty State ─────────────────────────────────────────────────
function DropZone({ onFile }: { onFile: (f: File) => void }) {
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files[0];
    if (file?.type === 'application/pdf') onFile(file);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer flex flex-col items-center gap-5 p-16 rounded-xl transition-all max-w-md w-full"
        style={{
          border: `2px dashed ${drag ? ACCENT : 'rgba(255,255,255,0.12)'}`,
          background: drag ? 'rgba(14,165,233,0.05)' : 'rgba(255,255,255,0.02)',
        }}
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}>
          <FileText size={28} style={{ color: ACCENT }} />
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg mb-1" style={{ color: '#fff' }}>Drop a PDF here</p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>or click to browse — stays in your browser</p>
        </div>
        <div className="flex gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          <span>✦ OCR</span><span>✦ Annotate</span><span>✦ Export</span>
        </div>
        <input ref={inputRef} type="file" accept="application/pdf" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f); }} />
      </div>
    </div>
  );
}

// ── Main Editor ─────────────────────────────────────────────────
export default function DocFlowEditor() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.4);
  const [tool, setTool] = useState<Tool>('select');
  const [color, setColor] = useState('#0ea5e9');
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [ocr, setOcr] = useState<Map<number, OcrResult>>(new Map());
  const [ocrPanel, setOcrPanel] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [textPos, setTextPos] = useState<{ x: number; y: number } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const annotCanvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const drawPath = useRef<{ x: number; y: number }[]>([]);
  const rectStart = useRef<{ x: number; y: number } | null>(null);
  const pdfJsRef = useRef<any>(null);

  // Load PDF.js
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      pdfJsRef.current = pdfjsLib;
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  // Load PDF file
  useEffect(() => {
    if (!pdfFile || !pdfJsRef.current) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target!.result as ArrayBuffer);
      const doc = await pdfJsRef.current.getDocument({ data }).promise;
      setPdfDoc(doc);
      setNumPages(doc.numPages);
      setCurrentPage(1);
      setAnnotations([]);
      setOcr(new Map());
    };
    reader.readAsArrayBuffer(pdfFile);
  }, [pdfFile]);

  // Render PDF page
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;
    let cancelled = false;
    (async () => {
      const page = await pdfDoc.getPage(currentPage);
      if (cancelled) return;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;
      if (cancelled) return;
      // sync annotation canvas size
      const ac = annotCanvasRef.current!;
      ac.width = viewport.width;
      ac.height = viewport.height;
      redrawAnnotations(viewport.width, viewport.height);
    })();
    return () => { cancelled = true; };
  }, [pdfDoc, currentPage, scale]);

  const redrawAnnotations = useCallback((w: number, h: number) => {
    const ac = annotCanvasRef.current;
    if (!ac) return;
    const ctx = ac.getContext('2d')!;
    ctx.clearRect(0, 0, w, h);
    annotations.filter(a => a.pageNum === currentPage).forEach(ann => {
      ctx.strokeStyle = ann.color;
      ctx.fillStyle = ann.color;
      ctx.lineWidth = ann.width || 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (ann.type === 'draw' && ann.data.path?.length > 1) {
        ctx.beginPath();
        ctx.moveTo(ann.data.path[0].x, ann.data.path[0].y);
        ann.data.path.slice(1).forEach((p: any) => ctx.lineTo(p.x, p.y));
        ctx.stroke();
      } else if (ann.type === 'rect' && ann.data.x != null) {
        ctx.strokeRect(ann.data.x, ann.data.y, ann.data.w, ann.data.h);
      } else if (ann.type === 'highlight' && ann.data.path?.length > 1) {
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 16;
        ctx.beginPath();
        ctx.moveTo(ann.data.path[0].x, ann.data.path[0].y);
        ann.data.path.slice(1).forEach((p: any) => ctx.lineTo(p.x, p.y));
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.lineWidth = ann.width || 2;
      } else if (ann.type === 'text' && ann.data.text) {
        ctx.font = `${14 * scale}px system-ui`;
        ctx.fillText(ann.data.text, ann.data.x, ann.data.y);
      } else if (ann.type === 'arrow' && ann.data.x1 != null) {
        const { x1, y1, x2, y2 } = ann.data;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const len = 12;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - len * Math.cos(angle - 0.4), y2 - len * Math.sin(angle - 0.4));
        ctx.lineTo(x2 - len * Math.cos(angle + 0.4), y2 - len * Math.sin(angle + 0.4));
        ctx.closePath(); ctx.fill();
      }
    });
  }, [annotations, currentPage, scale]);

  useEffect(() => {
    if (annotCanvasRef.current) {
      redrawAnnotations(annotCanvasRef.current.width, annotCanvasRef.current.height);
    }
  }, [redrawAnnotations]);

  const getPos = (e: React.MouseEvent) => {
    const rect = annotCanvasRef.current!.getBoundingClientRect();
    return { x: (e.clientX - rect.left) * (annotCanvasRef.current!.width / rect.width), y: (e.clientY - rect.top) * (annotCanvasRef.current!.height / rect.height) };
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (tool === 'select') return;
    if (tool === 'text') {
      const pos = getPos(e);
      setTextPos(pos);
      setTextInput('');
      return;
    }
    isDrawing.current = true;
    const pos = getPos(e);
    if (tool === 'draw' || tool === 'highlight') drawPath.current = [pos];
    if (tool === 'rect' || tool === 'arrow') rectStart.current = pos;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing.current) return;
    const pos = getPos(e);
    const ac = annotCanvasRef.current!;
    const ctx = ac.getContext('2d')!;

    if (tool === 'draw' || tool === 'highlight') {
      drawPath.current.push(pos);
      redrawAnnotations(ac.width, ac.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = tool === 'highlight' ? 16 : strokeWidth;
      ctx.globalAlpha = tool === 'highlight' ? 0.3 : 1;
      ctx.lineCap = 'round';
      ctx.beginPath();
      const p = drawPath.current;
      ctx.moveTo(p[0].x, p[0].y);
      p.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    if ((tool === 'rect' || tool === 'arrow') && rectStart.current) {
      redrawAnnotations(ac.width, ac.height);
      ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = strokeWidth;
      if (tool === 'rect') {
        ctx.strokeRect(rectStart.current.x, rectStart.current.y, pos.x - rectStart.current.x, pos.y - rectStart.current.y);
      } else {
        const { x: x1, y: y1 } = rectStart.current;
        const { x: x2, y: y2 } = pos;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        const angle = Math.atan2(y2 - y1, x2 - x1);
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - 12 * Math.cos(angle - 0.4), y2 - 12 * Math.sin(angle - 0.4));
        ctx.lineTo(x2 - 12 * Math.cos(angle + 0.4), y2 - 12 * Math.sin(angle + 0.4));
        ctx.closePath(); ctx.fill();
      }
    }
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const pos = getPos(e);
    const newAnn: Annotation = { id: uid(), pageNum: currentPage, type: tool, color, width: strokeWidth, data: {} };

    if (tool === 'draw' || tool === 'highlight') {
      newAnn.data = { path: [...drawPath.current] };
      drawPath.current = [];
    }
    if (tool === 'rect' && rectStart.current) {
      newAnn.data = { x: rectStart.current.x, y: rectStart.current.y, w: pos.x - rectStart.current.x, h: pos.y - rectStart.current.y };
      rectStart.current = null;
    }
    if (tool === 'arrow' && rectStart.current) {
      newAnn.data = { x1: rectStart.current.x, y1: rectStart.current.y, x2: pos.x, y2: pos.y };
      rectStart.current = null;
    }
    setAnnotations(prev => [...prev, newAnn]);
  };

  const commitText = () => {
    if (!textPos || !textInput.trim()) { setTextPos(null); return; }
    setAnnotations(prev => [...prev, { id: uid(), pageNum: currentPage, type: 'text', color, width: strokeWidth, data: { text: textInput, x: textPos.x, y: textPos.y } }]);
    setTextPos(null); setTextInput('');
  };

  const undoLast = () => {
    const pageAnns = annotations.filter(a => a.pageNum === currentPage);
    if (!pageAnns.length) return;
    const lastId = pageAnns[pageAnns.length - 1].id;
    setAnnotations(prev => prev.filter(a => a.id !== lastId));
  };

  const runOcr = async () => {
    setOcrPanel(true);
    if (ocr.get(currentPage)?.text) return;
    setOcr(prev => new Map(prev).set(currentPage, { pageNum: currentPage, text: '', loading: true }));

    // Load Tesseract.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.0.3/tesseract.min.js';
    document.head.appendChild(script);
    script.onload = async () => {
      try {
        const Tesseract = (window as any).Tesseract;
        const canvas = canvasRef.current!;
        const result = await Tesseract.recognize(canvas, 'eng', {});
        setOcr(prev => new Map(prev).set(currentPage, { pageNum: currentPage, text: result.data.text, loading: false }));
      } catch {
        setOcr(prev => new Map(prev).set(currentPage, { pageNum: currentPage, text: 'OCR failed — try again.', loading: false }));
      }
    };
  };

  const exportPdf = async () => {
    if (!pdfFile) return;
    setExporting(true);
    try {
      const pdfLibScript = document.createElement('script');
      pdfLibScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js';
      document.head.appendChild(pdfLibScript);
      await new Promise(r => { pdfLibScript.onload = r; });

      const PDFLib = (window as any).PDFLib;
      const bytes = await pdfFile.arrayBuffer();
      const doc = await PDFLib.PDFDocument.load(bytes);
      const pages = doc.getPages();
      const helvetica = await doc.embedFont(PDFLib.StandardFonts.Helvetica);

      annotations.forEach(ann => {
        const page = pages[ann.pageNum - 1];
        if (!page) return;
        const { height } = page.getSize();
        const r = parseInt(ann.color.slice(1, 3), 16) / 255;
        const g = parseInt(ann.color.slice(3, 5), 16) / 255;
        const b = parseInt(ann.color.slice(5, 7), 16) / 255;
        const pdfColor = PDFLib.rgb(r, g, b);

        if (ann.type === 'text' && ann.data.text) {
          page.drawText(ann.data.text, {
            x: ann.data.x / scale,
            y: height - ann.data.y / scale,
            size: 12,
            font: helvetica,
            color: pdfColor,
          });
        } else if (ann.type === 'rect' && ann.data.x != null) {
          page.drawRectangle({
            x: ann.data.x / scale,
            y: height - (ann.data.y + ann.data.h) / scale,
            width: ann.data.w / scale,
            height: ann.data.h / scale,
            borderColor: pdfColor,
            borderWidth: ann.width || 2,
          });
        } else if (ann.type === 'draw' && ann.data.path?.length > 1) {
          for (let i = 1; i < ann.data.path.length; i++) {
            const a = ann.data.path[i - 1];
            const b2 = ann.data.path[i];
            page.drawLine({
              start: { x: a.x / scale, y: height - a.y / scale },
              end: { x: b2.x / scale, y: height - b2.y / scale },
              color: pdfColor,
              thickness: ann.width || 2,
            });
          }
        }
      });

      const outBytes = await doc.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `docflow-${pdfFile.name}`; a.click();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  const tools: { id: Tool; icon: any; label: string }[] = [
    { id: 'select', icon: ArrowRight, label: 'Select' },
    { id: 'draw', icon: Pen, label: 'Draw' },
    { id: 'highlight', icon: Type, label: 'Highlight' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'rect', icon: Square, label: 'Rect' },
    { id: 'arrow', icon: ArrowRight, label: 'Arrow' },
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a0a', fontFamily: 'system-ui, sans-serif', color: '#fff' }}>

      {/* Top bar */}
      <div style={{ height: 52, background: '#111', borderBottom: '1px solid #1f2937', display: 'flex', alignItems: 'center', paddingInline: 16, gap: 16, flexShrink: 0, zIndex: 10 }}>
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.03em', color: '#fff' }}>
          Doc<span style={{ color: ACCENT }}>Flow</span>
        </span>
        <div style={{ width: 1, height: 20, background: '#1f2937' }} />
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {pdfFile?.name || 'No file open'}
        </span>
        {pdfFile && (
          <>
            <button onClick={runOcr}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all"
              style={{ background: 'rgba(14,165,233,0.1)', color: ACCENT, border: '1px solid rgba(14,165,233,0.2)' }}>
              <Scan size={13} /> OCR
            </button>
            <button onClick={exportPdf} disabled={exporting}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all"
              style={{ background: exporting ? '#1f2937' : ACCENT, color: '#fff' }}>
              {exporting ? <Loader2 size={13} className="animate-spin" /> : <Download size={13} />}
              Export
            </button>
            <button onClick={() => { setPdfFile(null); setPdfDoc(null); }}
              className="p-1.5 rounded transition-all" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <X size={15} />
            </button>
          </>
        )}
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* Left toolbar */}
        {pdfFile && (
          <div style={{ width: 72, background: '#0d0d0d', borderRight: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column', padding: '12px 6px', gap: 6, flexShrink: 0 }}>
            {tools.map(t => <ToolBtn key={t.id} icon={t.icon} label={t.label} active={tool === t.id} onClick={() => setTool(t.id)} />)}

            <div style={{ height: 1, background: '#1a1a1a', marginBlock: 4 }} />

            {/* Colors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
              {COLORS.map(c => (
                <button key={c} onClick={() => setColor(c)}
                  style={{ width: 20, height: 20, borderRadius: '50%', background: c, border: color === c ? '2px solid #fff' : '2px solid transparent', cursor: 'pointer' }} />
              ))}
            </div>

            <div style={{ height: 1, background: '#1a1a1a', marginBlock: 4 }} />

            {/* Stroke width */}
            {[1, 2, 3, 5].map(w => (
              <button key={w} onClick={() => setStrokeWidth(w)}
                style={{ height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4,
                  background: strokeWidth === w ? 'rgba(14,165,233,0.15)' : 'transparent', cursor: 'pointer' }}>
                <div style={{ height: w + 1, width: 28, background: strokeWidth === w ? ACCENT : 'rgba(255,255,255,0.3)', borderRadius: w }} />
              </button>
            ))}

            <div style={{ flex: 1 }} />

            <button onClick={undoLast} title="Undo"
              style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}>
              ↩ Undo
            </button>
          </div>
        )}

        {/* Canvas area */}
        <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#141414' }}>
          {!pdfFile ? (
            <DropZone onFile={setPdfFile} />
          ) : (
            <>
              {/* Page nav */}
              <div style={{ position: 'sticky', top: 0, zIndex: 5, background: '#111', borderBottom: '1px solid #1a1a1a', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 12, width: '100%', boxSizing: 'border-box' }}>
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
                  style={{ background: 'transparent', border: 'none', color: currentPage === 1 ? '#333' : '#fff', cursor: currentPage === 1 ? 'default' : 'pointer' }}>
                  <ChevronLeft size={18} />
                </button>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                  Page {currentPage} / {numPages}
                </span>
                <button onClick={() => setCurrentPage(p => Math.min(numPages, p + 1))} disabled={currentPage === numPages}
                  style={{ background: 'transparent', border: 'none', color: currentPage === numPages ? '#333' : '#fff', cursor: currentPage === numPages ? 'default' : 'pointer' }}>
                  <ChevronRight size={18} />
                </button>
                <div style={{ flex: 1 }} />
                <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}><ZoomOut size={16} /></button>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', minWidth: 40, textAlign: 'center' }}>{Math.round(scale * 100)}%</span>
                <button onClick={() => setScale(s => Math.min(3, s + 0.2))} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}><ZoomIn size={16} /></button>
              </div>

              {/* Page canvas */}
              <div style={{ padding: 24, position: 'relative', display: 'inline-block' }}>
                <canvas ref={canvasRef} style={{ display: 'block', boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }} />
                <canvas ref={annotCanvasRef}
                  style={{ position: 'absolute', top: 24, left: 24, cursor: tool === 'select' ? 'default' : tool === 'text' ? 'text' : 'crosshair' }}
                  onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} />

                {/* Text input overlay */}
                {textPos && (
                  <div style={{ position: 'absolute', top: 24 + textPos.y, left: 24 + textPos.x, zIndex: 20, display: 'flex', gap: 4 }}>
                    <input autoFocus value={textInput} onChange={e => setTextInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') commitText(); if (e.key === 'Escape') setTextPos(null); }}
                      placeholder="Type here…"
                      style={{ background: 'rgba(0,0,0,0.85)', border: `1px solid ${ACCENT}`, color: '#fff', padding: '4px 8px', borderRadius: 4, fontSize: 14, outline: 'none', minWidth: 160 }} />
                    <button onClick={commitText} style={{ background: ACCENT, border: 'none', borderRadius: 4, color: '#fff', padding: '4px 8px', cursor: 'pointer' }}><Check size={13} /></button>
                    <button onClick={() => setTextPos(null)} style={{ background: '#333', border: 'none', borderRadius: 4, color: '#fff', padding: '4px 8px', cursor: 'pointer' }}><X size={13} /></button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* OCR panel */}
        {ocrPanel && (
          <div style={{ width: 320, background: '#0d0d0d', borderLeft: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            <div style={{ padding: '14px 16px', borderBottom: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>OCR — Page {currentPage}</span>
              <button onClick={() => setOcrPanel(false)} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}><X size={15} /></button>
            </div>
            <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
              {ocr.get(currentPage)?.loading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.4)' }}>
                  <Loader2 size={16} className="animate-spin" /> Scanning…
                </div>
              ) : ocr.get(currentPage)?.text ? (
                <pre style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', whiteSpace: 'pre-wrap', lineHeight: 1.7, margin: 0 }}>
                  {ocr.get(currentPage)!.text}
                </pre>
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, textAlign: 'center', marginTop: 40 }}>
                  <Scan size={32} style={{ margin: '0 auto 12px', display: 'block', opacity: 0.3 }} />
                  Click OCR in the toolbar to scan this page
                </div>
              )}
            </div>
            {ocr.get(currentPage)?.text && (
              <div style={{ padding: 12, borderTop: '1px solid #1a1a1a' }}>
                <button onClick={() => navigator.clipboard.writeText(ocr.get(currentPage)!.text)}
                  style={{ width: '100%', padding: '8px 0', background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 6, color: ACCENT, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  Copy Text
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}