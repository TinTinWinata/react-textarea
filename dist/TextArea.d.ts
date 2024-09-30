import { TextareaHTMLAttributes } from "react";
export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    placeholder?: string;
    className?: string;
    rows?: number;
    onChange?: (text: string) => void;
    initialSize?: number;
}
export default function TextArea({ initialSize, onChange, style, ...props }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
