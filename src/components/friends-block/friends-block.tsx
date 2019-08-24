import * as React from 'react';
import {
    FriendsBlockContainer,
    FriendsBlockItem,
    FriendsBlockName,
    FriendsBlockPhoto, FriendsActiveBlock,
    FriendsBlockWrapper, FriendsBlockLink
} from './friends-block.style';
import { getUserData } from '../../services/data.services';
import { MockUserDataType } from '../../data/default-userData';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '../../theme/colors/colors';
import { DefaultPersonInfo } from '../../data/default-data';

library.add(faCircleNotch);

export class FriendsBlock extends React.Component<{}, {}> {

    public componentWillMount(): void {
        this.userData = getUserData();
    }

    private userData: any = [];

    public render(): React.ReactNode {

        return (
            <FriendsBlockWrapper>
                <FriendsBlockContainer>
                    {this.getMockUsers()}
                </FriendsBlockContainer>
            </FriendsBlockWrapper>
        );
    }

    private getMockUsers = (): any => {
        return this.userData.map((friend: MockUserDataType, index: number) => {

            const { id, picture, name, status, active } = friend;

            return <FriendsBlockItem key={index}>
                        <FriendsBlockLink to={id}>
                            <FriendsBlockPhoto picture={picture || DefaultPersonInfo.photoUrl}/>
                            <FriendsBlockName>
                                {name}
                            </FriendsBlockName>
                        </FriendsBlockLink>
                        <FriendsActiveBlock
                            icon={faCircleNotch}
                            color={active ? ColorPalette.Main.green : ColorPalette.State.error}
                        />
            </FriendsBlockItem>;
        });
    };
}