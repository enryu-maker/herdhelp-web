import React from 'react'

function addmedication() {
  return (
    <>
    <div className='addmedication'>



    <div className='tag'>
      <label></label><br/>
      <input type={Text} required placeholder='Species Name'></input>
      </div>


    <div className='tag'>
      <label>Tag Number*</label><br/>
      <input type={Number} required placeholder='tag'></input>
      </div>

    <div className='tag'>
      <label>Reason for Medication</label><br/>
      <input type={Text} required placeholder='Medication'></input>
      </div>

    <div className='tag'>
      <label>Medicine</label><br/>
      <input type={Text} required placeholder='Medicine'></input>
      </div>

    <div className='tag'>
      <label>Medication Date</label><br/>
      <input type={Number} required placeholder='YYYY-MM-DD'></input>
      </div>

    <div className='tag'>
      <label>Dosage</label><br/>
      <input type={Number} required placeholder='Dosage'></input>
      </div>

      <div className='tag'>
      <label>Withdrawal</label><br/>
      <input type={Text} required placeholder='Withdrawal'></input>
      </div>

    <button className='addanimalsbtn'>ADD MEDICATION</button>

    </div>
    
    </>
  )
}

export default addmedication