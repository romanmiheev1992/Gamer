import { DetailedHTMLProps, HTMLAttributes } from "react";
import { GamePhotos, Games } from "../../../interfaces/dataInterfase";
import Game from "../../../pages/games/[game]";

export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    photos: Games,
    num: number
}