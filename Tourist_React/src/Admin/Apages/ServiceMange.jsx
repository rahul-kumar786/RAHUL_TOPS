import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon_compo/Aheader';
import Afooter from '../Acommon_compo/Afooter';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function ServiceMange() {

 const [data, setdata] = useState([])


    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setdata(res.data)
    }

    const [fromvalue, setfromvalue] = useState({
        id: "",
        icon: "",
        title: "",
        desc: ""
    })

    const handleview = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`)
        console.log(res.data)
        setfromvalue(res.data)
    }


  return (
    <div>
        <Aheader desc="Service manage data" />
        <div className="container">
                <h1>Manage Service data</h1>
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th scope='col'>#id</th>
                            {/* <th scope='col'>Icon</th> */}
                            <th scope='col'>Title</th>
                            <th scope='col'>Desc</th>
                            <th scope='col'  colSpan={3} >Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data && data.map((item) => {
                                return (
                                    <tr className='text-center' key={item.id}>
                                        <th scope='row'>{item.id}</th>
                                        {/* <td>{item.icon}</td> */}
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                        <td>
                                            <button className='btn btn-primary'  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>handleview(item.id)} >View</button>
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
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Package details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <tr className='text-center'>
                                    <th scope='col'>#id</th>
                                    {/* <th scope='col'>icon</th> */}
                                    <th scope='col'>Title</th>
                                    <th scope='col'>desc</th>
                                    <th scope='col' colSpan={3} >Action</th>
                                </tr>
                                <tr className='text-center'>
                                    <td scope='col'>{fromvalue.id}</td>
                                    {/* <td scope='col'>{fromvalue.icon}</td> */}
                                    <td scope='col'>{fromvalue.title}</td>
                                    <td scope='col'>{fromvalue.desc}</td>
                                    <td className="btn btn-secondary" data-bs-dismiss="modal">close</td>
                                </tr>
                            </table>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
        <Afooter />
    </div>
  )
}

export default ServiceMange
