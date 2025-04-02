import React from 'react'
import Header from '../Comman_compo/Header'
import Footer from '../Comman_compo/Footer'

function Services() {
  return (
    <div>
          <div>
            <Header desc="Services"/>
              {/* Service Start */}
              <div className="container-xxl py-5">
                  <div className="container">
                      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                          <h1 className="mb-5">Our Services</h1>
                      </div>
                      <div className="row g-4">
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-globe text-primary mb-4" />
                                      <h5>WorldWide Tours</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-hotel text-primary mb-4" />
                                      <h5>Hotel Reservation</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-user text-primary mb-4" />
                                      <h5>Travel Guides</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-cog text-primary mb-4" />
                                      <h5>Event Management</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-globe text-primary mb-4" />
                                      <h5>WorldWide Tours</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-hotel text-primary mb-4" />
                                      <h5>Hotel Reservation</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-user text-primary mb-4" />
                                      <h5>Travel Guides</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                              <div className="service-item rounded pt-3">
                                  <div className="p-4">
                                      <i className="fa fa-3x fa-cog text-primary mb-4" />
                                      <h5>Event Management</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Service End */}
              {/* Testimonial Start */}
              <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="container">
                      <div className="text-center">
                          <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                          <h1 className="mb-5">Our Clients Say!!!</h1>
                      </div>
                      <div className="owl-carousel testimonial-carousel position-relative">
                          <div className="testimonial-item bg-white text-center border p-4">
                              <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdkfmMaSNVcv01P4hIqK2ToaBcUPIDReFfw&s" style={{ width: 80, height: 80 }} />
                              <h5 className="mb-0">John Doe</h5>
                              <p>New York, USA</p>
                              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                          </div>
                          <div className="testimonial-item bg-white text-center border p-4">
                              <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdkfmMaSNVcv01P4hIqK2ToaBcUPIDReFfw&s" style={{ width: 80, height: 80 }} />
                              <h5 className="mb-0">John Doe</h5>
                              <p>New York, USA</p>
                              <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                          </div>
                          <div className="testimonial-item bg-white text-center border p-4">
                              <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdkfmMaSNVcv01P4hIqK2ToaBcUPIDReFfw&s" style={{ width: 80, height: 80 }} />
                              <h5 className="mb-0">John Doe</h5>
                              <p>New York, USA</p>
                              <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                          </div>
                          <div className="testimonial-item bg-white text-center border p-4">
                              <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdkfmMaSNVcv01P4hIqK2ToaBcUPIDReFfw&s" style={{ width: 80, height: 80 }} />
                              <h5 className="mb-0">John Doe</h5>
                              <p>New York, USA</p>
                              <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Testimonial End */}
              <Footer/>
          </div>

    </div>
  )
}

export default Services
