import React from 'react'

const Error = (props) => {
    const message = props.message;
    const error = props.error;
  return (
    <div>
          <h3>{message}</h3>
          <h4>Error details: </h4>
          <p>{error}</p>
    </div>
  )
}

export default Error;