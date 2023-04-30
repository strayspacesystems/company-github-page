import React from 'react'
import Hero from './Hero'
import { Link } from "react-router-dom";

function Team() {
    return (
        <>
        <section id="team" class="team section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Team</h2>
                    <p>Learn more about our passionate and diverse team.</p>
                </div>

                <div class="row">

                    <div class="col-lg-6">
                        <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                            <div class="pic"><img src="assets/img/team/steven-atilho.jpg" class="img-fluid" alt="" /></div>
                            <div class="member-info">
                                <h4>Steven Atilho</h4>
                                <span>Founding Partner</span>
                                <p>Lead Full-Stack and DevOps Engineer</p>
                                <div class="social">
                                    <a href="https://www.linkedin.com/in/stevenati/"> <i class="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-4 mt-lg-0">
                        <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                            <div class="pic"><img src="assets/img/team/benjamin-greenfield.jpeg" class="img-fluid" alt="" /></div>
                            <div class="member-info">
                                <h4>Benjamin Greenfield</h4>
                                <span>Founding Partner</span>
                                <p>Lead Solutions Engineer</p>
                                <div class="social">
                                    <a href="https://www.linkedin.com/in/benjamin-greenfield825/"> <i class="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-4">
                        <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                            <div class="pic"><img src="assets/img/team/benjamin-placzek.jpg" class="img-fluid" alt="" /></div>
                            <div class="member-info">
                                <h4>Benjamin Placzek</h4>
                                <span>Founding Partner</span>
                                <p>Lead AI & Big Data Engineer</p>
                                <div class="social">
                                    <a href="https://www.linkedin.com/in/benjamin-placzek/"> <i class="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-4">
                        <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                            <div class="pic"><img src="assets/img/team/david-leandres.jpeg" class="img-fluid" alt="" /></div>
                            <div class="member-info">
                                <h4>David Leandres</h4>
                                <span>Partner</span>
                                <p>Lead Financials & Operations</p>
                                <div class="social">
                                    <a href="https://www.linkedin.com/in/david-leandres/"> <i class="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3"></div> {/* Pushes next tile to the middle */}

                    <div class="col-lg-6 mt-4">
                        <div class="member d-flex align-items-middle" data-aos="zoom-in" data-aos-delay="500">
                            <div class="pic"><img src="assets/img/team/emptypfp.jpg" class="img-fluid" alt="" /></div>
                            <div class="member-info">
                                <h4>Drew Dorris</h4>
                                <span>Partner</span>
                                <p>Developer</p>
                                <div class="social">
                                    <a href="https://www.linkedin.com/in/drew-dorris-9593b0239/"> <i class="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        </>
    );
}

export default Team;
