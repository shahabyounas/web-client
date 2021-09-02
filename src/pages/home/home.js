import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { EventIcon } from '../../components/Svgs';

const Home = (props) => {

    const { history } = props;

    const NumbersCard = (obj) => (
        <div>
            <div className="d-flex flex-column align-items-center px-4 mx-3 py-2">
                <div className="d-flex"> 
                    <div><EventIcon /></div>
                    <div className="mx-2"><h3>0</h3></div>
                </div>
                <div>
                    <p>Total Events</p>
                </div>
                <div>
                    <Link to="/">View Events Dashboard </Link>
                </div>

            </div>
        </div>
    )

    const handleCreateEvent = (e) => {
        e.preventDefault();
        history.push('/event/create');
    }

    const handleCreateProfile = (e) => {
        e.preventDefault();
        history.push('/profile/create');
    }

    return <div>
            <div className="d-flex flex-column align-items-center">


                <div className="mt-5" style={{ width: '60%' }}>
                    <div>
                        <h4> Hi Roberta  </h4>
                        <span className="font-weight-bold"> Overview  </span>
                    </div>

                    <div className="d-flex mt-4 p-4 numberCardBorder">
                    {[1, 2, 3].map((fig, idx) => <NumbersCard fig={fig} key={idx.toString()} />)}
                    </div>

                    <div className="my-4">
                        <h6> Most Popular Events </h6>
                        <p> You have not hosted any events yet.</p>
                    </div>

                    <div className="my-4">
                        <h6> Most Frequent Attendees  </h6>
                        <p> You have not hosted any events yet.</p>
                    </div>

                    <div>
                        <h5> Next Steps </h5>

                        <div className="d-flex flex-column py-3 px-3 my-3 createProfile">
                            <strong> Create your profile </strong>
                            <p>Your Profile page is not live. Let your audience know who you are and what you do with a dedicated page. Add your details now! </p>
                            <div className="align-self-center"><Button className="createProfile__btn" onClick={(e) => handleCreateProfile(e)}> Crate Profile </Button></div>
                        </div>

                        <div className="d-flex flex-column py-3 px-3 my-3 createProfile">
                            <strong> Create an event </strong>
                            <p>Create your first event and offer live streams, webinars, Q and As sessions, coaching and more to your audience.</p>
                            <div className="align-self-center"><Button className="createProfile__btn" onClick={(e) => handleCreateEvent(e)}> Create an event </Button></div>
                        </div>

                    </div>
                    
                </div>
            </div>
    </div>
}

export default Home;