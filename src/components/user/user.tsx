import * as React from 'react';
import { UserName, UserNameIcon, UserPhoto, UserWrapper } from './user.style';
import { UserProps, UserState } from './user.props';
import { RoutingEnum } from '../../routing-enum/routing-enum';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleUp);
library.add(faAngleDown);

export class User extends React.Component<UserProps, UserState> {

    public state = {
        isUserOpen: false
    };

    public render(): React.ReactNode {

        const DEFAULT_PHOTO = 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png';
        const { name, photo } = this.props;
        const { isUserOpen } = this.state;

        return (
            <UserWrapper>
                <UserName to={RoutingEnum.profile} onClick={this.toggleUserInfo}>
                    <span>{name || 'Unknown User'}</span>
                    {isUserOpen && <UserNameIcon icon={faAngleUp} />}
                    {!isUserOpen && <UserNameIcon icon={faAngleDown} />}
                </UserName>
                <form>
                    <UserPhoto photo={photo || DEFAULT_PHOTO}>
                        <input type={'file'} />
                    </UserPhoto>
                </form>
            </UserWrapper>
        );
    }

    private toggleUserInfo = (): void => {
        const { isUserOpen } = this.state;

        this.setState({
            isUserOpen: !isUserOpen
        })
    }
}