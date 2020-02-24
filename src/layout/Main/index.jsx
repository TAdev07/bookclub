import React from 'react';
import {Provider} from 'react-redux';
import store from './../../store';
import Header from '../Header';
import Footer from '../Footer';

const MainContainer = () => {
    return (
        <Provider store={store}>
            <Header />
            This is main MainContainer
            <Footer />
        </Provider>
    );
};

export default MainContainer;