import {useContext} from 'react'
import { CardContext } from '../context/CardContext'
import BackCard from './Cards/BackCard'
import FrontCard from './Cards/FrontCard'
const LeftPane = () => {
  const {card} = useContext(CardContext)
  return (
    <section className='w-full min-h-[230px] h-[26vh] bg-mobile bg-cover bg-center md:bg-desktop md:h-full md:w-1/4'>

      <div className='max-w-[400px] md:w-[500px]  h-[280px] md:h-[370px] relative  mx-auto    z-10 overflow-visible md:top-[50%] md:left-0 md:-translate-y-1/2 lg:left-[30%] '> 
      {/* changed overflow to visble bc of the animation */}

        <BackCard card={card}></BackCard>
        <FrontCard card={card}></FrontCard>

      </div>

    </section>
  )
}



export default LeftPane