import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Profile } from '../components/profile/profile';
import { Content, Main } from './App.style';
import { RoutingEnum } from '../routing-enum/routing-enum';
import { Friends } from '../components/friends/friends';
import { Message } from '../components/message/message';
import { PersonInfo } from '../components/person-info/person-info';

export default class App extends Component {

    public render() {
        return (
            <BrowserRouter>
                <Header />
                <Main>
                    <PersonInfo />
                    <Content>
                        <Route path={RoutingEnum.profile} component={Profile} />
                        <Route path={RoutingEnum.friends} component={Friends} />
                        <Route path={RoutingEnum.message} component={Message} />
                    </Content>
                </Main>
            </BrowserRouter>
        );
    }
}