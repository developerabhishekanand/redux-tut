import React from 'react'


const User = (props) => {
    //console.log(props.data.name);
    const {data} = props;
  return (
    <div>
      <h1>{`Hello ` + data.name}</h1>
    </div>
  )
}

export default User
