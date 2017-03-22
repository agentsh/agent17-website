import React from 'react'
import Link from 'next/link';

const routes = [
    { link: '/index', title: 'Home' },
    { link: '/2017', title: '2017' },
    { link: '/schedule', title: 'Schedule' },
    { link: '/venue', title: 'Venue' },
    { link: '/about', title: 'About' },
    { link: 'http://blog.agent.sh', title: 'Blog', target: '_blank' },
    { link: '/tickets', title: 'Tickets', border: true }
]


export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: '',
            display: null
        };

    }

    toggle = () => {
        if (this.state.open == '') {
            this.setState({ open: 'open' });
        } else {
            this.setState({ open: '' });
        }
    }

    render() {
        let items = routes.map((route, idx) => {
            if (!route.target) {
                let cls = 'menu-item';
                if (route.border) {
                    cls = 'menu-item-border';
                }

                return (
                    <li className={cls} key={idx}>
                        <Link href={route.link} className=''>{route.title}</Link>
                    </li>
                )
            } else {
                return (
                    <li className='menu-item' key={idx}>
                        <a href={route.link} className='' target={route.target}>{route.title}</a>
                    </li>
                )
            }
        });

        return (
            <header className='header header--fixed'>
                <div className='container-fluid'>
                    <nav className='header__content  header--fixed__content'>
                        <div className='header__brand  header--fixed__brand'>
                            <div className='header__logo  header--fixed__logo'>
                                <Link className='header__logo-link  header--fixed__logo-link' href='/index'><a>
                                    <img src='/static/img/logo-agent.png' className='logo' alt='Agent SH' />

                                    <span className='header__slogan  header--fixed__slogan' style={{ color: '#fff' }}>
                                        Agent conference<br /><span style={{ color: '#efefef' }}>25th & 26th of January 2018</span>
                                    </span></a>
                                </Link>
                            </div>

                            <button type='button' className='header__hamburger  header--fixed__hamburger'
                                onClick={this.toggle}>
                                <span className='sr-only'>Toggle navigation</span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                        </div>

                        <div className='header__nav  header--fixed__nav'>
                            <ul className={'menu  menu--mobile  menu--dropdown menu--mobile ' + this.state.open}>
                                {items}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
