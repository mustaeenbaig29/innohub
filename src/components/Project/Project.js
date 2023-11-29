import React from 'react'
import project_1 from "../images/project-1.jpg"
import project_2 from "../images/project-2.jpg"
import project_3 from "../images/project-3.jpg"
import project_4 from "../images/project-4.jpg"
import project_5 from "../images/project-5.jpg"
import project_6 from "../images/project-6.jpg"

const Project = () => {

  const cardStyle = {
    '--width': 510,
    '--height': 700,
  };


  return (
    <section class="section project" id="project" aria-label="project">
    <div class="container">

      <h2 class="h2 section-title">Our Recent Projects</h2>

      <p class="section-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua.
      </p>

      <ul class="grid-list">

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={cardStyle}>
              <img src={project_1} width="510" height="700" loading="lazy"
                alt="Designing a better cinema experience" class="img-cover"/>
            </figure>

            <div class="card-content">

              <p class="card-subtitle">SEO Optimization</p>

              <h3 class="h3">
                <a href="#" class="card-title">Designing a better cinema experience</a>
              </h3>

              <a href="#" class="btn btn-primary">View Details</a>

            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={cardStyle}>
            <img src={project_2} width="510" height="700" loading="lazy"
                alt="Building design process within teams" class="img-cover"/>
            </figure>

            <div class="card-content">

              <p class="card-subtitle">Digital Marketing</p>

              <h3 class="h3">
                <a href="#" class="card-title">Building design process within teams</a>
              </h3>

              <a href="#" class="btn btn-primary">View Details</a>

            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder"  style={cardStyle}>
            <img src={project_3} width="510" height="700" loading="lazy"
                alt="How intercom brings play into their design process" class="img-cover"/>
            </figure>

            <div class="card-content">

              <p class="card-subtitle">Keyword Targeting</p>

              <h3 class="h3">
                <a href="#" class="card-title">How intercom brings play into their design process</a>
              </h3>

              <a href="#" class="btn btn-primary">View Details</a>

            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={cardStyle}>
            <img src={project_4} width="510" height="700" loading="lazy"
                alt="Stuck with to-do list, I created a new app for" class="img-cover"/>
            </figure>

            <div class="card-content">

              <p class="card-subtitle">Email Marketing</p>

              <h3 class="h3">
                <a href="#" class="card-title">Stuck with to-do list, I created a new app for</a>
              </h3>

              <a href="#" class="btn btn-primary">View Details</a>

            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder"  style={cardStyle}>
            <img src={project_5} width="510" height="700" loading="lazy"
                alt="Examples of different types of sprints" class="img-cover"/>
            </figure>

            <div class="card-content">

              <p class="card-subtitle">Marketing & Reporting</p>

              <h3 class="h3">
                <a href="#" class="card-title">Examples of different types of sprints</a>
              </h3>

              <a href="#" class="btn btn-primary">View Details</a>

            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder"  style={cardStyle}>
            <img src={project_6} width="510" height="700" loading="lazy"
                alt="Redesigning the New York times app" class="img-cover"/>
            </figure>

            <div class="card-content">

              <p class="card-subtitle">Development</p>

              <h3 class="h3">
                <a href="#" class="card-title">Redesigning the New York times app</a>
              </h3>

              <a href="#" class="btn btn-primary">View Details</a>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}

export default Project