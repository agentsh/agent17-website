import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Eventbrite from '../components/Eventbrite';
import Newsletter from '../components/Newsletter';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Headline from '../components/Headline';
import ImageHeader from '../components/ImageHeader';


const Disclaimer = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    h1, h2, h3 {
        color: #111 !important;
    }
    p{
        font-size: 20px;
        padding-bottom: 40px;
        color: #212121;
    }
`;


export default class extends React.Component {
    static async getInitialProps({req}) {
        return req
            ? {userAgent: req.headers['user-agent']}
            : {userAgent: navigator.userAgent}
    }

    render() {
        return <div>
            <Meta/>
            <Navigation/>
            <ImageHeader imageUrl={'./static/img/organizers.jpg'} />
            <Disclaimer>

            <div className='container'>
            <div className='row'>
            <div className='col-sm-8 col-sm-offset-2'>

                <Headline type='h1' size='medium' content='Disclaimer'/>

                <p>Common sense is vital, but just in case you want to know more, here are a few things from the team at AgentConf 2017. </p>

                <p>
                    In the unlikely occurrence that any of our public events have to be cancelled or postponed due to circumstances beyond the control of Agent, we cannot be held responsible for any costs incurred by the event attendees.
                </p>
                <p>
                    There may be an Agent photographer present at our events and by attending you give us permission to use any general crowd photos you (and you speaking if you are) appear in on our website or for marketing purposes. 
                </p>

                <p>
                    Agent does not accept responsibility and expressly excludes liability to the fullest extent permitted by law for:
                </p>
                <ul>
                    <li>
                        any loss or damage to any personal property left unattended during an event organised by Agent 
                    </li>
                    <li>
                        death or any personal injury suffered by you at an Agent event.  You maybe skiing with us, you do so at your own risk. 
                    </li>
                </ul>
                <p>
                    Children under 18 years old should be accompanied by an adult. 
                </p>

                <p>
                    If you would like any further information regarding any of the statements above, please email Team@agent.sh  
                </p>
            </div>
            </div>
            </div>
            </Disclaimer>
            <Newsletter/>
            <Sponsors/>
            <Footer/>
        </div>
    }
}
