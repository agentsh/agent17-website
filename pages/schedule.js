import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Eventbrite from '../components/Eventbrite';
import Newsletter from '../components/Newsletter';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Headline from '../components/Headline';


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

                <Headline type='h2' size='medium' content='Two action packed days of inspirational talks, networking, experiences and fun' style={{textAlign:'left', paddingLeft:0}}/>


            </div>
            </div>
            </div>
            </ScheduleTitle>

            <Schedule>
                <div className='container'>
                    <div className='grid'>
                        <div className='grid__item  one-sixth  palm--one-whole'>
                        </div>

                        <div className='grid__item  five-sixth  palm--one-whole'>
                            <div className='grid'>
                                <div className='grid__item  one-fifth  palm--one-whole'>
                                    <div><br /><br />
                                    </div>

                                    {times.map(
                                        (t) => {
                                            <div>{t} test</div>
                                    })}

                                </div>

                                <div className='grid__item  one-fifth  palm--one-whole'>
                                    <div className=''>
                                        Day 1, Dornbirn<br />
                                        Friday, 20.01.2017
                                    </div>
                                </div>

                                <div className='grid__item  one-fifth  palm--one-whole'>
                                    <div className=''>
                                        Day 2, Dornbirn<br />
                                        Saturday, 21.01.2017
                                    </div>
                                </div>

                                <div className='grid__item  one-fifth  palm--one-whole'>
                                    <div className=''>
                                        Day 3, Dornbirn<br />
                                        Sunday, 22.01.2017
                                    </div>
                                </div>

                                <div className='grid__item  one-fifth  palm--one-whole'>
                                    <div className=''>
                                        Day 4, Dornbirn<br />
                                        Monday, 23.01.2017
                                    </div>
                                </div>
                            </div>
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
