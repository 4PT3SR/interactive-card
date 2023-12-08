import React from 'react';
type strnum = number | string;

// Also  making them a string bc 00 i ot a valid number for the initialvaue
export interface cardDetails {
        name: string,
        cardNumber: strnum,
        month: strnum,
        year: strnum,
        cvv: strnum
}

export interface cardContext {
    card: cardDetails,
    setCard: React.Dispatch<React.SetStateAction<cardDetails>>
}

export interface cardProps {
    card: cardDetails
  }

export interface validityContext {
  validated: boolean,
  setValidated: React.Dispatch<boolean>
}

export type onChangeHandler = (inputIdentifier: string, event:React.ChangeEvent<HTMLInputElement>) => void

export type handleInput = (event:React.ChangeEvent<HTMLInputElement>) => void