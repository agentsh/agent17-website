import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';
import Eventbrite from '../components/Eventbrite';
import Newsletter from '../components/Newsletter';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default class extends React.Component {
    static async getInitialProps({req}) {
        return req
            ? {userAgent: req.headers['user-agent']}
            : {userAgent: navigator.userAgent}
    }

    render() {
        return <div>
            <Meta/>
            <Navigation/>
            <Eventbrite2018/>
            <Newsletter/>
            <Sponsors/>
            <Footer/>
        </div>
    }
}