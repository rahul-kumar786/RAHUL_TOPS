import React, { useState } from 'react'
import Aheader from '../Acommon_compo/Aheader'
import Afooter from '../Acommon_compo/Afooter'

import axios from 'axios'
function Add_service() {

    const [service, setservice] = useState({
        id: "",
        icon: "",
        title: "",
        desc: ""
    })

    const handlechange = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(service)
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:3000/service`, service);
        console.log(res.data)
        setservice({
            id: "",
            icon: "",
            title: "",
            desc: ""
        })
    }



    return (
        <div>
            <Aheader desc="Add data Services" />
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                             <div className="col-md-12">
                                <h1 className="text-white mb-4">Add service</h1>
                                <form onSubmit={handlesubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="url" className="form-control bg-transparent" name='icon' value={service.icon} onChange={handlechange} placeholder="Your Service image" />
                                                <label htmlFor="package Image">Your Service Image</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating" >
                                                <input type="tel" className="form-control bg-transparent" name='title' value={service.title} onChange={handlechange} placeholder="Title" />
                                                <label htmlFor="Price">Service Title</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" name='desc' value={service.desc} onChange={handlechange} placeholder="Service Descitioon" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="Descrition">service Descitioon</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit">Add pack</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Afooter />
        </div>
    )
}

export default Add_service
