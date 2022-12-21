import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";


function Error() {
    const history = useNavigate();

  return (
    <div style={{marginTop: "30px"}}>
       <p>Looking for something?</p>  
        <p>We're sorry. The Web address you entered is not a functioning page on our site.</p>
        <Button onClick={()=>history('/login')} variant='primary' >Redirect to Login Page</Button>

    </div>
  )
}

export default Error