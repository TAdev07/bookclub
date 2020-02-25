import React, {Suspense} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

// Components
import NotFound from 'Modules/NotFound';

// routes
import routes from 'Src/routes';

const MainContainer = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                <route.component {...props} />
                            )} />) : null;
                    }
                    )}
                    <Route component={NotFound} />
                    <Redirect to={'/'} />
                </Switch>
            </Suspense>
        </div>
    );
};

export default MainContainer;