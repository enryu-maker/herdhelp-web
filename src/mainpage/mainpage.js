import React from 'react'
// import { Link } from 'react-router-dom'



import Navmain from '../Nav/navmain'
import './mainpage.css'
import Components from '../components/components'
//
//
import Myherds from '../components/myherds/myherds'
import Addanimal from '../components/addanimals/addanimal'
import Addmedication from '../components/addmedication/addmedication'
import Updateweight from '../components/updateweight/updateweight'
import Alerts  from '../components/alerts/alerts'



function mainpage() {

  return (
      <>
      <Navmain/>
    

   
    <Components/>
    <Myherds/>
    <Addanimal/>
    <Addmedication/>
    <Updateweight/>
    <Alerts/>


    </>
  )
}

export default mainpage