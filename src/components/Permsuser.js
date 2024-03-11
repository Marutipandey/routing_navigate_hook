import React  from 'react'
import {useParams} from 'react-router-dom'
const Permsuser = () => {
    const Perms = useParams()
    const {name} = Perms
  return (
    <div>
      <h1>  this is a {name} page </h1>
    </div>
  )
}

export default Permsuser
