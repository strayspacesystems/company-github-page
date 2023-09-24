import React from 'react'
import Hero from './Hero'
import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <section id="about" class="about">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>About Us</h2>
                </div>

                <div class="row content">
                    <div class="col-lg-6">
                        <p>
                        After failed attempts to find nearby parking and strenuous walks up steep hills, the idea for an intelligent parking solution was developed between three university students who were tired of wasting time on losing potential parking spots. 
                        </p>
                        <p>
                        Starting off as a capstone project on reporting parking availability, StraySpaceSystems LLC was created. With support from professors, campus staff, and friends,  the project has won awards at regional conferences alongside the University of New Haven Engineering Expo. StraySpaceSystems LLC was also the topic of the research paper welcomed by the 11th International Conference on Digital Image Processing and Vision (ICPIV 2022). 
                        </p>
                    </div>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-3 pt-4 pt-lg-0">
                        <img src="assets/img/logo800px.png" class="img-fluid animated" alt="" />
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

export default About;
