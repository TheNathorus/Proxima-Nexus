import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

export default function BrandLogo({ footer = false, onClick, className = '' }) {
  const { resolvedTheme } = useTheme();
  const markSrc =
    resolvedTheme === 'dark'
      ? '/branding/proxima-mark-dark.svg'
      : '/branding/proxima-mark.svg';

  const content = (
    <>
      <img
        src={markSrc}
        alt=""
        width={36}
        height={36}
        decoding="async"
        className="site-logo__mark"
      />
      <span className="site-logo__wordmark">
        <span className="site-logo__proxima">PROXIMA</span>
        <span className="site-logo__nexus">NEXUS</span>
      </span>
    </>
  );

  const cls = ['site-logo', footer && 'site-logo--footer', className].filter(Boolean).join(' ');

  if (footer) {
    return (
      <div className={cls} aria-label="Proxima Nexus">
        {content}
      </div>
    );
  }

  return (
    <Link to="/" className={cls} onClick={onClick}>
      {content}
    </Link>
  );
}
