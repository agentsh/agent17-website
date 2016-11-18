import React from 'react';
import Navigation from '../components/Navigation';
import Meta from '../components/Meta';

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
        </div>
    }
}