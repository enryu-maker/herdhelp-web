import React from 'react'
import '../components.css'


function updateweight() {
  return (
    <>
    <div className='updateweight'>

    


      <label for="cars">Species</label><br/>
      {/* <input type={Text} required> */}
        <select name="Species" id="species">
        
        <option value="cow">Cow</option>
        <option value="Goat">Goat</option>
        <option value="Horse">Horse</option>
        <option value="Pig">Pig</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Sheep">Sheep</option>
        </select>

        <div className='tag'>
        <label>Tag Number</label><br/>
        <input type={Number} required placeholder='Tag Number'></input>
        </div>

        <div className='tag'>
        <label>Weight</label><br/>
        <input type={Number} required placeholder='Weight'></input>
        </div>


<button className='addanimalsbtn'>Update Weight</button>


    </div>


    </>
  )
}

export default updateweight