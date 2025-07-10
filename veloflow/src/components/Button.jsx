function Button({ label, onClick, href }) {
  return href ? (
    <a href={href} className="btn">
      {label}
    </a>
  ) : (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
}

export default Button;
