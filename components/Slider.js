import React from 'react'
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import Headline from './Headline';

const slides = [
    {
        img: '/static/img/hero_00.jpg',
        title: 'MEET WORLD CLASS ENGINEERS',
        text: <span>Agent Conf is about JavaScript and Software Engineering  <br/>20th & 21st January in Dornbirn, Austria</span>,
        button: 'secure tickets',
        link: '#tickets'
    },
    {
        img: '/static/img/hero_1.jpg',
        title: 'FROM FACEBOOK TO EXPONENT',
        text: 'from vancouver to berlin',
        button: 'meet the speakers',
        link: '#speakers',
        overlay: true
    },
    {
        img: '/static/img/hero_4.jpg',
        title: 'WHERE IS DORNBIRN',
        text: '',
        button: 'get to know the location',
        link: '#tickets',
        overlay: true
    },
];

export default () => {


    let items = slides.map((slide, idx) => {

        return (
            <div key={idx}>
                <div style={{
                    background: 'url(' + slide.img + ')',
                    backgroundSize: 'cover',
                    height: '100vh',
                    position: 'relative'
                }}>
                    <Headline type='h2' size='big' content={slide.title} style={{paddingTop: 180}}/>
                    <Headline type='h3' size='small' content={slide.text} style={{
                        paddingBottom: 20,
                    }}/>

                    <div className="block__more  block--hero__more" style={{textAlign: 'center'}}>
                        <a href={slide.link} className=" block__morelink  block--hero__morelink">
                            {slide.button}
                        </a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Carousel autoplayInterval={6000}
                  speed={2000}
                  dragging={true}
                  autoplay={true}
                  easing='easeInOut'
                  edgeEasing='easeOutCirc'
                  wrapAround={true}
        >
            {items}
        </Carousel>
    );

}