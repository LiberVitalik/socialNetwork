import * as React from 'react';
import { UserName, UserNameIcon, UserPhoto, UserWrapper } from './user.style';
import { UserProps } from './user.props';
import { RoutingEnum } from '../../routing-enum/routing-enum';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp);
library.add(faAngleDown);

export class User extends React.Component<UserProps, {}> {
    public render(): React.ReactNode {

        const DEFAULT_PHOTO = 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png';
        const { name, photo } = this.props;

        return (
            <UserWrapper>
                <UserName to={RoutingEnum.profile}>
                    {name || 'Unknown User'}
                    {false && <UserNameIcon icon={faAngleUp} />}
                    {true && <UserNameIcon icon={faAngleDown} />}
                </UserName>
                <form>
                    <UserPhoto photo={photo || DEFAULT_PHOTO}>
                        <input type={'file'} />
                    </UserPhoto>
                </form>
            </UserWrapper>
        );
    }
}