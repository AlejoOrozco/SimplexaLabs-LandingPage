/**
 * PageBackground — a single fixed, page-wide ambient gradient mesh.
 * Sits behind all sections so the page reads as one continuous surface and
 * section-to-section transitions are seamless (no visible seams).
 * Pure CSS transforms/opacity for performance; respects prefers-reduced-motion.
 */
import { memo } from 'react';

export const PageBackground = memo(function PageBackground() {
  return (
    <div className="page-bg" aria-hidden="true">
      <div className="page-bg__blob page-bg__blob--orange" />
      <div className="page-bg__blob page-bg__blob--pink" />
      <div className="page-bg__blob page-bg__blob--violet" />
      <div className="page-bg__blob page-bg__blob--indigo" />
      <div className="page-bg__grid" />
      <div className="page-bg__vignette" />
    </div>
  );
});
