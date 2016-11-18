import React from 'react';
import Navigation from '../components/Navigation';

export default class extends React.Component {
    static async getInitialProps({req}) {
        return req
            ? {userAgent: req.headers['user-agent']}
            : {userAgent: navigator.userAgent}
    }

    render() {
        return <div>
            <Navigation/>
        </div>
    }
}