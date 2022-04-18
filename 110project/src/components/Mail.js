import React from 'react'

const Mail = (props) => {


  return (
    <div>
    <div className='mail' onClick={()=>props.mailhandler(true)}></div>

    </div>
  )
}


export default Mail