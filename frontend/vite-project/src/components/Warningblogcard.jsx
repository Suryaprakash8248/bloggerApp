import React from 'react'
import { Link } from 'react-router';

function Warningblogcard() {
  return (
     <div>
      <h2>You don't have any blogs created</h2>
      <h3>create your first blog 👇</h3>
      <Link to={"/createblog"}><button>Create</button></Link>
    </div>
  )
}

export default Warningblogcard;