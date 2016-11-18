import React from 'react'
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import Headline from './Headline';

const slides = [
    {
        img: '/static/img/hero_00.jpg',
        title: 'Meet world class engineers',
        text: 'Agent Conf is about JavaScript and Software Engineering',
        text2: '20th & 21st January in Dornbirn, Austria',
        button: 'secure tickets'
    },
];

export default class extends React.Component {

    render() {

        let items = slides.map((slide, idx) => {
            return (
                <div key={idx}>
                    <div style={{background: 'url(' + slide.img + ')', backgroundSize: 'cover', height: '80vh'}}>

                        <Headline type='h2' size='big' content={slide.title} style={{paddingTop: 100}}/>
                        <Headline type='h3' size='small' content={slide.text} style={{

                            paddingTop: 50,
                            paddingBottom: 20

                        }}/>
                        <Headline type='h3' size='small' content={slide.text2} style={{

                            paddingTop: 10
                        }}/>

                        <div className="block__more  block--hero__more">
                            <Link href="#tickets" className=" block__morelink  block--hero__morelink">
                                <a>secure tickets</a>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <Carousel >
                {items}
            </Carousel>
        );
    }
}