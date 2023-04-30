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
                        StraySpaceSystems LLC was founded by University of New Haven graduates 
                        Benjamin Greenfield, Steven Atilho, and Benjamin Placzek on Jun 27, 2022. 
                        The idea for an intelligent parking solution was born amidst difficulties 
                        with campus parking. After one too many walks up the steep hill up to campus 
                        because they were not able to find parking, the team decided that enough was 
                        enough and the idea for StraySpaceSystems was born, under its original name 
                        “SmartPark”. “SmartPark” started off as a capstone project that was able to 
                        report parking availability and make basic parking predictions. With much 
                        thanks to the support from professors and campus staff alike, the project 
                        was able to win many awards at regional conferences and even the University 
                        of New Haven engineering expo. It was also the topic of a research paper 
                        welcomed by the 11th International Conference on Digital Image Processing 
                        and Vision (ICPIV 2022)
                        </p>
                        <p>
                        After graduation, David Leandres and Drew Dorris were eager to join 
                        StraySpaceSystems LLC, providing expertise in business management and 
                        web development, respectively. Since May 2022, the group has been hard 
                        at work to program an intelligent parking solution and solidify our status 
                        as an official LLC in the State of Connecticut. 
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
