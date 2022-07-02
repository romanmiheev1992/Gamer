import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../redux/store/store";

export const useSelectorHook: TypedUseSelectorHook<RootType> = useSelector