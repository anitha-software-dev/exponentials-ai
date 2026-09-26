import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Custom

import Index from "views/home";

export default function Routes() {
    React.useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    });
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <Index {...props} />} />
                </Switch>
            </BrowserRouter>
        </>
    )
}