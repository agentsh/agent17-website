import React from 'react';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Headline from '../components/Headline';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Talk from '../components/Talk';
import speakers from '../data/speakerData';

export default () => (
    <div>
        <Meta/>
        <Navigation/>

        <div id="talks" style={{
            paddingTop: 80,
            background: 'url(static/img/talk.jpeg) no-repeat right',
            backgroundSize: 'cover',
            paddingBottom: 200
        }}>
            <Headline type='h1' size='big' content="Speakers & Talks" style={{marginTop: 150}}/>
            <div className="container">
                {speakers.map(speaker => (<Talk key={speaker.name} speaker={speaker}/>))}
            </div>
        </div>
        <Newsletter/>
        <Sponsors/>
        <Footer/>
    </div>
);
