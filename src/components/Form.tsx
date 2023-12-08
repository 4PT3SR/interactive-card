// import React from "react"

import { useFormik } from 'formik'
import {useContext } from "react"
import { CardContext } from "../context/CardContext"
import { ValidityContext } from '../context/ValidityContext'
import { onChangeHandler, handleInput} from "../types"
import Button from "./Button"
import CardInput from "./CardInput"
import { validationSchema } from './Validation'


const Form = () => {
  const {setValidated} = useContext(ValidityContext);
  // formik
  const formik = useFormik({
    initialValues: {
      name:"",
      cardNumber:"",
      month:"",
      year:"",
      cvv:""
    },validationSchema:validationSchema,

    onSubmit:(values,{resetForm}) => {
      console.log(values)
      resetForm()
      setValidated(true)
    }
  })

  const {card, setCard} = useContext(CardContext)

  // onchange handler for inputs, sets the card state and formik for a control form
  const handleChange: onChangeHandler = (inputIdentifier, event) => {

    setCard({...card,[inputIdentifier]: event.target.value})

    formik.handleChange(event)
  }

  // to manipulate card number
  const handleCardNumberChange:onChangeHandler = (inputIdentifier, event) => {
    const cNumber = event.target.value

    setCard((prevState)=> {
        
        const initial = '0000000000000000'
        const cardNumber = cNumber + initial.substring(cNumber.length)
        return {...prevState,[inputIdentifier]: cardNumber.toUpperCase()}
    })

    formik.handleChange(event)
  }

// onInput handler to prevent typing more than the specified length since maxLength doesn't work on type='number'
  const handleInput:handleInput = (event) => {
    event.target.value = event.target.value.slice(0,event.target.maxLength)
  }
  return (
    <form className="md:w-full px-4 lg:w-3/4 lg:mx-auto  h-fit" onSubmit={formik.handleSubmit}>          
          <CardInput labelName="CARDHOLDER NAME" name='name' type="text" placeholder="e.g Jane Appleseed" handleChange={handleChange} value={formik.values.name} maxLength={20} handleInput={handleInput}></CardInput>
          <small>{formik.errors.name}</small>

          <CardInput labelName="CARD NUMBER" type="text" name='cardNumber' placeholder="e.g 1234 4567 9123 000" handleChange={handleCardNumberChange} value={formik.values.cardNumber} maxLength={16} handleInput={handleInput}></CardInput>
          <small>{formik.errors.cardNumber}</small>


          <div className="grid grid-cols-4 gap-x-2 gap-y-1 mb-7">
          <p className="col-span-2 input-label"> EXP. DATE <label htmlFor="month">(MM</label><label htmlFor="year">/YY)</label></p>
          <p className="input-label col-span-2"><label htmlFor="cvv">CVV</label></p>
          <input type="number" name="month" id="month" className=" input " placeholder="MM" maxLength={2} value={formik.values.month} onChange={(event)=>handleChange('month',event)} onInput={handleInput}/>
          
          <input type="number" name="year" id="year" className=" input" placeholder="YY" maxLength={2} value={formik.values.year} onChange={(event)=>handleChange('year',event)} onInput={handleInput}/>
          
          <input type="string" name="cvv" id="cvv" className=" input col-span-2" placeholder="e.g. 123" maxLength={3} onInput={handleInput} value={formik.values.cvv} onChange={(event)=>handleChange('cvv',event)} />
          <small className="col-span-2">{formik.errors.month || formik.errors.year}</small>
          <small className="col-span-2">{formik.errors.cvv}</small>
          </div>
          <Button btnType="submit">Confirm</Button>
        </form>
  )
  }
  

export default Form