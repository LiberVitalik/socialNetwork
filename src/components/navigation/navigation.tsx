import * as React from 'react';
import { NavigationIcon, NavigationLink, NavigationWrapper } from './navigation.style';
import { RoutingEnum } from '../../routing-enum/routing-enum';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';

library.add(faUserFriends);
library.add(faCommentAlt);

export class Navigation extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <NavigationWrapper>
                <NavigationLink to={RoutingEnum.friends}>
                    <NavigationIcon icon={faUserFriends} />
                </NavigationLink>
                <NavigationLink to={RoutingEnum.message}>
                    <NavigationIcon icon={faCommentAlt} />
                </NavigationLink>
            </NavigationWrapper>
        );
    }
}