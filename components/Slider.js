import React from 'react'
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import Headline from './Headline';
import styled from 'styled-components';
const slides = [
    {
        img: '/static/img/hero_00.jpg',
        title: 'MEET WORLD CLASS ENGINEERS',
        text: <span>Agent Conf is about JavaScript and Software Engineering  <br/>20th & 21st January in Dornbirn, Austria</span>,
        button: 'secure tickets',
        link: '/tickets'
    },
    {
        img: '/static/img/hero_1.jpg',
        title: 'FROM FACEBOOK TO EXPONENT',
        text: 'from vancouver to berlin',
        button: 'meet the speakers',
        link: '/speakers',
        overlay: true
    },
    {
        img: '/static/img/hero_4.jpg',
        title: 'WHERE IS DORNBIRN',
        text: '',
        button: 'get to know the location',
        link: '/venue',
        overlay: true
    },
];

const SliderElement = styled.div`
    background: url(${(props) => props.img });
    backgroundSize: cover;
    height: 100vh;
    position: relative;
    display: flex;
`;
const SliderContentBlock = styled.div`
    display:flex;
    align-self:center;
    flex:1;
    flex-direction: column;
`;


const H2 = styled.h2`
    font-size: 40px;
    font-weight: 300;
    text-align:center;
    padding-Top: 120px;
    margin-bottom:0;
    padding-left:20px;
    padding-right: 20px;
    @media (max-width: 480px) {
        font-size:30px;
    }
`;

const H3 = styled.h3`
    font-size: 25px;
    font-weight: 300;
    text-align:center;
    padding: 20px;
    padding-bottom: 0px;
`;


const Button = styled.button`
    outline: none;
    &:focus{
        outline: none;
    }
`;

const decorators = [
    {
        component: React.createClass({
            render() {
                return (
                    <Button
                        onClick={this.props.previousSlide}>
                        <i className="fa fa-3x fa-angle-left" aria-hidden="true"/>
                    </Button>
                )
            }
        }),
        position: 'CenterLeft',
        style: {color: 'white', outline: 'none'},

    },
    {
        component: React.createClass({
            render() {
                return (
                    <Button
                        onClick={this.props.nextSlide}>
                        <i className="fa fa-3x fa-angle-right" aria-hidden="true"/>
                    </Button>
                )
            }
        }),
        position: 'CenterRight',
        style: {color: 'white', outline: 'none'},
    }];


export default () => {

    let items = slides.map((slide, idx) => {

        return (
            <SliderElement key={idx} img={slide.img}>
                <SliderContentBlock>

                    <H2>{slide.title}</H2>
                    <H3>{slide.text}</H3>

                    <div className="block__more  block--hero__more" style={{textAlign: 'center'}}>
                        <Link href={slide.link}>
                            <a className=" block__morelink  block--hero__morelink">
                                {slide.button}
                            </a>
                        </Link>
                    </div>
                </SliderContentBlock>
            </SliderElement>
        );
    });

    return (
        <Carousel autoplayInterval={4000}
                  speed={500}
                  dragging={true}
                  autoplay={true}
                  easing='easeInOut'
                  edgeEasing='easeOutCirc'
                  wrapAround={true}
                  decorators={decorators}

        >
            {items}
        </Carousel>
    );

}
