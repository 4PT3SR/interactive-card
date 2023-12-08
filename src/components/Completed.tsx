import completeIcon from '../assets/images/icon-complete.svg'
import Button from './Button'
const Completed = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-y-5 px-5 py-4">
        <p className="self-center"><img src={completeIcon} alt="Completed" /></p>
        <p className=" text-center text-3xl font-medium tracking-wider mt-5">THANK YOU!</p>
        <p className=" text-center text-xl tracking-wide mb-5">We've added your card details</p>
        <Button btnType='button'>Continue</Button>
    </div>
  )
}

export default Completed