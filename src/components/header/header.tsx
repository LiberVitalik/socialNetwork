import * as React from 'react';
import { HeaderLogoLink, MainHeader, MainHeaderContainer } from './header.style';
import { Logo } from '../../icons/logo';
import { User } from '../user/user';
import { Navigation } from '../navigation/navigation';
import { RoutingEnum } from '../../routing-enum/routing-enum';

export class Header extends React.Component {
    public render(): React.ReactNode {
        return (
            <MainHeader>
                <MainHeaderContainer>
                    <HeaderLogoLink to={RoutingEnum.defaultPage}>
                        <Logo />
                        <span>Home</span>
                    </HeaderLogoLink>
                    <Navigation />
                    <User />
                </MainHeaderContainer>
            </MainHeader>
        );
    }
}