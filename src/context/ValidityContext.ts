import {
    createContext
} from "react";

import { validityContext } from "../types";

const defaultState = {
  validated: false,
  setValidated: (validated:boolean) => validated
} 

export const ValidityContext = createContext<validityContext>(defaultState)

