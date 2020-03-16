import React from 'react';
import '../Pages.scss';
import Staff from './Staff/Staff.jsx';



const About = () => {
    return (
        <div className={'Pages About'}>




<div className='contacthead'>
    About Ace Deco
</div>





            <br></br>

            <div className="contacttext">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla quos nam magni fugiat odit aut exercitationem veritatis ratione enim autem commodi ipsum minima, sed soluta inventore quasi, ab corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit exercitationem voluptatibus, sunt, at aspernatur quasi officiis voluptates non porro assumenda quaerat vero. Eligendi sit vitae est corporis laborum voluptatem necessitatibus?  </div>

   
           <img src= '/img/other/9.jpg' class="img9" alt="work"></img>

           <img src= '/img/other/8.jpg' class="img8" alt="work"></img>
           <img src= '/img/other/5.jpg' class="img5" alt="work"></img>

           

            <div className="contactform">
                {/* <div className="cont cont1">About</div> */}
            </div>

            <br /> 







            <Staff />







        </div>

    );
}

export default About;