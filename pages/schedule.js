import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Eventbrite from '../components/Eventbrite';
import Newsletter from '../components/Newsletter';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Speaker from '../components/SpeakerSchedule';
import speakers from '../data/scheduleData';
import speakers2 from '../data/scheduleData2';
import speakers3 from '../data/scheduleData3';
import speakers4 from '../data/scheduleData4';

const ScheduleTitle = styled.div`
    padding-top: 150px;
    padding-bottom: 100px;
    background: black;
    h1, h2, h3 {
        color: white !important;
    }
    p{
        font-size: 20px;
        padding-bottom: 40px;
        color: #b2b2b2;
    }
    .uppercase {
        font-style: uppercase;
    }
`;


const Schedule = styled.div`
    padding-top:70px;
    padding-bottom: 70px;

    .border {
        border: 1px solid #aaa;
    }

    .heading {
        padding: 10px 30px;

    }

    .bg-color {
        background-color: #8593ac;
    }
`;

const times = ['08:00', '08:15','08:30','08:45',
                '09:00','09:15','09:30','09:45',
                '10:00','10:15','10:30','10:45',
                '11:00','11:15','11:30','11:45',
                '12:00','12:15','12:30','12:45',
                '13:00','13:15','13:30','13:45',
                '14:00','14:15','14:30','14:45',
                '15:00','15:15','15:30','15:45',
                '16:00','16:15','16:30','16:45',
                '17:00','17:15','17:30','17:45',
                '18:00'];

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
            <ScheduleTitle>
            <div className='container'>
            <div className='row'>
            <div className='col-sm-6 uppercase'>
                <Headline type='h1' size='large' content='Conference schedule' style={{textAlign:'left', paddingLeft:0}}/>

                <Headline type='h2' size='medium' content='TWO ACTION PACKED DAYS OF INSPIRATIONAL TALKS, NETWORKING, EXPERIENCES AND FUN' style={{textAlign:'left', paddingLeft:0}}/>
            </div>
            </div>
            </div>
            </ScheduleTitle>

            <Schedule>
                <div className='container'>
                    <br />
                    <div className='grid'>
                        <div className='grid__item  one-half  palm--one-whole'>
                            <div className='border'>
                                <div className='heading'>
                                    Day 1, Dornbirn<br />
                                    Friday, 20.01.2017
                                </div>
                                {speakers.map(speaker => (<Speaker key={speaker.name} speaker={speaker}/>))}
                            </div>
                            <br />
                        </div>
                        <div className='grid__item  one-half  palm--one-whole'>
                            <div className='border'>
                                <div className='heading'>
                                    Day 2, Dornbirn<br />
                                    Saturday, 21.01.2017
                                </div>
                                {speakers2.map(speaker => (<Speaker key={speaker.name} speaker={speaker}/>))}
                            </div>
                            <br />
                        </div>
                        <div className='grid__item  one-half  palm--one-whole'>
                            <div>
                                <br /><br /><br />
                            </div>
                            <div className='border'>
                                <div className='heading'>
                                    Day 3, Dornbirn<br />
                                    Sunday, 22.01.2017
                                </div>
                                {speakers3.map(speaker => (<Speaker key={speaker.name} speaker={speaker}/>))}
                            </div>
                            <br />
                        </div>
                        <div className='grid__item  one-half  palm--one-whole'>
                            <div>
                                <br /><br /><br />
                            </div>
                            <div className='border'>
                                <div className='heading'>
                                    Day 4, Dornbirn<br />
                                    Monday, 23.01.2017
                                </div>
                                {speakers4.map(speaker => (<Speaker key={speaker.name} speaker={speaker}/>))}
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </Schedule>

            <Newsletter/>
            <Sponsors/>
            <Footer/>
        </div>
    }
}
