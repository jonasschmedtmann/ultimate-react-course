import { useState } from "react";
export default function TextExpander({
  collapsedNumWords = 20,
  expanded = false,
  className,
  children,
}) {
  const textDisplayed = expanded
    ? children
    : children.substring(0, collapsedNumWords);

  return (
    <div className={className}>
      <span>{textDisplayed}</span>
    </div>
  );
}
