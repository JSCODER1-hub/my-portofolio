import React from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import photo from "./../imgs/photo.webp";
import { useRef, useState } from "react";
import logo from "./../imgs/logo.png";

const Introuction = () => {
  const [inProp, setInProp] = useState(false);
  const menu = useRef(0);
  window.onload = function () {
    setInProp(true);
  };

  function toggleMenu() {
    let links = document.querySelector(".links");

    // Stopping event to propagate and close the menu

    links.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    menu.current.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    // Adding Active Class to the menu

    menu.current.addEventListener("click", function () {
      menu.current.classList.toggle("menu-active");

      if (!links.classList.contains("active")) {
        // setting the animations
        setTimeout(() => (links.style.opacity = "1"), 10);
        links.classList.toggle("active");
      } else {
        links.style.opacity = "0";
        setTimeout(() => links.classList.toggle("active"), 300);
      }
    });

    // Handling clicking anywhere in the document
    document.addEventListener("click", function (e) {
      if (e.target != menu.current && e.target != links) {
        if (links.classList.contains("active"))
          links.classList.remove("active");
        menu.current.classList.remove("menu-active");
      }
    });
  }

  return (
    <div className="container">
      <CSSTransition
        in={inProp}
        nodeRef={null}
        timeout={500}
        classNames="carpet"
      >
        <div className="img">
          <CSSTransition
            in={inProp}
            nodeRef={null}
            timeout={2000}
            classNames="item"
          >
            <img src={photo} onLoad={toggleMenu} />
          </CSSTransition>
        </div>
      </CSSTransition>

      <div className="header">
        <div className="navbar">
          <div className="links-container">
            <ul className="links">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="#work">
                <li>Works</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
            </ul>
            <button className="toggle-menu" ref={menu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="logo">
            <img src={logo} />
          </div>
        </div>
        <CSSTransition
          in={inProp}
          nodeRef={null}
          timeout={1000}
          classNames="content"
        >
          <div className="brief">
            <p className="name">Mohamed Medhat</p>
            <h1 className="job">
              Front-End <br /> Developer
            </h1>
            <p className="quote">
              Successful website is about using stable technologies and making
              it compatiable with all devices, because We don't just build
              websites, we build websites that SELLS
            </p>
            <a
              href="mailto:mohamedmedhat86452@yahoo.com"
              className="button contact-button"
            >
              Contact Me{" "}
            </a>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Introuction;
