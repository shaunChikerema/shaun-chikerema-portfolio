/**
 * Single source of truth for contact details used across the site.
 *
 * Why this file exists: Hero.tsx and Contact.tsx were previously hardcoding
 * two DIFFERENT email addresses (sschikerema@gmail.com vs
 * shaunchikerema28@gmail.com), and the WhatsApp number/message was copy-
 * pasted in two places. Every component below should import from here
 * instead of redefining its own copy — change it once, it updates everywhere.
 */

export const EMAIL = 'shaunchikerema28@gmail.com';
export const MAILTO_HREF = `mailto:${EMAIL}?subject=Project Inquiry`;

export const PHONE_DISPLAY = '+267 76 051 623';
export const WA_NUMBER = '26776051623';
export const WA_MESSAGE = encodeURIComponent(
  "Hi Shaun, I'd like to discuss a project with you."
);
export const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
