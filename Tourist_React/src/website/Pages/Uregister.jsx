import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Uregister() {

    const redirect = useNavigate()

    const [data,setdata]=useState({
        id:"",
        name: "",
        email: "",
        phone: "",
        password: "",
        status: ""
    })

    const getchnage=(e)=>{
        setdata({
            ...data,
            id:new Date().getTime().toString(),
            status:"unblock",
            [e.target.name]:e.target.value
        })
        console.log(data)
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();

        if(data.email.trim() == "" || data.name.trim() == "" || data.phone.trim() ==  "" || data.password.trim() == ""){
            console.log("Pls fill form first....!")
            return false
        }

        const res = await axios.post('http://localhost:3000/user',data)
        console.log(res.data);
        setdata({
            id:"",
            name: "",
            email: "",
            phone: "",
            password: "",
            status: ""
        })
        redirect("/ulogin")
    }


  return (
    <div>
       <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
        <h1>New Register user</h1>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
       <form action="" onSubmit={handlesubmit}>
       <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' name='name' value={data.name} onChange={getchnage} label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4'  name='email' value={data.email} onChange={getchnage} label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4'  name='password' value={data.password} onChange={getchnage} label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' name='phone' value={data.phone} onChange={getchnage} label='your phone number' size='lg' id='form4' type='tel'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
       </form>
      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default Uregister
