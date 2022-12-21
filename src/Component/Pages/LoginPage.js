import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function LoginPage() {

    const history = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
        isLoggedIn: true,
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

        const getUserData = localStorage.getItem("user");

        console.log(getUserData);

        const {email, password} = input;

        if(email === "" || !email.includes("@") || !email.includes(".")){
            alert("Please enter valid email ID")
        }
        else if(password.length <= 8){
            alert("Please enter a 8 digit password!")
        }
        else{
            if(getUserData && getUserData.length){
                const userData = JSON.parse(getUserData);
                // console.log(userData);
                const userLogin = userData.filter((elem, id)=>{
                    return elem.email === email && elem.password === password;
                })
                if(userLogin.length === 0){
                    alert("Kindly enter valid email ID and password")
                }
                else{
                    alert("logged in successfully");
                    localStorage.setItem("user", JSON.stringify(input))
                    history("/dashboard")
                }
            }
        }   
    }



  return (
    <div className="container mt-3">
      <h1>Login Page</h1>
      <Form className="signup-wrapper mt-3">
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={getData}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={getData}
            name="password"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="col-lg-1 mt-4"
          onClick={addData}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
