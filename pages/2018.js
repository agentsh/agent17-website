import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import BlindBirdHeader from '../components/BlindBirdHeader';
import AgentSmallInfo from '../components/AgentSmallInfo';
import Headline from '../components/Headline';
import Eventbrite2018 from '../components/Eventbrite2018'
import Speaker from '../components/Speaker';
import speakers from '../data/speakerData';
import Link from 'next/link';

export default () => (
    <div>
        <Navigation/>
        <Meta/>
        <BlindBirdHeader/>
        <Eventbrite2018/>
        <article className="block block--bg-color">
            <div className="block__content  lc  align-center  block--bg-color__content">

                <header className="  block__header  block--bg-color__header  ">
                    <Headline type="h2" size="big" style={{color: 'white'}} content="Questions? Please get in touch with us!"/>
                </header>

                <div className="  block__description  block--bg-color__description">
                    <p>
                        It's easy to contact us via <a href='mailto:questions@agent.sh'>questions@agent.sh</a><br/>Follow
                        us
                        on <a target="_blank" href="https://twitter.com/agent_dot_sh">Twitter</a> and <a href='http://www.facebook.com/agentsh' target='_blank'>Facebook</a>. <br/><br/>Your
                        Agent Team<br/><a href='mailto:tom@agent.sh'>Tom</a>, <a href='mailto:phuc@agent.sh'>Phuc</a>, <a href='mailto:guntram@agent.sh'>Guntram</a>, <a href='mailto:daniel@agent.sh'>Daniel</a>, <a href='mailto:conny@agent.sh'>Conny</a>, <a href='mailto:felicitas@agent.sh'>Felicitas</a>, <a href='mailto:moser@agent.sh'>Linda & Joe</a>
                    </p>
                </div>

            </div>
        </article>
        <article className="block block--bgimage-big">
            <div className="  block__image  block--bgimage-big__image">
                <img className="" src="static/img/hashtag-image.jpg" alt="hashtag image"/>

            </div>

            <div className="block__content    block--bgimage-big__content">
                <header className="  block__header  block--bgimage-big__header  ">
                    <Headline type="h2" size="big" content="#Agent17" style={{color: 'white'}}/>
                </header>
            </div>
        </article>
        <Sponsors/>
        <Footer/>
    </div>
);
