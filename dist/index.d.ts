declare module "@tintinwinata/react-textarea" {
  export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    className?: string;
    rows?: number;
    onChangeText?: (text: string) => void;
    initialSize?: number;
  }

  export default function TextArea(props: TextAreaProps): JSX.Element;
}
