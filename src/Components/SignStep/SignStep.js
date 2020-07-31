import React from 'react'
import './SignStep.css'
import Input1 from './Input1'
import Input2 from './Input2'
import Input3 from './Input3'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom"

function SignStep(){
    return (
        <div id="SignStep" className="whole">
            <Router>
            <div className="left">
                <button className="arrow" id="arrowLeft"><img src="/images/arrowLeft.png" alt=""></img></button>
            </div>

            <div className="middle">
                <header id="logo"><h3>whereHouse logo</h3></header>

                <div className="content">
                        <Input3/>
                </div>
                <footer>
                    <button id="cancel">취 소</button>
                    <button id="done">완 료</button>
                </footer>
                
            </div>

            <div className="right">
                <button className="arrow" id="arrowRight"><img src="/images/arrowRight.png" alt=""></img></button>
            </div>

            <Switch>
                <Route>

                </Route>
            </Switch>
            </Router>
        </div>
    );
}

export default SignStep;