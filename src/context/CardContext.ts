import {
    createContext
} from "react";

import { cardDetails,cardContext } from "../types";
export const initialState = {name:'Jane Appleseed',cardNumber:'0000000000000000',month:'00',year:'00',cvv:'000'}
const defaultState = {
  card: initialState,
  setCard: (card:cardDetails) => card
} as cardContext

export const CardContext = createContext<cardContext>(defaultState)

 