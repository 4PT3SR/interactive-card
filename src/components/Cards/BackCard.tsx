import {motion} from 'framer-motion'
import { cardProps } from '../../types'
const BackCard = ({card}: cardProps) => {
  return (
    <motion.div 
    initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
    className="card md:bottom-0 md:right-11 lg:right-1 md:top-auto top-4 right-3 bg-back-card">
      <p className="relative top-[72px] left-[250px] text-white w-fit">{card.cvv}</p>
    </motion.div>
  )
}

export default BackCard