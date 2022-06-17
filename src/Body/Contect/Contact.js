import React from "react";
import Seperator from "../../Components/Common/Seperator";
import SocialContact from "../../Components/Common/Social-Contact";
import "./Contact.css";
function Contact() {
  let Resume =
    "https://usmanasif961507868.files.wordpress.com/2021/08/resume-usman.pdf";
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={Resume}>
            <i className="fi-rr-cloud-download download-icon"></i>Download
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
