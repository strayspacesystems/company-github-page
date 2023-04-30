import React from 'react'
import Hero from './Hero'
import { Link } from "react-router-dom";

function Solution() {
    return (
        <>
        <section id="solution" class="solution section-bg">
            <div class="container text-center" data-aos="fade-up">

                <div class="section-title">
                    <h2>The Solution</h2>
                </div>
                <p>Stray Space Systems aims to solve the unmet parking availability needs of organizations with large commuter populations. We are a subscription-based software as a service company that college campuses, municipalities, and large businesses can subscribe to and provide to their commuters.</p>
                <p>Our offerings include parking availability reporting, a parking assistant for parking predictions, and a security bundle that includes mobile enforcement, automatic number plate recognition and suspicious behavior recognition. Stray Space Systems provides server hosting, deployment, and is flexible to the needs of each customer. Our parking solutions can be applied anywhere that cameras exist. Send us an email to upgrade to your intelligent parking solution today!</p>
                
            </div>
        </section>
        </>
    );
}

export default Solution;
