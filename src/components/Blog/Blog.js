import React from 'react'
import blog_1 from "../images/blog-1.jpg"
import blog_2 from "../images/blog-2.jpg"
import blog_3 from "../images/blog-3.jpg"
import blog_4 from "../images/blog-4.jpg"
import blog_5 from "../images/blog-5.jpg"

const Blog = () => {

  const cardStyle = {
    '--width': 860,
    '--height': 646,
  };

  return (
    <section class="section blog" id="blog" aria-label="blog">
        <div class="container">

          <h2 class="h2 section-title">Latest Articles Updated Weekly</h2>

          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
            aliqua.
          </p>

          <ul class="grid-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder"style={cardStyle}>
                  <img src={blog_1} width="860" height="646" loading="lazy"
                    alt="How to Become a Successful Entry Level UX Designer" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">How to Become a Successful Entry Level UX Designer</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder"style={cardStyle}>
                <img src={blog_2} width="860" height="646" loading="lazy"
                    alt="2022 Local SEO Success: The Year of Everywhere" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">2022 Local SEO Success: The Year of Everywhere</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder"style={cardStyle}>
                <img src={blog_3} width="860" height="646" loading="lazy"
                    alt="The Guide to Running a Client Discovery Process" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">The Guide to Running a Client Discovery Process</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder"style={cardStyle}>
                <img src={blog_4} width="860" height="646" loading="lazy"
                    alt="3 Ways to Get Client Approval for Scope Changes" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">3 Ways to Get Client Approval for Scope Changes</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card grid">

                <figure class="card-banner img-holder"style={cardStyle}>
                <img src={blog_5} width="860" height="646" loading="lazy"
                    alt="Top 21 Must-Read Blogs For Creative Agencies" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <time class="time" datetime="2022-06-16">June 16, 2022</time>

                  <h3 class="h3">
                    <a href="#" class="card-title">Top 21 Must-Read Blogs For Creative Agencies</a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Blog