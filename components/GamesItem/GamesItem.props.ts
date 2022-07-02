import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Games } from "../../interfaces/dataInterfase";

export interface GamesItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    game: Games,
}