import React from 'react'

import banner from "../images/about-banner.jpg"

const About = () => {

  const cardStyle = {
    '--width': 720,
    '--height': 960,
  };

  return (
    <section class="section about" id="about" aria-label="about">
    <div class="container">

      <div class="about-banner img-holder" style={cardStyle}>
        <img src={banner} width="720" height="960" loading="lazy" alt="about banner"
          class="img-cover"/>

        
       
      </div>

      <div class="about-content">

        <h2 class="h2 section-title">About Us</h2>

        <p class="section-text">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc
          tinci dunt nec
          elei fend et tiram.
        </p>

        <h3 class="h3">Who We Are</h3>

        <p class="section-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
          rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <h3 class="h3">Our Success</h3>

        <ul class="about-list">

          <li class="about-item">
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

            <p class="section-text">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its
              layout.
            </p>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>

            <p class="section-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin
              literature.
            </p>
          </li>

        </ul>

        <h3 class="h3">Our Mission</h3>

        <p class="section-text">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.
        </p>

      </div>

    </div>
  </section>
  )
}

export default About