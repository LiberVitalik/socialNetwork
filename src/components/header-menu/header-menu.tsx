import * as React from 'react';
import { BarsIcon, CloseIcon, HeaderMenuItem } from './header-menu.style';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HeaderMenuState } from './header-menu.types';

library.add(faBars);
library.add(faTimes);

export class HeaderMenu extends React.Component<{}, HeaderMenuState> {
    public state: HeaderMenuState = {
        isIconActive: false
    };

    public render(): React.ReactNode {

        const { isIconActive } = this.state;

        return (
            <HeaderMenuItem onClick={this.toggleIcon}>
                {!isIconActive && <BarsIcon icon={faBars} />}
                {isIconActive && <CloseIcon icon={faTimes} />}
            </HeaderMenuItem>
        );
    }

    private toggleIcon = ():void => {
        this.setState({
            isIconActive: !this.state.isIconActive
        })
    }
}