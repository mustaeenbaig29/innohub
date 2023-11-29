import React from 'react'
import { IoChatbox,IoPhonePortrait,IoArchive,IoBuild } from "react-icons/io5";
import { MdDesktopMac } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

const Service = () => {
  return (
    <section class="section service" id="service" aria-label="service">
        <div class="container">

          <h2 class="h2 section-title">Services We Provided</h2>

          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna.
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                <IoChatbox  className='chatbox'/>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">SEO Optimization</a>
                </h3>

                <p class="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque
                  ipsa quae.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" >
                <MdDesktopMac className='desktop'/>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Digital Marketing</a>
                </h3>

                <p class="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque
                  ipsa quae.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  < FaLightbulb className="bulb"/>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Market Research</a>
                </h3>

                <p class="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque
                  ipsa quae.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" >
                  <IoPhonePortrait className="phone-portrait"/>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Keyword Targeting</a>
                </h3>

                <p class="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque
                  ipsa quae.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" >
                  <IoArchive className="archive"/>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Email Marketing</a>
                </h3>

                <p class="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque
                  ipsa quae.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon" >
                  <IoBuild className="build"/>
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Marketing & Reporting</a>
                </h3>

                <p class="card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque
                  ipsa quae.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Service