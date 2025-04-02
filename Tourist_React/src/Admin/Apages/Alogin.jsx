import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import { toast } from 'react-toastify';

function Alogin() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("adminid")){
            redirect("/dashboard")
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

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`);

            console.log(res.data)

            // Email match 
            if (res.data.length === 0) {
                console.log("Email does not match")
                toast.error("Email does not match")
                return false;
            }

            const admin = res.data[0]
            if (admin.password !== password) {
                console.log("Passowrd does not match...!")
                toast.error("Passowrd does not match...!")
                return false;
            }

            // sessison adminid
            localStorage.setItem('adminid', admin.id)
            localStorage.setItem('adminname', admin.name)
            console.log("login successfully")
            toast.success("login successfully")
            redirect("/dashboard")


        } catch (error) {
            console.log("Error Api not valid", error)
        }



    }



    return (
        <div>
            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>
               
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </MDBCol>

                   
                        <MDBCol col='4' md='6'>

 <form onSubmit={handlesubmit}>
                            <MDBInput wrapperClass='mb-4' name='email' value={fromvalue.email} onChange={getchange} label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' name='password' value={fromvalue.password} onChange={getchange} label='Password' id='formControlLg' type='password' size="lg" />


                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

</form>



                        </MDBCol>
                        
                   
                </MDBRow>
               
            </MDBContainer>
        </div>
    )
}

export default Alogin
