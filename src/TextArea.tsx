import React, {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./textarea.css";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
  rows?: number;
  onChangeText?: (text: string) => void;
  initialSize?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { initialSize = 100, className, onChangeText, onChange, style, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);

    const baseStyle: React.CSSProperties = {
      minHeight: `${initialSize}px`,
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
        className={`react-textarea ${className}`}
        style={{ ...style, ...baseStyle }}
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
