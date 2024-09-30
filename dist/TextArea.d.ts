import React, { TextareaHTMLAttributes } from "react";
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    className?: string;
    rows?: number;
    onChangeText?: (text: string) => void;
    initialSize?: number;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
