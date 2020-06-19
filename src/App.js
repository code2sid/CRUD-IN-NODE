import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import NotFound from "./pages/notfound";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/dashboard' component={Index} />
                        <Route path='/add' component={AddPage} />
                        <Route path='/edit/' component={EditPage} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
