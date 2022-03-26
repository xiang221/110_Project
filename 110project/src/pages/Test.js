import React from 'react'

const Test = ({user, setUser}) => {
  return (
    <div> <p>{localStorage.getItem('account')}</p></div>
  )
}

export default Test