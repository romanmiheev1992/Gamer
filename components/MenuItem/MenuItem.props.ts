import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Games, Menu } from "../../interfaces/dataInterfase";

export interface MenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    list: Menu
    
}