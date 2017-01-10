import React from 'react';
import Sponsor from './Sponsor';

const strategicPartners = [
    {
        link: '//facebook.github.io/react/community/conferences.html',
        title: 'Facebook',
        image: 'static/img/001_Facebook-Logo.png'
    }
];

const partners = [
    [
        { 
            link: '//www.raibaimrheintal.at',
            title: 'Raiba im Rheintal',
            image: 'static/img/002_RaibaImRheintal.png'
        },
        {
            link: '//www.vorarlberg.at',
            title: 'Vorarlberg',
            image: 'static/img/003_Vorarlberg_Logo.png'
        },
        {
            link: '//www.chancenland.at',
            title: 'Chancenland Vorarlberg',
            image: 'static/img/004_ChancenLand.png'
        },
        {
            link: '//getexponent.com',
            title: 'Exponent',
            image: 'static/img/005_Exponent.png'
        },
        {
            link: '//2017.websummercamp.com/',
            title: 'Web Summit',
            image: 'static/img/websummercamp.png',
            width: '100%'
        },
        {
            link: '//www.dornbirn.at/',
            title: 'Dornbirn',
            image: 'static/img/DornbIrn4c.jpg'
        }
    ],
    [
        {
            link: '//www.arkulpa.at',
            title: 'Arkulpa',
            image: 'static/img/006_arkulpa.png'
        },
        {
            link: '//www.massiveart.com',
            title: 'MASSIVE ART',
            image: 'static/img/007_MassiveArt.png'
        },
        {
            link: '//www.starsmedia.com',
            title: 'StarsMedia',
            image: 'static/img/008_StarsMedia.png'
        },
        {
            link: '//www.thedoingcollective.com',
            title: 'The Doing Collective',
            image: 'static/img/DC_Logo_Portrait.jpg'
        },
        {
            link: '//www.phuc.at',
            title: 'Le Webdevelopment',
            image: 'static/img/le.svg',
            width: '45%'
        }
    ]
];

const mediaPartners = [
    {
        link: '//startalps.co',
        title: 'startalps.co',
        image: 'static/img/010_StartAlps.png'
    },
    {
        link: '//js-kongress.de/',
        title: 'JS Kongress Munich',
        image: 'static/img/011_JSKongress.png'
    },
    {
        link: '//reactiveconf.com',
        title: 'ReactiveConf',
        image: 'static/img/012_ReactiveConf.png'
    },
    {
        link: '//www.internetszene.at',
        title: 'internetszene',
        image: 'static/img/013_internetszene.png'
    },
    {
        link: '//www.jwv.at',
        title: 'Junge Wirtschaft Vorarlberg',
        image: 'static/img/014_jungewirtschaft.png'
    }

];

export default () => (
    <article id="partner" className="block block--sponsors">
        <div className="container">
            <div className="row">
                <h3 className="text-center block__title">Strategic Partners</h3>
                { strategicPartners.map((partner) => (<Sponsor className="col-sm-4 col-sm-offset-4 pt60" sponsor={partner} primary={true} key={partner.title} />)) }
            </div>
            <h3 className="text-center partners-headline">Partners</h3>
            {
                partners.map((partnerRow, index) =>
                    (
                         <div className="row row-flex" key={index}>
                             { partnerRow.map(partner => (<Sponsor className="col-sm-3 mt60" sponsor={partner} key={partner.title}/>) ) }
                         </div>
                    )
                )
            }
            <h3 className="text-center partners-headline">Media Partners & Experts</h3>
            <div className="row row-flex">
                <div className="col-sm-2"/>
                { mediaPartners.map(partner => (<Sponsor className="col-sm-2 mt60" sponsor={partner} key={partner.title}/>)) }
                <div className="col-sm-2"/>
            </div>
        </div>
    </article>
);
