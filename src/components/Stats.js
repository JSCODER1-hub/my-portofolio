import {React ,useRef} from 'react'
import img from './../imgs/base.png'
const Stats = () => {
    
    const expRef = useRef(0)
    const compRef = useRef(0)
    const liveRef = useRef(0)
    let started = false
    function increment(){
        
        window.onscroll =function(){
        if (window.scrollY > expRef.current.offsetHeight){
            if (!started){
                started = true
            let h1 = expRef.current
            let h2 = compRef.current
            let h3 = liveRef.current
            let count1 = setInterval(()=>{
                h1.textContent++;
                if (h1.textContent == h1.dataset.goal)
                    clearInterval(count1)
            } ,300)
            let count2 = setInterval(()=>{
                h2.textContent++;
                if (h2.textContent == h2.dataset.goal)
                    clearInterval(count2)
            } ,50)
            let count3 = setInterval(()=>{
                h3.textContent++;
                if (h3.textContent == h3.dataset.goal)
                    clearInterval(count3)
            } ,50)
        }
        }
        }
    }
  return (
    <div className='stats' >
        <ul>
            <li>
                <h2 className='number' data-goal="2" ref={expRef} >
                    0
                </h2>
                <p>Years<br />  Experience</p>
            </li>
            <li>
                <h2 className='number' data-goal="24" ref={compRef} >
                    0
                </h2>
                <p >Completed <br /> Projects</p>
            </li>
            <li >
                <h2 className='number' data-goal="20" ref={liveRef} >
                    0
                </h2>
                <p >Live <br />Projects</p>
                <img src={img} style={{display:'none'}} onLoad={increment}/>
            </li>
        </ul>
    </div>
  )
}

export default Stats