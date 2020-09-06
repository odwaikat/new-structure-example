import React from 'react';

import SideDrawer from 'components/side-drawer/container'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showNavMenu: false
        }
    }

    toggleMenuClickHandler() {
        this.setState((prevState) => {
            return {showNavMenu: !prevState.showNavMenu};
        });
    }
    backdropClickHandler = () => {
        this.setState({showNavMenu: false});
    };

    render() {
        let headerClasses = 'toolbar';
        if (this.state.showNavMenu) {
            headerClasses = 'toolbar drawer-open';
        }
        return (
            <React.Fragment>
                <header className={headerClasses}>
                    <nav className="toolbar__navigation">
                        {this.state.showNavMenu &&
                            <div>
                                <SideDrawer show={this.state.showNavMenu} />
                                <div className="backdrop" onClick={this.backdropClickHandler} />
                            </div>
                        }
                        <button className="toggle-button" onClick={this.toggleMenuClickHandler.bind(this)}></button>
                        <div className="toolbar__logo"><a href="/"><b>Books</b>Reviews</a></div>
                        <div className="spacer" />
                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Books</a></li>
                                <li><a href="/">Reviews</a></li>
                                <li><a href="/">News</a></li>
                                <li><a href="/">Contacts</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;