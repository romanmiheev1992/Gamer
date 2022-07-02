import { DetailedHTMLProps, HTMLAttributes } from "react";
import { GamePhotos, Games } from "../../../interfaces/dataInterfase";

export interface SliderSmallProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    photos: Games,
    num: number,
    setNum: any
}