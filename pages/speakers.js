import React from 'react';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Speaker from '../components/Speaker';

const speakers = [
    {
        name: 'Brent Vatne',
        company: 'ExponentJS',
        title: 'To be announced',
        github: '//github.com/brentvatne',
        image: 'static/img/brent_vatne_thumb.jpg'
    },
    {
        name: 'Christoph Pojer',
        company: 'Facebook',
        title: 'To be announced',
        github: '//github.com/cpojer',
        image: 'static/img/christoph_pojer_thumb.jpg'
    },
    {
        name: 'Saskia Vola',
        company: 'Computational linguist',
        title: 'Building a recommendation / personalization engine with Node, Redis and ElasticSearch',
        image: 'static/img/saskia_vola_thumb.jpg'
    },
    {
        name: 'Nik Graf',
        company: 'Serverless, Belle',
        title: 'GraphQL in production within Minutes with Serverless',
        github: '//github.com/nikgraf',
        image: 'static/img/nik_graf_thumb.jpg'
    },
    {
        name: 'Sebastian Siemssen',
        company: 'AmazeeLabs',
        title: 'WebVR',
        github: '//github.com/fubhy',
        image: 'static/img/sebastian_siemssen_thumb.jpg'
    },
    {
        name: 'Max Stoiber',
        company: 'KeystoneJS',
        title: 'Building third-party component libaries',
        github: '//github.com/mxstbr',
        image: 'static/img/max_stoiber_thumb.jpg'
    },
    {
        name: 'Tereza Sokol',
        company: 'Elm Plot',
        title: 'Why you should care about Elm',
        github: '//github.com/terezka',
        image: 'static/img/tereza_sokol_thumb.jpg'
    },
    {
        name: 'Patrick Stapfer',
        company: 'FlowType Evangelist',
        title: 'Flowtype and The Wonders of Statically Typed JavaScript',
        github: '//github.com/ryyppy',
        image: 'static/img/patrick_stapfer_thumb.jpg'
    },
];

export default () => (
    <div>
        <Meta/>
        <Navigation/>
        <section id="speakers" className="section  section--flex-stretch" style={{marginTop: 115}}>
            <div className="  section__blocks  section--flex-stretch__blocks">
                {speakers.map(speaker => (<Speaker key={speaker.name} speaker={speaker}/>))}
            </div>
            <img src="static/img/hero_10.jpg" alt="img.landscape_16x9.alt"/>
        </section>
        <Newsletter/>
        <Sponsors/>
        <Footer/>
    </div>
);
