import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
  rows?: number;
  onChangeText?: (text: string) => void;
  initialSize?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ initialSize = 100, onChangeText, onChange, style, ...props }, ref) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);

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
      const element = innerRef.current;
      if (element) {
        element.style.height = "inherit";
        element.style.height = `${Math.max(
          element.scrollHeight,
          initialSize
        )}px`;
      }
    }

    useEffect(() => {
      if (innerRef.current) {
        checkSize();
      }
    }, [innerRef.current]);

    useImperativeHandle(ref, () => innerRef.current!);

    return (
      <textarea
        {...props}
        ref={innerRef}
        style={{ ...baseStyle, ...style }}
        onChange={(e) => {
          checkSize();
          onChange && onChange(e);
          onChangeText && onChangeText(e.currentTarget.value);
        }}
      />
    );
  }
);

export default TextArea;
