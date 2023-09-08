import { createContext } from "react";
import { CartObject } from "../Types";

export const UserCart = createContext<CartObject | null>(null);
