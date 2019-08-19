import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { MainHeader, Navigation } from './header.style';
import { Logo } from '../../icons/logo';
import { User } from '../user/user';

library.add(faUserCircle);

export class Header extends React.Component {
    public render(): React.ReactNode {
        return (
            <MainHeader>
                <Logo />
                <Navigation />
                <User />
            </MainHeader>
        );
    }
}