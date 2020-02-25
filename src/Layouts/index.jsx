import React from 'react';

// Components
import MainContainer from 'Layouts/Main';
import HeaderContainer from 'Layouts/Header';
import FooterContainer from 'Layouts/Footer';
import SidebarContainer from 'Layouts/Sidebar';

// Styles
import '../assets/css/layout.styl';

const Layouts = () => {
    return (
        <>
            <HeaderContainer />
            <SidebarContainer />
            <MainContainer />
            <FooterContainer />
        </>
    );
};

export default Layouts;