import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Games } from "../../../interfaces/dataInterfase";

export interface GameSettingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    game: Games
}