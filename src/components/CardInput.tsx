import { onChangeHandler, handleInput} from "../types"
interface props {
    'labelName': string,
    name: string,
    'type':string,
    'placeholder': string,
    handleChange: onChangeHandler,
    value: string | number,
    maxLength: number,
    handleInput: handleInput
}

const CardInput = ({labelName,name, type, placeholder,handleChange,value, maxLength,  handleInput}:props) => {
  return (
    <>
    <p className="input-label"><label htmlFor={name} >{labelName}</label></p>
    
    <input type={type} name={name} id={name} placeholder={placeholder} className="w-full input" value={value} onChange={(event)=>handleChange(name,event)} maxLength={maxLength} onInput={handleInput}/>
    
    </>
  )
}

export default CardInput