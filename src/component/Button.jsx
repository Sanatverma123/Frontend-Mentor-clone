import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Button({
  children,
  to,
  ariaLabel,
  href,
  onClick,
  type = "button",
  icon = false,
  disabled = false,
  newTab = true,
  className = "",
}) {
  const buttonStyle =
    "inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 hover:from-purple-600 hover:via-indigo-700 hover:to-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold transition-all shadow-[3px_3px_0px_#1e40af] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0px_#1e40af]";

  const finalClass = `${buttonStyle} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} className="shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={finalClass}
        aria-label={ariaLabel}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={finalClass}
        aria-label={ariaLabel}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export default Button;
