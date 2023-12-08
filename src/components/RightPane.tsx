import {useContext} from 'react'
import {ValidityContext } from '../context/ValidityContext'
import Form from './Form'
import Completed from './Completed'
const RightPane = () => {

  const {validated} = useContext(ValidityContext)

  return (
    <main className="flex-grow md:self-stretch h-74  relative grid place-content-center">
      <div className="w-full md:w-9/12 md:h-full h-[90%] absolute bottom-0 md:right-0 py-4 md:py-12 md:grid md:place-items-center">

        {validated?<Completed></Completed>:<Form></Form>}
      

      </div>
    </main>
  )
}

export default RightPane