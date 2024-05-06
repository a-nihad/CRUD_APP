function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 py-1 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
