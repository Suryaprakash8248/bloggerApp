import React from 'react'

function Footer() {
  const getYear = new Date().getFullYear()
  return (
    <footer style={{
      backgroundColor:"black",
      height:"100px",
      width:"100%",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:'center',
      position:'fixed',
      bottom:"0px"

    }}>copyright©️{getYear}</footer>
  )
}

export default Footer