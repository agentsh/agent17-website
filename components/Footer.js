import React from 'react';

export default () => (
    <footer className="footer">
        <div className="footer__top">
            <div className="lc">
                <div className="grid grid--center">
                    <div className="grid__item one-third palm--one-whole">
                        <img src="static/img/logo-agent.png" className="logo" alt="Agent SH"/>

                        <span className="footer__slogan footer--__slogan color-2">
                            Agent conference<br/><span>20 & 21 January</span>
                        </span>
                    </div>

                    <div className="grid__item two-thirds palm--one-whole">

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
                        <p className="copyright">Copyright 2016, 2017 - Agent™ and Agent Conference™
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);