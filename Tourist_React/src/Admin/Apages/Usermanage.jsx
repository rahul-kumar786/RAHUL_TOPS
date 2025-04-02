import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon_compo/Aheader'
import Afooter from '../Acommon_compo/Afooter';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
function Usermanage() {

    const [user,setuser]= useState([])

    useEffect(()=>{
        fetdata()
    },[])

    // view
    const fetdata=async()=>{
        const res = await axios.get("http://localhost:3000/user")
        console.log(res)
        setuser(res.data)
    }
    // delete
    const hanldedelete=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/user/${id}`)
        console.log(res.data)
        toast.success("delete user...")
        fetdata()
    }

    // status change\
    const statuschnage=async(id)=>{
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        console.log(res.data.status)

        let currentstatus = res.data.status

        try {
            if(currentstatus === "block"){
                const res= await axios.patch(`http://localhost:3000/user/${id}`,{status:"unblock"})
                console.log(res.data)
                {
                    if(res.status === 200){
                        toast.success("Unblock successfully")
                        fetdata()
                    }
                }
            }
            else if(currentstatus === "unblock"){
                const res= await axios.patch(`http://localhost:3000/user/${id}`,{status:"block"})
                console.log(res.data)
                {
                    if(res.status === 200){
                        toast.success("block successfully")
                        fetdata()
                    }
                }
            }


        } catch (error) {
            console.log("user not found..",error)
            toast.error("user not found")
        }

    }
    


  return (
    <div>
      <Aheader desc="user manage" />
      <div className="container">
                <h1>Manage Service data</h1>
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th scope='col'>#id</th>
                            {/* <th scope='col'>Icon</th> */}
                            <th scope='col'>username</th>
                            <th scope='col'>email</th>
                            <th scope='col'>phone</th>
                            <th scope='col'>Status</th>
                            <th scope='col'  colSpan={3} >Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {
                            user && user.map((data)=>{
                                    return(
                                        <tr className='text-center' key={data.id}>
                                        <th scope='row'>{data.id}</th>
                                        
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td className=''><button className='btn btn-success' onClick={()=>statuschnage(data.id)}>{data.status}</button></td>
                                        <td>
                                            <button className='btn btn-primary mx-2' >View</button>
                                        
                                            <button className='btn btn-danger' onClick={()=>hanldedelete(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                            })
                        }
                        
                    </MDBTableBody>
                </MDBTable>
            </div>
      <Afooter />
    </div>
  )
}

export default Usermanage
