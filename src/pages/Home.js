import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'

export default class Home extends Component {
     render() {
          return (
               <div>
                 <AppNavbar/>
                    <section id="home" data-stellar-background-ratio="0.5">
                         <div className="overlay"></div>
                         <div className="container">
                              <div className="row">

                                   <div className="col-md-6 col-sm-12">
                                        <div className="home-info">
                                             <h1>La MAE Assurances accompagne les personnes</h1>
                                             <a href="#about" className="btn section-btn smoothScroll">Connaissez-vous</a>
                                             <span>
                                                  CALL US (+66) 010-020-0340
                                                  <small>For any inquiry</small>
                                             </span>
                                        </div>
                                   </div>

                                   <div className="col-md-6 col-sm-12">
                                        <div className="home-video">
                                             <div className="embed-responsive embed-responsive-16by9">
                                                  <a href="https://www.youtube.com/watch?v=6Ycle839zfY" frameBorder="0" allowFullScreen></a>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </section>
                    <section id="about" data-stellar-background-ratio="0.5">
                         <div className="container">
                              <div className="row">

                                   <div className="col-md-5 col-sm-6">
                                        <div className="about-info">
                                             <div className="section-title">
                                                  <h2>Pourquoi nous choisir</h2>
                                                  <span className="line-bar">...</span>
                                             </div>
                                             <h3>Mutuelle, engagée, responsable et citoyenne.</h3>
                                             <p>La MAE Assurances accompagne les personnes pour bâtir,
                                                  protéger et valoriser ce qu’elles considèrent comme essentiel
                                                  à leur sécurité financière individuelle et collective en leur
                                                  donnant accès à des produits et services personnalisés.</p>
                                        </div>
                                   </div>

                                   <div className="col-md-3 col-sm-6">
                                        <div className="about-info skill-thumb">

                                             <strong>Service de qualité <i class="fa-regular fa-check"></i></strong>
                                             <span className="pull-right"></span>
                                             <div className="progress">
                                                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                                             </div>

                                             <strong>Proximité</strong>
                                             <span className="pull-right"></span>
                                             <div className="progress">
                                                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>

                                                  </div>
                                             </div>

                                             <strong>Plus humain</strong>
                                             <span className="pull-right"></span>
                                             <div className="progress">
                                                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                                             </div>

                                             <strong>Assurance personnalisée</strong>
                                             <span className="pull-right"></span>
                                             <div className="progress">
                                                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                                             </div>

                                        </div>
                                   </div>

                                   <div className="col-md-4 col-sm-12">
                                        <div className="about-image">
                                             <img src="images/about-image.jpg" className="img-responsive" alt="" />
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </section>

                    <section id="blog" data-stellar-background-ratio="0.5">
                         <div className="container">
                              <div className="row">

                                   <div className="col-md-12 col-sm-12">
                                        <div className="section-title">
                                             <h2>Particuliers</h2>
                                             <span className="line-bar">...</span>
                                        </div>
                                   </div>

                                   <div className="col-md-6 col-sm-6">

                                        <div className="media blog-thumb">
                                             <div className="media-object media-left">
                                                  <a href="blog-detail.html"><img src="images/maison.jpg" className="img-responsive" alt="" /></a>
                                             </div>
                                             <div className="media-body blog-info">
                                                  <small><i className="fa fa-clock-o"></i> December 22, 2017</small>
                                                  <h3><a href="blog-detail.html">Assurance d'habitation</a></h3>
                                                  <p>L'assurance d'habitation de la MAE Assurances est
                                                       étudiée pour couvrir tous les besoins du quotidien.
                                                       Une couverture globale avec une procédure de dédommagement facile...</p>
                                                  <a href="blog-detail.html" className="btn section-btn">Découvrir</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-md-6 col-sm-6">

                                        <div className="media blog-thumb">
                                             <div className="media-object media-left">
                                                  <a href="blog-detail.html"><img src="images/v.jpg" className="img-responsive" alt="" /></a>
                                             </div>
                                             <div className="media-body blog-info">
                                                  <small><i className="fa fa-clock-o"></i> December 18, 2017</small>
                                                  <h3><a href="blog-detail.html">Assurance d'auto</a></h3>
                                                  <p>Avec l’assurance d'auto de la MAE Assurances,
                                                       nous avons conçu pour vous des garanties à la carte,
                                                       afin de trouver la formule qui vous correspond le mieux...</p>
                                                  <a href="blog-detail.html" className="btn section-btn">Découvrir</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-md-6 col-sm-6">

                                        <div className="media blog-thumb">
                                             <div className="media-object media-left">
                                                  <a href="blog-detail.html"><img src="images/santé.jpg" className="img-responsive" alt="" /></a>
                                             </div>
                                             <div className="media-body blog-info">
                                                  <small><i className="fa fa-clock-o"></i> December 14, 2017</small>
                                                  <h3><a href="blog-detail.html">Assurance de santé</a></h3>
                                                  <p>.</p>
                                                  <a href="blog-detail.html" className="btn section-btn">Découvrir</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-md-6 col-sm-6">

                                        <div className="media blog-thumb">
                                             <div className="media-object media-left">
                                                  <a href="blog-detail.html"><img src="images/Voyage.jpg" className="img-responsive" alt="" /></a>
                                             </div>
                                             <div className="media-body blog-info">
                                                  <small><i className="fa fa-clock-o"></i> December 10, 2017</small>
                                                  <h3><a href="blog-detail.html">Assurance de voyage</a></h3>
                                                  <p>Avec l'assistance à l’étranger de la MAE Assurances, vous envisagerez votre séjour en toute quiétude...</p>
                                                  <a href="blog-detail.html" className="btn section-btn">Découvrir</a>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </section>

                    <section id="work" data-stellar-background-ratio="0.5">
                         <div className="container">
                              <div className="row">

                                   <div className="col-md-12 col-sm-12">
                                        <div className="section-title">
                                             <h2>Our work</h2>
                                             <span className="line-bar">...</span>
                                        </div>
                                   </div>

                                   <div className="col-md-3 col-sm-6">

                                        <div className="work-thumb">
                                             <a href="images/work-image1.jpg" className="image-popup">
                                                  <img src="images/work-image1.jpg" className="img-responsive" alt="Work" />

                                                  <div className="work-info">
                                                       <h3>Clean &amp; Minimal</h3>
                                                       <small>Product Design</small>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>

                                   <div className="col-md-3 col-sm-6">

                                        <div className="work-thumb">
                                             <a href="images/work-image2.jpg" className="image-popup">
                                                  <img src="images/work-image2.jpg" className="img-responsive" alt="Work" />

                                                  <div className="work-info">
                                                       <h3>Studio Bag</h3>
                                                       <small>Branding</small>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>

                                   <div className="col-md-3 col-sm-6">

                                        <div className="work-thumb">
                                             <a href="images/work-image3.jpg" className="image-popup">
                                                  <img src="images/work-image3.jpg" className="img-responsive" alt="Work" />

                                                  <div className="work-info">
                                                       <h3>Frame Design</h3>
                                                       <small>Photography</small>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>

                                   <div className="col-md-3 col-sm-6">

                                        <div className="work-thumb">
                                             <a href="images/work-image4.jpg" className="image-popup">
                                                  <img src="images/work-image4.jpg" className="img-responsive" alt="Work" />

                                                  <div className="work-info">
                                                       <h3>Paint Work</h3>
                                                       <small>Art, Design</small>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </section>

                    <section id="contact" data-stellar-background-ratio="0.5">
                         <div className="container">
                              <div className="row">

                                   <div className="col-md-12 col-sm-12">
                                        <div className="section-title">
                                             <h2>Nous Contacter</h2>
                                             <span className="line-bar">...</span>
                                        </div>
                                   </div>

                                   <div className="col-md-8 col-sm-8">


                                        <form id="contact-form" role="form" action="#" method="post">
                                             <div className="col-md-6 col-sm-6">
                                                  <input type="text" className="form-control" placeholder="Nom et Prénom" id="cf-name" name="cf-name" required="" />
                                             </div>
                                             <div className="col-md-6 col-sm-6">
                                                  <input type="tel" className="form-control" placeholder="Téléphone" id="cf-number" name="cf-number" required="" />
                                             </div>

                                             <div className="col-md-6 col-sm-6">
                                                  <input type="email" className="form-control" placeholder="Email *" id="cf-email" name="cf-email" required="" />
                                             </div>

                                             <div className="col-md-6 col-sm-6">
                                                  <textarea className="form-control" rows="2" placeholder="Objet *" id="cf-message" name="cf-message" required=""></textarea>
                                             </div>

                                             <div className="col-md-12 col-sm-12">
                                                  <textarea className="form-control" rows="6" placeholder="Message *" id="cf-message" name="cf-message" required=""></textarea>
                                             </div>

                                             <div className="col-md-4 col-sm-12">
                                                  <input type="submit" className="form-control" name="submit" value="Envoyer Message" />
                                             </div>

                                        </form>
                                   </div>

                                   <div className="col-md-4 col-sm-4">
                                        <div className="google-map">

                                             <iframe src="https://goo.gl/maps/BPCUAwJ7wDFSeNWp6" allowFullScreen></iframe>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </section>

                    <footer data-stellar-background-ratio="0.5">
                         <div className="container">
                              <div className="row">

                                   <div className="col-md-5 col-sm-12">
                                        <div className="footer-thumb footer-info">
                                             <h2>Assurance MAE</h2>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                   </div>

                                   <div className="col-md-2 col-sm-4">
                                        <div className="footer-thumb">
                                             <h2>Company</h2>
                                             <ul className="footer-link">
                                                  <li><a href="#">About Us</a></li>
                                                  <li><a href="#">Join our team</a></li>
                                                  <li><a href="#">Read Blog</a></li>
                                                  <li><a href="#">Press</a></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-md-2 col-sm-4">
                                        <div className="footer-thumb">
                                             <h2>Services</h2>
                                             <ul className="footer-link">
                                                  <li><a href="#">Pricing</a></li>
                                                  <li><a href="#">Documentation</a></li>
                                                  <li><a href="#">Support</a></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-md-3 col-sm-4">
                                        <div className="footer-thumb">
                                             <h2>Find us</h2>
                                             <p>123 Grand Rama IX, <br /> Krung Thep Maha Nakhon 10400</p>
                                        </div>
                                   </div>

                                   <div className="col-md-12 col-sm-12">
                                        <div className="footer-bottom">
                                             <div className="col-md-6 col-sm-5">
                                                  <div className="copyright-text">
                                                       <p>Copyright &copy; 2017 Your Company</p>
                                                  </div>
                                             </div>
                                             <div className="col-md-6 col-sm-7">
                                                  <div className="phone-contact">
                                                       <p>Call us <span>(+66) 010-020-0340</span></p>
                                                  </div>
                                                  <ul className="social-icon">
                                                       <li><a href="https://www.facebook.com/templatemo" class="fa fa-facebook-square" attr="facebook icon"></a></li>
                                                       <li><a href="#" className="fa fa-twitter"></a></li>
                                                       <li><a href="#" className="fa fa-instagram"></a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </footer>
                    

               </div>
          )
     }
}
