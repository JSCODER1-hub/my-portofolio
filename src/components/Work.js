import React, { memo, useRef } from "react";
import Snippet from "./Snippet";
import todo from "./../imgs/todo.png";
import space from "./../imgs/space.png";
import todoPro from "./../imgs/todoRes.png";
import landing from "./../imgs/landing.png";
import base from "./../imgs/base.png";
import local from "./../imgs/local.webp";
import memory from "./../imgs/memory.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  const imgRef = useRef(null);
  let index = 0;
  function initSlider() {
    let length = imgRef.current.children.length;
    let imgsArray = imgRef.current.children;

    for (let i = 0; i < length; i++) {
      imgsArray[i].onclick = () => {
        window.location.href = imgsArray[i].dataset.url;
      };
      if (i == 0) {
        imgsArray[
          i
        ].style.transform = `translate(${0}px , ${-40}px) rotateZ(${0}deg)`;
        continue;
      }
      imgsArray[i].style.zIndex = -i;
      imgsArray[i].style.transform = `translate(${240}px , ${
        25 + (50 * i - 1)
      }px) rotateZ(${40 * i}deg)`;

      // imgsArray[i].style.transform = `translate(${190+(50*i-1)}px , ${25+(50*i-1)}px) rotateZ(${40*i}deg)`
    }
  }

  function handleForward() {
    if (index != imgRef.current.children.length - 1) {
      index++;

      let length = imgRef.current.children.length;
      let imgsArray = imgRef.current.children;

      for (let i = index - 1; i >= 0; i--) {
        imgsArray[i].style.transform = `translate(${-240}px , ${
          25 + 50 * (index - i)
        }px) rotateZ(${-(40 * (index - i))}deg)`;
        imgsArray[i].style.zIndex = i;
      }
      imgsArray[index].style.transform = `translate(0 ,-40px) rotateZ(0) `;
      imgsArray[index].style.zIndex = 100;
      for (let i = index + 1; i < length; i++) {
        imgsArray[i].style.transform = `translate(${240}px , ${
          25 + 50 * (i - index)
        }px) rotateZ(${40 * (i - index)}deg)`;
        imgsArray[i].style.zIndex = -i;
      }
    }
  }

  function handleBackward() {
    if (index != 0) {
      index--;

      let len = imgRef.current.children.length;
      let imgs = imgRef.current.children;

      for (let i = index - 1; i >= 0; i--) {
        imgs[i].style.transform = `translate(${-240}px , ${
          25 + 50 * (index - i)
        }px) rotateZ(${-(40 * (index - i))}deg)`;
        imgs[i].style.zIndex = i;
      }
      for (let i = index + 1; i < len; i++) {
        imgs[i].style.transform = `translate(${240}px , ${
          25 + 50 * (i - index)
        }px) rotateZ(${40 * (i - index)}deg)`;
        imgs[i].style.zIndex = -i;
      }

      imgs[index].style.transform = `translate(0 ,-40px) rotateZ(0)`;
      imgs[index].style.zIndex = 100;
    }
  }
  return (
    <div id="work" className="work">
      <div className="portofolio">
        <h2>My Portofolio</h2>
        <p>
          These are some designs that i worked on , as you can see i tried to
          make different designs with different idea and technologies
        </p>
        <div className="slider">
          <div className="images" ref={imgRef}>
            <img
              src={space}
              data-url="https://codebreake.github.io/space-app/"
            />
            <img
              src={todoPro}
              data-url="https://codebreake.github.io/TODO-app/"
            />

            <img
              src={landing}
              data-url="https://codebreake.github.io/Landing-Page/"
            />
            <img
              src={base}
              data-url="https://jscoder1-hub.github.io/Challenge-16/"
            />
            <img
              src={local}
              onLoad={initSlider}
              data-url="https://codebreake.github.io/Local-storage-Template/"
            />
          </div>
        </div>
        <div className="controls">
          <span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => handleBackward()}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => handleForward()}
            />
          </span>
        </div>
      </div>
      <div className="snippets">
        <a href="https://codebreake.github.io/TODO-app/">
          <Snippet src={todo} />
        </a>
        <a href="https://codebreake.github.io/Memory-Game/">
          <Snippet src={memory} />
        </a>
      </div>
    </div>
  );
};

export default Work;
