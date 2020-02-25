import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';

// Components
import MainContainer from './Main';

// Styles
import '../assets/css/layout.styl';

const Layouts = () => {
    return (
        <Provider store={store}>
            <MainContainer />
        </Provider>
    );
};

export default Layouts;