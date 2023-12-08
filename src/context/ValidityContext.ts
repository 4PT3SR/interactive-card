import {
    createContext
} from "react";

import { validityContext } from "../types";

const defaultState = {
  validated: false,
  setValidated: (validated:boolean) => boolean
} 

export const ValidityContext = createContext<validityContext>(defaultState)

