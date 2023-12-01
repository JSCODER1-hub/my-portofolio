import React from "react";
import techs from "./../imgs/techs.png";
import reactLogo from "./../imgs/react.png";
const Technologies = () => {
  return (
    <div className="technologies">
      <h2>Technical Skills</h2>
      <div className="fundamentals">
        <img src={techs} />
        <div className="details">
          <h3>Html , Css , Javascript</h3>
          <p>
            These are the fundamentals of web development and i have already
            created some designs with them without any framework
          </p>
        </div>
      </div>
      <div className="frameworks">
        <img src={reactLogo} />
        <div className="details">
          <h3>React JS</h3>
          <p>
            I use React as the main Javascript library to build project and i
            have good knowledge with react hooks and like useState and useEffect
            ,etc and state managment packages like redux{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
