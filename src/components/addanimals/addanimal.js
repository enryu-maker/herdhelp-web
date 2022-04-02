import React from 'react'
import '../components.css'


function addanimal() {
  return (
   <>
   <div className='addanimals'>
      <div className='tag'>
      <label>Tag Number*</label><br/>
      <input type={Number} required placeholder='tag'></input>
      </div>
      <div className='tag'>
      <label>Name*</label><br></br>
      <input type={Text} required placeholder='Name*'></input>
      <input type={Text} required placeholder='Spacies*'></input>
      <input type={Text} required placeholder='Gender*'></input>
      <input type={Text} required placeholder='perchased*'></input>
      </div>
      <div className='tag'>
      <label>Date of Birth</label><br/>
      <input type={Number} required placeholder='YYYY-MM-DD'></input>
      </div>
      <div className='tag'>
      <label>Weight</label><br/>
      <input type={Number} required placeholder='Weight'></input>
      </div>
      <div className='tag'>
      <label>Mother Tag Number</label><br/>
      <input type={Number} required placeholder='Mother tag number'></input>
      </div>
      <div className='tag'>
      <label>Father Tag Number</label><br/>
      <input type={Number} required placeholder='Father tag number'></input>
      </div>
      <div className='tag'>
      <label>Vaccinated</label><br/>
      <input type={Text} required placeholder='Vaccinated : Yes/No'></input>
      </div>
      <div className='tag'>
      <label>Breed</label><br/>
      <input type={Text} required placeholder='Breed'></input>
      </div>
      <div className='tag'>
      <label>Registration</label><br/>
      <input type={Text} required placeholder='Registration'></input>
      </div>

      <button className='addanimalsbtn'>Register</button>
    </div>
   </>
  )
}

export default addanimal