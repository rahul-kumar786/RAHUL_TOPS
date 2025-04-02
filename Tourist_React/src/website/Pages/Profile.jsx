import React from 'react'
import Header from '../Coman_compo/Header'
import Footer from '../Coman_compo/Footer';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

function Profile() {
  return (
    <div>
        <Header desc="Update profile" />
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
        <h1>update user</h1>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
       <form action="" >
       <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">update your account</h2>
          <MDBInput wrapperClass='mb-4' name='name'label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4'  name='email'  label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4'  name='password'  label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' name='phone' label='your phone number' size='lg' id='form4' type='tel'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>update profile</MDBBtn>
        </MDBCardBody>
       </form>
      </MDBCard>
    </MDBContainer>
    <Footer />
    </div>
  )
}

export default Profile
