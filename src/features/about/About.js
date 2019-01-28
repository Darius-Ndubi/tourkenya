import React, { Component } from 'react'
import NavBar from '../nav/navBar/NavBar';
// import { funzebra } from "../../../dist/assets/images/funzebra.jpg"

class About extends Component {
  render() {
    return (
      <div className="mainbg">
        <NavBar />

        <hr />

        <div className="brighttext">
          <section id="top_section">
            <div className="container">
              <div>
                <div>
                    <h1>About Us</h1>
                    <p>
                        We love to tour places and we would like you to share to the world your experience and what you saw as you toured Kenya. This is in a bid to promote local and international tourism in Kenya
                    </p>
                  </div>
                </div>
            </div>
          </section>

          <section id="mid_section">
              <div className="container">
              <h2> We like to........</h2>
                <div>
                    <div className="card p-3 col-12 col-md-6 col-lg-4">
                        <div>
                            <h3>
                                Encourage
                            </h3>
                            <p>
                                We would like to encourage you to tour Kenya's vast wildlife. Trough stories told by varoius users in this site.We hope that you would like and be motivated to visit.
                            </p>
                        </div>
                    </div>

                  <div className="card p-3 col-12 col-md-6 col-lg-4">
                      <div>
                         <h3>
                              Social Networks
                          </h3>
                          <p>We hope that this site will help in fostering strong relations with our wildlife and promote growth of local tourism. Through your stories and experiences in the wild many more Kenyans may be encouraged to visit where you were and share there experiences too.
                          </p>
                      </div>
                  </div>

                  <div className="card p-3 col-12 col-md-6 col-lg-4">
                      <div>
                        <h3>
                              Promote
                          </h3>
                          <p>
                              Our wildlife population is decreasing rapidly due to causes that can be stopped. 
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </section>

          <section id="contact_section">
            <div className="container">
                  <h2>
                      CONTACT US
                  </h2>
            </div>
            <div>
                <div className="row justify-content-center">
                    <div className="media-container-column col-lg-8" >
                            <div data-form-alert="" hidden="">
                                Thanks for filling out the form!
                            </div>
                            <form  action="" method="post" data-form-title="Tour Kenya Form"><input type="hidden" data-form-email="true" />
                                <div className="row row-sm-offset">
                                    <div className="col-md-4 multi-horizontal">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" name="name" data-form-field="Name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 multi-horizontal" data-for="email">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" name="email" data-form-field="Email" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 multi-horizontal" data-for="phone">
                                        <div className="form-group">
                                            <label >Phone</label>
                                            <input type="tel" class="form-control" name="phone" data-form-field="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" data-for="message">
                                    <label>Message</label>
                                    <textarea type="text" class="form-control" name="message" rows="7" data-form-field="Message" required=""></textarea>
                                </div>
                                <button className="btn btn-primary btn-lg" href="mailto:samone@somewhere.com" type="submit" >SEND FORM</button>
                            </form>
                    </div>
                </div>
            </div>
	          </section>
          </div>
        </div>
    )
  }
}

export default About;