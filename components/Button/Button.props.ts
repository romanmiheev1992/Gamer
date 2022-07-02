import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: 'slider_right'| 'slider_left' | 'submit' | "small_slider_left" | "small_slider_right" | 'primary'
    children?: string
}