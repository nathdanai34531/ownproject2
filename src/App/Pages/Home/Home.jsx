    import React from 'react';
    import '../Pages.scss';
    import Tabbed from './Tabbed/Tabbed.jsx';
    import Slideshow from './Slideshow/Slideshow';
    import Services from '../Services/Services.jsx';
    import Contact from '../Contact/Contact.jsx';


    const Home = () => {
        return (
            <div className={'Pages Home'}>
                <div className='slidesinhome'>

                    <Slideshow />
                </div>

                <br></br> <br></br><br></br><br></br><br></br>

                <div className="featured"> Testpa2 </div>


                <div className="featureddescript">
                    Welcome to our design agency. </div>
                <br></br>    <br></br>
                <br></br> <br></br><br></br><br></br><br></br>
                <div className='toursinhome'>
                    <Services />
                </div>





                <br></br><br></br>

                <div className="aboutandmission">
                    About and Mission</div>

                <div className="aboutandmissiondescript">
                    We are small, independent, and specialize in one full day tour of LA. We are here for those travelers who like to do things on their own. Unfortunately, LA is not built for easy viewing during short-term stays. We put all of our energy and effort in making this one tour meet the demands of all aboard.  </div>




                <br></br><br></br>


                <Tabbed />



                <br></br><br></br>     <br></br><br></br>



                <br></br><br></br>

                <Contact />





            </div>
        );
    }

    export default Home;