/**
 * Shared in-page scrolling.
 *
 * Header.tsx, Hero.tsx and Footer.tsx used to scroll three different ways
 * (a 72px manual offset in Header, bare scrollIntoView elsewhere), so the
 * CTAs landed sections underneath the fixed header. Everything goes through
 * here now.
 *
 * Optional: also add `html { scroll-padding-top: 84px; }` to globals.css so
 * direct visits to /#contact and native anchor jumps use the same offset.
 */

// Fixed header is h-[68px]; the extra 16px is breathing room.
export const HEADER_OFFSET = 84;

export function scrollToId(id: string, offset = HEADER_OFFSET) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' });
}
