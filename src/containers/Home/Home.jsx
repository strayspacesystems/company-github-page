import { Link } from "react-router-dom";

import "./Home.css";

{/* This is all currently unused but if I need to put something in a container for w.e reason
then I'll probably put it here?
Then again I saw conflicting stuff about the component/container architecture so might just get rid of this */}

function Home() {
  return (
    <div className="text-center">
      <main>
        <h1 className="mt-4 mb-2">Overview</h1>
        
        <section className="wrapped-page" id="home">
          <ul>
            <li>On aaverage, an American driver spends 17 hours a year and $345 a year on gas looking for parking <a href="https://inrix.com/press-releases/parking-pain-us/#:~:text=With%20the%20goal%20of%20analyzing,wasted%20time%2C%20fuel%20and%20emissions">[1]</a>.</li>
            <li>In New York, the average driver spends 107 hours a year looking for parking <a href="https://www.thedrive.com/news/25557/nyc-la-san-francisco-drivers-spend-up-to-107-hours-a-year-looking-for-parking">[2]</a>.</li>
            <li>Creating new parking garages or parking lots if prohibitively expensive.</li>
            <li>Reservation-style parking systems are difficult to scale and require extra hardware and workers to enforce reservations.</li>
          </ul>

          <p>Stray Space Systems aims to solve the unmet parking availability needs of organizations with large commuter populations. We are a subscription-based software as a service company that college campuses, municipalities, and large businesses can subscribe to and provide to their commuters.</p>
          <p>Our offerings include parking availability reporting, a parking assistant for parking predictions, and a security bundle that includes mobile enforcement, automatic number plate recognition and suspicious behavior recognition. Stray Space Systems provides server hosting, deployment, and is flexible to the needs of each customer. Our parking solutions can be applied anywhere that cameras exist. Send us an email to upgrade to your intelligent parking solution today!</p>
        </section>

      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;
