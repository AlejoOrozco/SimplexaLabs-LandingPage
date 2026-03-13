/**
 * TestimonialWall — infinite scrolling rows of testimonial cards.
 * Two rows: first scrolls left, second scrolls right. Pauses on hover.
 */

export interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  text: string;
}

interface TestimonialWallProps {
  rows: [Testimonial[], Testimonial[]];
  /** Animation duration in seconds per row */
  duration?: number;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="tw__card">
      <div className="tw__header">
        <img src={t.avatar} alt={t.name} className="tw__avatar" />
        <div className="tw__meta">
          <p className="tw__name">{t.name}</p>
          <p className="tw__handle">{t.handle}</p>
        </div>
      </div>
      <p className="tw__text">{t.text}</p>
    </div>
  );
}

function ScrollRow({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: 'left' | 'right';
  duration: number;
}) {
  const cls =
    direction === 'left' ? 'tw__row--left' : 'tw__row--right';

  return (
    <div
      className={`tw__row ${cls}`}
      style={{ animationDuration: `${duration}s` }}
    >
      <div className="tw__track">
        {items.map((t, i) => (
          <TestimonialCard key={`a-${i}`} t={t} />
        ))}
      </div>
      <div className="tw__track" aria-hidden="true">
        {items.map((t, i) => (
          <TestimonialCard key={`b-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialWall({ rows, duration = 80 }: TestimonialWallProps) {
  return (
    <div className="tw">
      <ScrollRow items={rows[0]} direction="left" duration={duration} />
      <ScrollRow items={rows[1]} direction="right" duration={duration} />
    </div>
  );
}
