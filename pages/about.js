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


const About = styled.div`
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
            <About>

            <div className='container'>
            <div className='row'>
            <div className='col-sm-8 col-sm-offset-2'>

                <Headline type='h1' size='medium' content='WHO IS BEHIND THE CONFERENCE?'/>

                <Headline type='h2' size='medium' content='Organizers' style={{textAlign:'left', paddingLeft:0}}/>

                <p>Tom, Phuc, Guntram, Daniel, Felicitas, Bronwen, Linda, Joe</p>

                <p>
                    The Team behind Agent is partnered with „Plattform für digitale Initativen" Our goal is to get the best speakers from around the World to help Dornbirn become an innovation HUB in Europe.
                </p>
                <p>
                    We started to organize international conferences three years ago, and we have had held several events already including UH15, GameJam and UH16.
                </p>

                <Headline type='h3' size='medium' content='Why does expertise in product development really matter?' style={{textAlign:'left', paddingLeft:0}}/>
                <p>
                    Even though there is a huge amount of material on this topic, the problem of maintainable, sustainable and successful software development is not yet solved. So it is important to have events dedicated to this topic, where people can learn and collaborate on how to deal with the problem of building the right thing in the right way, and how to push for finding better solutions. Even more so we wanted to motivate and empower people to step up their efforts software. This is why we started to organise the Umma Hüsla Hackathon in 2015. Several initiatives started from there, one being „Agent” to be held on 21st and 22nd of January 2017: with sessions and workshops.
                </p>

                <Headline type='h3' size='medium' content='Why is the relevant for companies?' style={{textAlign:'left', paddingLeft:0}}/>
                <p>
                    The importance of software delivery craftsmanship is constantly increasing. Software development made right can unlock huge hidden potential in organizations and help companies to understand how important it is to invest in the way they develop: not just into engineering but into the whole value generation process. Great engineering is not enough. Whole company level agility is necessary. Only those companies that are capable of rapid change and flexibility will survive and thrive in the future. Those organisations that want growth, and are open to experimentation to achieve these goals, will need to focus on and invest in software delivery craftsmanship.
                </p>

                <Headline type='h3' size='medium' content='What are the three main topics?' style={{textAlign:'left', paddingLeft:0}}/>
                <p>
                    We’re starting out with a strong speaker set focused on current technologies originating from a Javascript Context. In this context best practices (tdd, bdd, ddd, ci, cd, security, performance, service oriented architecture etc.) that can be successfully leveraged by individual engineers. They can learn how to become better in their profession. How they can be more useful from a business point of view (even the most beautiful code worth nothing without representing real business value).
                </p>
                <p>
                    <b>Team and organisational</b>
                    level topics, best practices (agile, devops etc.) that can help companies work more effectively. This includes a diverse set of topics, like how to scale development, how to create great company culture, how to create growing/innovation mind-set, how to create an experimental culture, agile/lean practices etc. It is not easy to evolve from a great engineer to a great leader; Craft will provide great tips on this topic as well.
                </p>
                <p><b>New trends, emerging technologies</b>, some interesting academic topics (containerisation, functional programming, languages, distributed systems, newsql etc.) that are increasingly important to be familiar with.</p>
            </div>
            </div>
            </div>
            </About>
            <Newsletter/>
            <Sponsors/>
            <Footer/>
        </div>
    }
}
