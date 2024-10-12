import React from 'react'
import  Superman  from './Superman'
import { Superman2 } from './Superman2'
import Person3 from './Components/Person3'



export const App = () => {
  return (
   <>
    {/* <Superman/> */}

    <Person3 name="tushar"  age="21" phone="redmi" / >
    <Person3 name="rahul"  age="31" phone="mi" / >
    <Person3 name="virat"  age="35" phone="apple" / >
   </>
    
  )
}
  export default  App