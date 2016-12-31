import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const Content = styled.div`
    background: #212121;
    color: white;
    position:relative;
    padding-top:60px;
    padding-bottom:80px;
    text-align:center;

    p{
        padding-left:80px;
        padding-right:80px;
        font-size: 20px;
    }
    @media (max-width: 480px) {
    padding-top:40px;
    padding-bottom:40px;
    }
`;

const Headline = styled.div`
    font-size: 40px;
    line-height: 45px;
    color: white;
    padding-bottom: 40px;
    font-weight:300;
    &.grey {
        color: #d3d3d3;
    }
     @media (max-width: 480px) {
         font-size: 25px;
         line-height: 30px;
    }
`;


export default () => {
    return (
        <Content>
            <div className='container'>
                <Headline>Fuelled by the passion for engineering & secrets.</Headline>
                <p>
                    Agent the first alpine conference dedicated to software engineering.<br />
                    Experts, industry leaders and many more will come together to showcase their work in <a href='https://facebook.github.io/react' target='_blank'>ReactJS</a>, <a href='https://facebook.github.io/react-native/' target='_blank'>ReactNative</a> and more. <br />Learn, talk and ski and more. 
                </p>
                <p style={{ marginTop: 30 }}>Want to share your thoughts here?
                </p>
            </div>
        </Content >
    );

}
