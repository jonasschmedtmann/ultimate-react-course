export default function Button({
  bgColor,
  textColor,
  onClickHandler,
  children,
}) {
  return (
    <button
      onClick={onClickHandler}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
