import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function SignUpPage() {
    
    const[data, setData] = useState([]);
    const [input, setInput] = useState({
        email: "",
        password: "",
        isLoggedIn: false,
    })
    

   

    const getData = (e) => {
        console.log(e);
        // const {value, name} = e.target;
        const value = e.target.value;
        const name = e.target.name;
        
        setInput(()=>{
            return {
                ...input, [name]:value
            }
        })


    }   

    // console.log(input)

    const addData = (e) => {
        e.preventDefault();

        const {email, password} = input;

        if(email === "" || !email.includes("@") || !email.includes(".")){
            alert("Please enter valid email ID")
        }
        else if(password.length <= 8){
            alert("Please enter a 8 digit password!")
        }
        else{
            alert("signed up successfully");
            localStorage.setItem("user", JSON.stringify([...data,input]))
        }
    }


  return (
    <div className="container mt-3">
      <h1>Sign Up</h1>
      <Form className="signup-wrapper mt-3">
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={getData} name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={getData} name="password"/>
        </Form.Group>

        <Button variant="primary" type="submit" className="col-lg-1 mt-4" onClick={addData}>
          Submit
        </Button>
      </Form>
      <p className="mt-4">
        Already have an account <span> <NavLink to='/login' >Login</NavLink> </span>
      </p>
    </div>
  );
}

export default SignUpPage;
