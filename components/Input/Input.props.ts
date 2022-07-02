import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: any,
    name: string,
    children?: ReactNode,
    type?: string,
    value: string
}