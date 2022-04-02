import React from 'react'
// import { Link } from 'react-router-dom'



import Navmain from '../Nav/navmain'
import './mainpage.css'
import Components from '../components/components'
//
//
import Addanimal from '../components/addanimals/addanimal'
import Addmedication from '../components/addmedication/addmedication'
import Updateweight from '../components/updateweight/updateweight'




function mainpage() {

  return (
      <>
      <Navmain/>
    

   
    <Components/>
    <Addanimal/>
    <Addmedication/>
    <Updateweight/>
    </>
  )
}

export default mainpage