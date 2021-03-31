import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AddEvents from "./Components/AddEvents/AddEvents";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addEvent">Add Event</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/addEvents">
                        <AddEvents />
                    </Route>
                    <Route path="/dashboard">

                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
