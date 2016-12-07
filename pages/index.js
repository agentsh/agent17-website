import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Headline from '../components/Headline';
import Speaker from '../components/Speaker';
import speakers from '../data/speakerData';

export default () => (
    <div>
        <Navigation/>
        <Meta/>
        <Slider/>
        <section id="speakers" className="section  section--flex-stretch" style={{
            paddingTop: 240,
            background: 'url(static/img/hero_10.jpg) no-repeat bottom',
            backgroundSize: '100%',
            paddingBottom: 500
        }}>
            <div className="  section__blocks  section--flex-stretch__blocks">
                {speakers.map(speaker => (<Speaker key={speaker.name} speaker={speaker}/>))}
            </div>
        </section>
        <article className="block block--bg-image">
            <div className="  block__image  block--bg-image__image">
                <img className="" src="static/img/ice-cube.jpg" alt="img.landscape_16x9.alt"/>
            </div>

            <div className="block__content  lc  block--bg-image__content" style={{paddingTop: '50px'}}>
                <header className="align-center  block__header  block--bg-image__header  ">
                    <Headline type="h3" size="medium" content="Focus Technologies of Agent Conference" style={{color: 'white'}}/>
                </header>

                <section className="row" style={{paddingBottom: '100px'}}>
                    <div className="col-sm-3 col-xs-6">
                        <article className="tech-block">
                            <img className="" src="static/img/ReactJS.jpg" alt="ReactJS"/>
                            <div className='tech-block-text'>
                                <div className="tech-block-text-title">ReactJS</div>
                                <div className="tech-block-text-description font-family-2">Facebooks SPA Framework</div>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <article className="tech-block">
                            <img className="" src="static/img/ReactNative.jpg" alt="React Native"/>
                            <div className='tech-block-text'>
                                <div className="tech-block-text-title">ReactNative</div>
                                <div className="tech-block-text-description font-family-2">Build Apps with ReactJS</div>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <article className="tech-block">
                            <img className="" src="static/img/nodejs.jpg" alt="node.js"/>
                            <div className='tech-block-text'>
                                <div className="tech-block-text-title">node.js</div>
                                <div className="tech-block-text-description font-family-2">Build Server Apps with JS
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <article className="tech-block">
                            <img className="" src="static/img/ElasticSearch.jpg" alt="elasticsearch"/>
                            <div className='tech-block-text'>
                                <div className="tech-block-text-title">Current Tech</div>
                                <div className="tech-block-text-description font-family-2">latest Insight on Webtech
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <header className="align-center  block__header  block--bg-image__header  ">
                    <Headline type="h3" size="medium" style={{
                        color: 'white',
                        display: 'inline-block',
                        paddingRight: '0px'
                    }} content="code"/>
                    <Headline type="h3" size="medium" style={{
                        color: '#888888',
                        display: 'inline-block',
                        paddingLeft: '0px'
                    }} content="kəʊd/"/>
                </header>

                <div className="color-2  block__description  block--bg-image__description">
                    <span className='color-8'>noun</span>
                    <ol>
                        <li>a system of words, letters, figures, or symbols used to represent others, especially for the
                            purposes of secrecy.
                            <br/><span className='color-gray'>'the Americans cracked their diplomatic code'<br/>synonyms: cipher, secret language, secret writing, set of symbols, key, hieroglyphics;</span>
                        </li>
                        <li>COMPUTING<br/>program instructions.<br/><span className='color-gray'>'assembly code'</span>
                        </li>
                    </ol>
                    <span className='color-8'>verb</span><br/>
                    <ol>
                        <li>convert (the words of a message) into a code so as to convey a secret
                            meaning.<br/><span className='color-gray'>'only Mitch knew how to read the message—even the name was coded'</span>
                        </li>
                        <li>write code for (a computer program).<br/><span className='color-gray'>'most developers code. To iterate is human, to recurse divine'</span><br/><br/>Agent
                            is linking and magnifying outstanding <br/>Talents and Companies from around the world.
                            <br/>Got a
                            unique code? <a href='mailto:team@agent.sh?subject=Apply as speaker'>Apply as a Speaker</a>
                        </li>
                    </ol>
                </div>
            </div>
        </article>

        <article className="block block--bgimage-fixed" style={{backgroundImage: 'url(static/img/agent_ski.jpg)'}}>
            <div className="block__content    block--bgimage-fixed__content">

                <header className="  block__header  block--bgimage-fixed__header  ">
                    <Headline type="h2" size="big" content="Wax your Code! Go Skiing with Engineers"/>
                </header>

                <div className="  block__description  block--bgimage-fixed__description">
                    <p>
                        This event is about Community. Book now and go skiing in Lech, a global Top 10 Skiresort
                    </p>
                </div>

            </div>
        </article>
        <article className="block block--bg-color">
            <div className="block__content  lc  block--bg-color-2__container  block--bg-color__content">
                <header className="  block__header  block--bg-color__header  ">
                    <Headline type="h2" size="big" style={{color: 'white'}} content="What's special about Agent Conf?"/>
                </header>

                <div className="  block__description  block--bg-color__description">
                    <ul>
                        <li>A strong line up of speakers with great talks</li>
                        <li>Diversity in the talks and in the community who attend</li>
                        <li>Grants for students</li>
                        <li>A code of conduct</li>
                        <li>Accessibility for disabled: wheelchair access & on request</li>
                        <li>Alcohol-free drink options</li>
                        {/*<li>Quiet rooms and safe space</li>*/}
                        <li>Specials and outdoor action</li>
                    </ul>
                </div>

            </div>
        </article>
        <section id="tickets" className="section  section--bg-brand">

            <div className="lc  section__content align-center  section--bg-brand__content">

                <header className="  section__header  section--bg-brand__header  ">
                    <h2 className="  section__title  section--bg-brand__title">
                        take your chance now
                    </h2>
                </header>

                <div className="  section__description  section--bg-brand__description">
                    <p>
                        This is where you register to learn & experience this unique event
                    </p>
                </div>
            </div>

            <div className="lc    section__blocks  section--bg-brand__blocks">

                <article className="block block--feature">
                    <a href="tickets.html" className="outerlink ">

                        <div className="block__content    block--feature__content">
                            <div className="block__icon  block--feature__icon">
                                <span className="icomoon icon-superearlybird"></span>
                            </div>

                            <header className="  block__header  block--feature__header  ">
                                <h2 className="upper h4  block__title  block--feature__title">
                                    Early bird
                                </h2>
                                <h3 className="h5  block__subtitle  block--feature__subtitle">
                                    298.00 €
                                </h3>
                            </header>

                            <div className="  block__description  block--feature__description">
                                <ul>
                                    <li>Conference 20.01 & 21.01</li>
                                    <li>All Talks</li>
                                    <li>Drinks & Snacks</li>
                                    <li>Networking Party</li>
                                </ul>
                            </div>

                            <div className="align-center  block__more  block--feature__more">
                        <span className="btn-ghost block__morelink  block--feature__morelink">
                            buy ticket
                        </span>
                            </div>
                        </div>
                    </a>
                </article>

                <article className="block block--feature">
                    <a href="tickets.html" className="outerlink ">


                        <div className="block__content    block--feature__content">
                            <div className="  block__icon  block--feature__icon">
                                <span className="icomoon icon-ski"></span>
                            </div>


                            <header className="  block__header  block--feature__header  ">
                                <h2 className="upper h4  block__title  block--feature__title">
                                    Conference & ski
                                </h2>
                                <h3 className="h5  block__subtitle  block--feature__subtitle">
                                    1450.00 €
                                </h3>
                            </header>

                            <div className="  block__description  block--feature__description">
                                <ul>
                                    <li>Conference 20.01 & 21.01</li>
                                    <li>Ski & Hotel Lech 22.01, 23.01</li>
                                    <li>All Talks</li>
                                    <li>Drinks & Snacks</li>
                                    <li>Networking Party</li>
                                    <li>Ski ticket 2 days</li>
                                    <li>2 Nights Ski-Hotel</li>

                                </ul>
                            </div>

                            <div className="align-center  block__more  block--feature__more">
                        <span className="btn-ghost block__morelink  block--feature__morelink">
                            buy ticket
                        </span>

                            </div>

                        </div>
                    </a>
                </article>


                <article className="block block--feature">
                    <a href="tickets.html" className="outerlink">
                        <div className="block__content    block--feature__content">
                            <div className="  block__icon  block--feature__icon">
                                <span className="icomoon icon-sponsor"></span>
                            </div>

                            <header className="  block__header  block--feature__header  ">
                                <h2 className="upper h4  block__title  block--feature__title">
                                    Sponsor
                                </h2>
                                <h3 className="h5  block__subtitle  block--feature__subtitle">
                                    2950.00 €
                                </h3>
                            </header>

                            <div className="  block__description  block--feature__description">
                                <ul>
                                    <li>Logo presentation</li>
                                    <li>3 Conference Tickets</li>
                                </ul>
                            </div>

                            <div className="align-center  block__more  block--feature__more">
                        <span className="btn-ghost block__morelink  block--feature__morelink">
                            buy ticket
                        </span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </section>
        <article className="block block--bg-color">
            <div className="block__content  lc  align-center  block--bg-color__content">

                <header className="  block__header  block--bg-color__header  ">
                    <Headline type="h2" size="big" style={{color: 'white'}} content="Questions? Please get in touch with us!"/>
                </header>

                <div className="  block__description  block--bg-color__description">
                    <p>
                        It's easy to contact us via <a href='mailto:questions@agent.sh'>questions@agent.sh</a><br/>Follow
                        us
                        on <a target="_blank" href="https://twitter.com/agent_dot_sh">Twitter</a>,
                        <a href='http://www.facebook.com/agentsh' target='_blank'>Facebook</a> and Instagram. <br/><br/>Your
                        Agent Team<br/><a href='mailto:tom@agent.sh'>Tom</a>, <a href='mailto:phuc@agent.sh'>Phuc</a>,
                        <a href='mailto:guntram@agent.sh'>Guntram</a>, <a href='mailto:daniel@agent.sh'>Daniel</a>,
                        <a href='mailto:conny@agent.sh'>Conny</a>, <a href='mailto:felicitas@agent.sh'>Felicitas</a>,
                        <a href='mailto:moser@agent.sh'>Linda & Joe</a>
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
