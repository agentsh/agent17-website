import React from 'react';

export default class extends React.Component {


    constructor(props) {
        super(props);

        this.state = {email: ''};
    }


    render() {
        return (
            <article id='newsletter' className='block block--mailchimp'>
                <div className='lc  block__content  block--mailchimp__content'>
                    <header className='  block__header  block--mailchimp__header  '>
                        <h2 className='  block__title  block--mailchimp__title'>
                            Its your turn! Become a of part in the Agent Network
                        </h2>
                    </header>

                    <div className='  block__description  block--mailchimp__description'>
                        <p>
                            Enter your E-Mail Adress and we will keep you posted about News, and Important Updates on
                            the
                            Community.
                        </p>
                    </div>

                    <div id='mc_embed_signup'>
                        <form action='//agent.us14.list-manage.com/subscribe/post?u=f761e3205081ca3832180ad93&amp;id=b3e4e5cec0'
                              method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate'
                              target='_blank' noValidate>
                            <div id='mc_embed_signup_scroll'>

                                <div className='mc-field-group'>
                                    <input type='email'
                                           onChange={(event) => this.setState({email: event.target.source})}
                                           name='EMAIL' className='required email' id='mce-EMAIL'/>
                                    <input type='submit' value='Get notified' name='subscribe' id='mc-embedded-subscribe'
                                           style={{outline: 'none'}}
                                           disabled={this.state.email == ''}
                                           className='btn btn-mailchimp'/>
                                </div>

                                <div id='mce-responses' className='clear'>
                                    <div className='response' id='mce-error-response' style={{display: 'none'}}></div>
                                    <div className='response' id='mce-success-response' style={{display: 'none'}}></div>
                                </div>
                                <div style={{position: 'absolute', left: -5000, ariaHidden: 'true'}}>
                                    <input type='text' name='b_f761e3205081ca3832180ad93_b3e4e5cec0' tabIndex='-1'/>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </article>
        )
    }
}
