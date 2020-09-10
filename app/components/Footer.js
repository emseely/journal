import React from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/EmmaSK/portfolio">
          <GoMarkGithub color="##e36397" size={32} /> GitHub
        </a>
        <div>September 2020</div>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/emma-seely-katz-b4386a1a3/">
          <AiOutlineLinkedin size={25} /> Emma Seely-Katz
        </a>
      </div>
    </footer>
  );
}
