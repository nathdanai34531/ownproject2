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

            <br></br> <br></br><br></br><br></br><br></br>

            <div className="featured"> Design Agency </div>



            <div className="featureddescript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum dolore quas laudantium corporis unde necessitatibus asperiores numquam, recusandae at, quos, delectus minima iusto quia vero? Assumenda sed qui voluptatum.
            </div>

           
            <img src= '/img/other/2.jpg' class="img2" alt="work"></img>

            <img src= '/img/other/7.jpg' class="img7" alt="work"></img>

            <br></br><br></br>

            <div className="aboutandmission">
                About and Mission</div>

            <div className="aboutandmissiondescript">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi cum. Rem voluptate corporis nihil libero a mollitia optio similique deleniti voluptatibus ipsa? Sequi iste id pariatur quibusdam incidunt sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsam magni ut eaque tempora ab iusto! Laudantium itaque ipsa sequi? Vero architecto rerum officiis quae ut fugit molestias velit impedit.</div>


            <br></br><br></br>


            <Tabbed />


            <img src= '/img/other/6.jpg' class="img6" alt="work"></img>






            <br></br><br></br>     <br></br><br></br>

            {/* 
                <nav className='routeicon'>
                    <FontAwesomeIcon icon={faRoute} />
                </nav>
    
                <nav className='timeicon'>
                    <FontAwesomeIcon icon={faHourglassHalf} />
                </nav>
    
                <nav className='moneyicon'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                </nav> */}


            <br></br><br></br>

            <Contact />

        
    







        </div>
    );
}

export default Home;