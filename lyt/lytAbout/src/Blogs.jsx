import React from 'react'
import B2 from './B2';
import { Touri } from './Touri'
import tour from './Data';
import B1 from './B1';
function Blogs() {
  return (
    <div>
      <B1/>
      <B2/>
      <Touri tour={tour}/>
    </div>
  )
}

export default Blogs
