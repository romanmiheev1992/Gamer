import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SliderBordProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    lengthList: any[],
    numClick: any,
    num: number
}