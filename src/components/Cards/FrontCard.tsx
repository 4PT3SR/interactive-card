import {motion} from 'framer-motion'
import { cardProps } from '../../types'
import cardLogo from '../../assets/images/card-logo.svg'



const FrontCard = ({card}: cardProps) =>{
  const cardNumber = card.cardNumber.toString() 
  return (
    <motion.div initial={{rotate:180, scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }} className="card bg-front-card bottom-0 md:bottom-auto md:top-0 left-3  md:left-1 text-white">
      <section className="flex flex-col h-full justify-between p-5">
        <div className=""><img src={cardLogo} alt="card-logo" className='w-[55px]'/></div>
        <div className="text-2xl  mt-5 tracking-wider flex justify-between">
          <span>{cardNumber.slice(0,4)}</span>
          <span>{cardNumber.slice(4,8)}</span>
          <span>{cardNumber.slice(8,12)}</span>
          <span>{cardNumber.slice(12,16)}</span>
          </div>
        <div className="flex justify-between"><p>{card.name.toUpperCase()}</p>
        <p>{card.month}/{card.year}</p></div>
      </section>
    </motion.div>
  )
}

export default FrontCard