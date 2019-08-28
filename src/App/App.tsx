import * as React from 'react';
import { Component } from 'react';
import { Header } from '../components/header/header';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './App.style';
import { PersonInfo } from '../components/person-info/person-info';
import { FriendsBlock } from '../components/friends-block/friends-block';
import { Content } from '../components/content/content';

export default class App extends Component {

    public render() {
        return (
            <BrowserRouter>
                <Header />
                <Main>
                    <PersonInfo />
                    <Content />
                    <FriendsBlock />
                </Main>
            </BrowserRouter>
        );
    }
}