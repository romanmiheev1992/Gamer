import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SortSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeGenre?: any,
    sort?: any
}