export default function Link({
  href,
  children,
  className = '',
  target,
  rel,
  newTab = true,
  ...rest
}) {
  const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href);
  const isDoc = typeof href === 'string' && /\.(pdf|docx?|txt)$/i.test(href);

  const computedTarget = target ?? ((newTab && (isExternal || isDoc)) ? '_blank' : undefined);
  const computedRel = rel ?? (computedTarget === '_blank' ? 'noreferrer' : undefined);
  const combinedClass = `link ${className}`.trim();

  return (
    <a href={href} target={computedTarget} rel={computedRel} className={combinedClass} {...rest}>
      {children}
    </a>
  );
}