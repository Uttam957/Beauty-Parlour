// components/Reveal.js
// Reusable reveal wrapper component utilizing CSS-driven animations & IntersectionObserver

export default function Reveal({
  children,
  variant = 'up', // 'up' | 'left' | 'right' | 'fade' | 'stagger'
  className = '',
  delay = 0,
  style = {},
  as: Component = 'div',
  ...rest
}) {
  const variantClass =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'right'
      ? 'reveal-right'
      : variant === 'stagger'
      ? 'reveal-stagger'
      : variant === 'fade'
      ? 'reveal-fade'
      : 'reveal-up';

  const combinedStyle = delay ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <Component
      className={`reveal ${variantClass} ${className}`.trim()}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
