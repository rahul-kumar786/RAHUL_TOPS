import React, { useState } from 'react'
import Aheader from '../Acommon_compo/Aheader'
import Afooter from '../Acommon_compo/Afooter'
import axios from 'axios'

function Add_packeges() {
  const [packages,setpackage] = useState({
    id:"",
    url:"",
    price:"",
    city:"",
    days:"",
    person:"",
    desc:""
})

// onchage event
const handlechange = (e)=>{
    setpackage({
        ...packages,
        // id
        id:new Date().getTime().toString(),
        [e.target.name]:e.target.value
    })
    console.log(packages)
}

// creted
const handlesubmit=async(e)=>{
    e.preventDefault();

    const res = await axios.post(`http://localhost:3000/packeges`,packages);
    console.log(res.data)
    setpackage({
        url:"",
        price:"",
        city:"",
        days:"",
        person:"",
        desc:""
    })
}

return (
<div>
  <Aheader desc="Add data Packges" />
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="container">
                  <div className="booking p-5">
                      <div className="row g-5 align-items-center">
                         
                          <div className="col-md-12">
                              <h1 className="text-white mb-4">Add Packges</h1>
                              <form onSubmit={handlesubmit}>
                                  <div className="row g-3">
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="url" className="form-control bg-transparent" name='url' value={packages.url} onChange={handlechange} placeholder="Your package image" />
                                              <label htmlFor="package Image">Your Package Image</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating" >
                                              <input type="tel" className="form-control bg-transparent" name='price' value={packages.price}  onChange={handlechange}  placeholder="Price" />
                                              <label htmlFor="Price">Package Price</label>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="form-floating">
                                              <select name='city' value={packages.city}  onChange={handlechange} className="form-select bg-transparent" id="select1">
                                                  <option value="India">India</option>
                                                  <option  value="USA">USA</option>
                                                  <option  value="UAE">UAE</option>
                                                  <option value="Canda">Canda</option>
                                              </select>
                                              <label htmlFor="select1">Location</label>
                                          </div>
                                      </div>

                                      <div className="col-md-12">
                                          <div className="form-floating">
                                              <select name='days' value={packages.days}  onChange={handlechange} className="form-select bg-transparent" id="select1">
                                                  <option value="2">2</option>
                                                  <option  value="4">4</option>
                                                  <option  value="6">6</option>
                                                  <option value="8">8</option>
                                              </select>
                                              <label htmlFor="select1">days</label>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="form-floating">
                                              <select name='person' value={packages.person}  onChange={handlechange} className="form-select bg-transparent" id="select1">
                                                  <option value="2">2</option>
                                                  <option  value="4">4</option>
                                                  <option  value="3">3</option>
                                                  <option value="8">8</option>
                                              </select>
                                              <label htmlFor="select1">Person</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control bg-transparent"  onChange={handlechange} name='desc' value={packages.desc} placeholder="package Descitioon" id="message" style={{ height: 100 }} defaultValue={""} />
                                              <label htmlFor="Descrition">package Descitioon</label>
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
      <Afooter/>
    </div>
  )
}

export default Add_packeges
