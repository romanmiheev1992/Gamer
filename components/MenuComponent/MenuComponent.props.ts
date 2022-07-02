import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Menu } from "../../interfaces/dataInterfase";
import { MenuType } from "../../redux/types/menuType";


export interface MenuComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    toggle: MenuType,
    list: Menu
}