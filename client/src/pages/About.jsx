import React from "react";
import owner from "../assets/owner.jpg";
import pandan from "../assets/Pandan_8oz.jpg";
import ubelicious from "../assets/Ubelicious_8oz.jpg";
import Nav from '../components/Nav/Navbar';
import Footer from "../components/Footer/Footer";

import "./about.css";
<style>
  @import url(`https://fonts.googleapis.com/css2?family=Montaga&display=swap`);
</style>;

const About = () => {
  return (
    <>
    <Nav/>
     <main>
        <div className="about-flex">
          <img className="aboutImages" src={owner} alt="owner" />
          <div>
            <h1>Mabuhay!</h1>
            <p>
              Welcome to <b>Tahanan Candle Co.</b>, where I invite you to embark
              on an olfactory journey through the vibrant landscapes, rich
              traditions, and diverse culture of the Philippines. My scented
              candles are more than just a collection of fragrances; they're a
              homage to the beauty and spirit of the archipelago.
            </p>
          </div>
        </div>

          <div>
            <p>
              <b>Our Inspiration:</b> At Tahanan Candle Co, I am driven by a deep love for the Philippines
              and a passion for capturing its essence in every candle we create.
              Each scent is carefully curated to transport you to the heart of the
              country, evoking memories of bustling markets, serene beaches, and
              the warm embrace of its people.
            </p>

            <p><b>Crafted with Care:</b> My scented candles are handcrafted with meticulous attention to
              detail. I use a blend of premium soy wax and high-quality fragrance
              oils to ensure a clean burn and an immersive aromatic experience.
              Every aspect, from wick to wax, is thoughtfully chosen to align with
              my commitment to quality and authenticity.
            </p>
          </div>

          <div className="about-flex">
            <div>
              <p><b>A Fragrance for Every Story:</b> I've carefully curated scents that mirror the diverse landscapes of
                the Philippines. Whether you're longing for the tropical sweetness
                of ripe mangoes to the soothing notes of pandan leaves, the delicate
                elegance of sampaguita blossoms, or the comforting warmth of coconut
                palms, I have a fragrance that resonates with your unique journey.
              </p>
            </div>
            <img className="aboutImages" src={ubelicious} alt="ubelicious" />
          </div>

          <div>
            <p><b>Pure Ingredients:</b> I use only premium, sustainably sourced soy wax, natural cotton
              wicks, and phthalate-free fragrance oils in our candles. My
              ingredients are chosen with care to ensure a clean and safe burning
              experience.
            </p>
            <p><b>Sustainability Matters:</b> I am committed to sustainability and environmental responsibility.
              Our packaging is designed with both beauty and eco-consciousness in
              mind, reflecting our dedication to the well-being of our planet.
            </p>
            <p><b>Responsible Sourcing:</b> I am dedicated to responsible sourcing. Our soy wax is sustainably
              harvested, and I work with suppliers who share my commitment to
              ethical and eco-friendly practices.
            </p>
          </div>

          <div className="about-flex">
            <img className="aboutImages" src={pandan} alt="pandan" />
            <div>
              <p><b>Reusable Containers:</b> Many of my candle containers are designed to be reusable. After your
                candle has burned its last light, repurpose the container for other
                uses, reducing waste and promoting sustainability.
              </p>
            </div>
          </div>

          <div>
            <p><b>My Promise to You:</b> By choosing my candles, you are not only enhancing your living space
              but also contributing to a more sustainable future.I am dedicated to
              providing you with candles that bring warmth, comfort, and light
              while minimizing their impact on the planet.
            </p>
            <p><b>Ignite Your Memories:</b> Ignite a "Tahanan" candle and allow the scents to carry you across
              the islands, from the bustling streets of Manila to the tranquil
              shores of Palawan. Let each aroma be a reminder of the moments,
              experiences, and stories that make the Philippines a place like no
              other.
            </p>
          </div>

        <p>
          Thank you for joining us on this aromatic voyage. I am delighted to
          share the Philippines with you, one scent at a time.
        </p>
        <p>Sincerely, The Tahanan Candle Co. Owner, Jez</p>
    </main>
    <Footer/>
    </>
   
  );
};

export default About;
