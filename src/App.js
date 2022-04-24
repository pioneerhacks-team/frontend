import React from "react";
import { Switch, Route } from "react-router-dom";
import useToken from "./hooks/useToken";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
    const { token, setToken, removeToken } = useToken();

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login setToken={setToken} />
            </Route>

            <Route exact path="/register">
                <Register setToken={setToken} />
            </Route>

            <Route exact path="/dashboard">
                {token ? <Dashboard removeToken={removeToken} /> : <Home />}
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;
