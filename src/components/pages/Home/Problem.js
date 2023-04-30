import React from 'react'
import { Link } from "react-router-dom";

function Problem() {
    return (
        <>
        <section id="problem" class="problem">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>The Problem</h2>
                </div>

                <div class="row content">
                    <div class="col-lg-3"></div> {/* Added empty col pushes it to roughly the middle; completely centered text looks bad with lists */}
                    <ul class="col-lg-7">
                        <li><i class="ri-close-circle-line"></i> The average American driver spends 17 hours a year and $365 in gas looking for parking</li>
                        <li><i class="ri-close-circle-line"></i> New parking garages and lots are prohibitively expensive</li>
                        <li><i class="ri-close-circle-line"></i> Reservation-style parking systems are expensive and difficult to scale</li>
                    </ul>
                </div>

            </div>
        </section>
        </>
    );
}

export default Problem;
