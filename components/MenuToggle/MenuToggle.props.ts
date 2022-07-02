import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface MenuToggleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type : 'open' | 'close'
}