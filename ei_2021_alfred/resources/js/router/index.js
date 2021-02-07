import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../../views/Home'
import About from '../../views/About'
import Contact from '../../views/Contact'
//import Navbar from '../../components/Navbar';
function Router(props) {
    return (
        <div>
            <BrowserRouter>
               
                <div className="py-4">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default Router;