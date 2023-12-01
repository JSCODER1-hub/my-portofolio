import React from 'react'
import time from './../imgs/time.png'
import communication from './../imgs/communication.png'
import problem from './../imgs/problem.png'
import adaptability from './../imgs/adaptation.png'
const Skills = () => {
  return (
    <div className='skills'>
        <h2>Four Skills That I Always Promise </h2>
        <div className='skill-grid'>
            <div className='skill'>
                <div>
                    <img src={problem}/>
                    <h3>Problem Solving</h3>
                </div>
                    <p>Breaking down big problems into small one and designing a solution for each one is my passion</p>
            </div>
            <div className='skill'>
                <div>
                <img src={time}/>
                <h3>Time Managment</h3>
                </div>
                <p>One of the biggest advancements in managing our time is achieved when we become proactive with how we spend it, meaning we don’t react to every stimulus in our environment. </p>
            </div>
            <div className='skill'>
                <div>
                <img src={adaptability}/>
                <h3>Adaptability</h3>
                </div>
                <p>“Nobody likes to change. There will always be resistance to change, and there always will be change. And the quicker you get to that, the easier it is. It’s not such a difficult thing. If you entrench yourself and go, ‘By God, I will not change, I will not have this.’ Then, you’re a dead man. We’re great at adaptability. It’s our strongest  suit.” – Nick Nolte</p>
            </div>
            <div className='skill'>
                <div>

                    <img src={communication}/>
                    <h3>Communication</h3>
                </div>
                <p>Effective communication isn’t about talking; it’s about listening. You can be the most interesting person in the world, but if you don’t know how to listen, you’ll never build a connection with anyone else.</p>
            </div>
        </div>
    </div>
  )
}

export default Skills