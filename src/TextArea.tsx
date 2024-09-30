import React, { TextareaHTMLAttributes, useEffect, useRef } from "react";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  placeholder?: string;
  className?: string;
  rows?: number;
  onChange?: (text: string) => void;
  initialSize?: number;
}

export default function TextArea({
  initialSize = 100,
  onChange,
  style,
  ...props
}: TextAreaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const baseStyle: React.CSSProperties = {
    width: "100%",
    resize: "none",
    padding: "12px",
    border: "1.5px solid #ccc",
    borderRadius: "5px",
    minHeight: `${initialSize}px`,
    fontFamily: "inherit",
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  function checkSize() {
    const element = ref.current;
    if (element) {
      element.style.height = "inherit";
      element.style.height = `${Math.max(element.scrollHeight, initialSize)}px`;
    }
  }

  useEffect(() => {
    if (ref && ref.current) {
      checkSize();
    }
  }, [ref, ref.current]);

  return (
    <textarea
      {...props}
      ref={ref}
      style={{ ...baseStyle, ...style }}
      onChange={(e) => {
        checkSize();
        onChange && onChange(e.currentTarget.value);
      }}
    />
  );
}
