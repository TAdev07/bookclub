import React from 'react';

// Styles
import 'Assets/css/bootstrap.min.css';
import 'Assets/css/styles.styl';
import 'Assets/css/font-awesome.css';

// Components
import MainContainer from 'Layouts/Main';
import HeaderContainer from 'Layouts/Header';
import FooterContainer from 'Layouts/Footer';
import SidebarContainer from 'Layouts/Sidebar';

const Layouts = () => {
    return (
        <div className="layout">
            <HeaderContainer />
            <div className='container-main'>
                <SidebarContainer />
                <MainContainer />
            </div>
            <FooterContainer />
        </div>
    );
};

export default Layouts;