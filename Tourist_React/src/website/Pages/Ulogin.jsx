import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Ulogin() {
    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("userid")){
            redirect("/")
        }
    })

    const [fromvalue, setfromvalue] = useState({
        email: "",
        password: ""
    })


    const getchange = (e) => {
        setfromvalue({
            ...fromvalue,
            [e.target.name]: e.target.value
        })
        console.log(fromvalue)
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        const { email, password } = fromvalue;

        // email and password null 
        if (!email.trim() || !password.trim()) {
            console.log("Email and password are required...!");
            toast.error("Email and password are required...!")
            return false;
        }

        try {

            const res = await axios.get(`http://localhost:3000/user?email=${email}`);

            console.log(res.data)

            // Email match 
            if (res.data.length === 0) {
                console.log("Email does not match")
                toast.error("Email does not match")
                return false;
            }

            const user = res.data[0]
            if (user.password !== password) {
                console.log("Passowrd does not match...!")
                toast.error("Passowrd does not match...!")
                return false;
            }

            if(user.status !== "unblock"){
                console.log("user is block..pls contact your admin")
                toast.error("user is block..pls contact your admin")
                return false
            }

            // sessison userid
            localStorage.setItem('userid', user.id)
            localStorage.setItem('username', user.name)
            console.log("login successfully")
            toast.success("login successfully")
            redirect("/")


        } catch (error) {
            console.log("Error Api not valid", error)
        }



    }



    return (
        <div>
             <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <form onSubmit={handlesubmit}>
            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' name='email' value={fromvalue.email} onChange={getchange} label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' name='password' value={fromvalue.password} onChange={getchange} label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              <Link to='/uregister'><MDBBtn className="mb-4 w-100">Register</MDBBtn></Link>

            </MDBCardBody>
            </form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
        </div>
    )
}

export default Ulogin
