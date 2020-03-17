import React from 'react';
import '../Pages.scss';
import Tabbed from './Tabbed/Tabbed.jsx';
import Slideshow from './Slideshow/Slideshow';
// import Services from '../Services/Services.jsx';
import Contact from '../Contact/Contact.jsx';

const Home = () => {
    return (
        <div className={'Pages Home'}>
            <div className='slidesinhome'>
                <Slideshow />
            </div>

            <br></br> <br></br><br></br><br></br>

            <div className="aboutandmission">
                Design Agency </div>

            <div className="aboutandmissiondescript">

We are a brand experience agency, driven to capture and amplify our clients' communication needs by producing dynamic content coupled with immersive technologies.</div>


            <br></br><br></br>





            <div id="contain">
                <p>We produce experiences that resonate for live-events and mediums ranging from passive to interactive, environmental to screen-based, and physical to digital.</p>
                <img src="/img/other/6.jpg" id="img" alt="work"/>

            </div>

            <div id="contain">
                <img src="/img/other/4.jpg" id="img" alt="teamwork"/>
                <p>To maximize creativity and ensure flawless execution, we bring together a unique collection of versatile disciplines under a single roof to collaborate on every phase of the production.</p>
            </div>

            <br></br><br></br>



            <div className="featured"> About and Mission</div>



            <div className="featureddescript">
            Our designers develop the creative that is explicitly handcrafted to address our clients’ objectives for their live events in a way that creates an emotional connection with their audience… resulting in a truly memorable event.
</div>
            <Tabbed />


            <br></br><br></br>



            <div className="featured"> Work</div>


            {/* <iframe width="640" height="564" src="https://www.youtube.com/embed/DbdTt9vVWOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


<div className='mywork'>
            <iframe src="https://player.vimeo.com/video/396203974" title="mynewwork" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen alt="readingtokids"></iframe>

            </div>























            <br></br><br></br>     

            <Contact />























        </div>
    );
}

export default Home;