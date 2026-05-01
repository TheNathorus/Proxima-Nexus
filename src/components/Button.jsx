import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (to) {
    return <Link to={to} className={baseClass} {...props}>{children}</Link>;
  }
  
  if (href) {
    return <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }
  
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
