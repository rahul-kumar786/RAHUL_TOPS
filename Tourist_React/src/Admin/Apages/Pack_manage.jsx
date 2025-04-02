import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Aheader from '../Acommon_compo/Aheader';
import Afooter from '../Acommon_compo/Afooter';
import axios from 'axios'
function Pack_manage() {

  const [pack,setpack] =useState([])



  useEffect(()=>{
    fetchdata()
},[])


const fetchdata=async()=>{
    const res = await axios.get("http://localhost:3000/packeges")
  console.log(res.data)
  setpack(res.data)
  
  
}
  return (
    <div>
      <Aheader desc={"Manage package"}/>
      <div className="container">
      <h1>manage packege</h1>
      <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Day</th>
          <th scope='col'>Person</th>
          <th scope='col'>Price</th>
          <th scope='col'>City</th>
          <th scope='col' colSpan={3}>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
              pack && pack.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope='row'>{item.id}</th>
                    <td>{item.days}</td>
                    <td>{item.person}</td>
                    <td>{item.price}</td>
                    <td>{item.city}</td>
                    <td>
                      <button className='btn btn-primary'>View</button>
                      <button className='btn btn-success mx-2'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>

                )
              })
       }
      </MDBTableBody>
    </MDBTable>
      </div>
      <Afooter/>
    </div>
  )
}

export default Pack_manage
