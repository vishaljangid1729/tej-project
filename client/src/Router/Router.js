import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Grade } from '../Components/Pages/grade'
import { Home } from '../Components/Pages/Home'
import { Question } from '../Components/Pages/questions'

function Router () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/question" component = {Question} ></Route>
                <Route exact path = "/grade" component = {Grade} ></Route>

            </Switch>
        </BrowserRouter>
    )
}

export {Router}