import { TextareaHTMLAttributes } from "react";

declare module "@tintinwinata/react-textarea" {
  export interface TextAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    placeholder?: string;
    className?: string;
    rows?: number;
    onChange?: (text: string) => void;
    initialSize?: number;
  }

  export default function TextArea(props: TextAreaProps): JSX.Element;
}
