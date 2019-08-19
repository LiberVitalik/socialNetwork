import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Profile } from '../components/profile/profile';
import { Main } from './App.style';

export default class App extends Component {

    public render() {
        return (
            <BrowserRouter>
                <Header />
                <Main>
                    <Route path={'/profile'} component={Profile} />
                </Main>
            </BrowserRouter>
        );
    }
}