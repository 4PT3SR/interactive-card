import React from 'react';
interface props {
    btnType?: 'button' | 'submit',
    children?: React.ReactNode
}

const Button = ({btnType,children}:props) => {
  return (
   <button type={btnType} className="w-full bg-btn rounded-md py-3 text-white">{children}</button>
  )
}

export default Button