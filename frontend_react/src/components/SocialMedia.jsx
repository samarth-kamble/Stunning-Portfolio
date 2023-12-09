import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.github.com/samarth-kamble">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/samarth-kamble-370069296/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/people/Samarth-Kamble/pfbid021MFePPf67up7gv9c19usZjJR8Z9dtpvCeVGEWSrjWMfaQRAe9NZ1jCHoeDyJ5Nvjl/?mibextid=ZbWKwL">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/sama.rth0811/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
