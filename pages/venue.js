import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

export default () => (
    <div>
        <Meta/>
        <Navigation/>
        <section id="venue" className="section  section--splitview" style={{paddingTop: 115}}>
            <div className="  section__blocks  section--splitview__blocks">
                <div className="grid grid--full">
                    <div className="grid__item  one-half  palm--one-whole">
                        <article className="block block--">
                            <div className="  block__image  block--__image">
                                <img className="" src="static/img/dornbirn-1.jpg" alt="Dornbirn 1"/>
                            </div>
                        </article>
                    </div>
                    <div className="grid__item  one-half  palm--one-whole">
                        <article className="block block--">
                            <div className="  block__image  block--__image">
                                <img className="" src="static/img/dornbirn-2.jpg" alt="Dornbirn 2"/>
                            </div>
                        </article>
                    </div>
                    <div className="grid__item  one-half  palm--one-whole">
                        <article className="block block--">
                            <div className="  block__image  block--__image">
                                <img className="" src="static/img/dornbirn-3.jpg" alt="Dornbirn 3"/>
                            </div>
                        </article>
                    </div>
                    <div className="grid__item  one-half  palm--one-whole">
                        <article className="block block--">
                            <div className="  block__image  block--__image">
                                <img className="" src="static/img/dornbirn-4.jpg" alt="Dornbirn 4"/>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="  section__image  section--splitview__image">
                <a href="https://goo.gl/maps/Mium1LYHeJ52" target="_blank">
                    <img className="" src="static/img/dornbirn-map.jpg" alt="Dornbirn Map"/>
                </a>
            </div>

            <div className="  section__content  section--splitview__content">
                <header className="  section__header  section--splitview__header  ">
                    <h2 className="  section__title  section--splitview__title">
                        The Venue
                    </h2>
                </header>

                <div className="  section__description  section--splitview__description">
                    <p>
                        <a href="https://vimeo.com/67544229" target="_blank">Dornbirn</a>, the largest City in Vorarlberg, is located at the Alpine ridge, reachable by car and train in from Zurich, Munich, from Milan. 
                    </p>
                    <p>The conference will be held in the beautiful Friedrich Wilhelm Raiffeisen Forum building. 
                    </p>
                    <a href="https://www.google.at/maps/dir//Raiffeisenbank+Im+Rheintal,+Rathauspl.+8,+6850+Dornbirn/@47.4159463,9.7288902,14z/data=!4m16!1m7!3m6!1s0x479b6b4c02443383:0x5db6b21f139a28d3!2sRaiffeisenbank+Im+Rheintal!3b1!8m2!3d47.4139881!4d9.7437171!4m7!1m0!1m5!1m1!1s0x479b6b4c02443383:0x5db6b21f139a28d3!2m2!1d9.7437171!2d47.4139881" target="_blank">find
                        route on google maps</a>
                </div>
            </div>
        </section>

        <Newsletter/>
        <Sponsors/>
        <Footer/>


    </div>
);
