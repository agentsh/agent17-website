import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';



export default () => (
    <footer className="footer">
        <div className="footer__top">
            <div className="lc">
                <div className="grid grid--center">
                    <div className="grid__item one-third palm--one-whole">
                        <img src="static/img/logo-agent.png" className="logo" alt="Agent SH"/>

                        <span className="footer__slogan footer--__slogan color-2">
                            Agent conference<br/><span>25th & 26th of January 2018</span>
                        </span>
                    </div>

                    <div className="grid__item two-thirds palm--one-whole">
                        <div style={{
                            textAlign: 'right',
                            paddingTop: 20
                        }}>
                            <Link href={'/disclaimer'}>Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer__content lc">
            <div className="grid">
                <div className="grid__item two-thirds iphoneh--one-whole palm--one-whole">
                    <div className="h8">
                        Computer programs are the most complex things that humans make. — Douglas Crockford
                    </div>
                </div>

                <div className="grid__item  one-third  iphoneh--one-whole  palm--one-whole">
                    <div className="footer__content-right h8">
                        <p className="copyright">&copy; 2016, 2017 - Agent™ and Agent Conference™
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/static/js/tracking.footer.js"></script>
    </footer>
);