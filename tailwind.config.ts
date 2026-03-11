/** Tailwind v4 — config for tooling (e.g. shadcn). Most setup is in CSS via @import "tailwindcss". */
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
} satisfies Config;
