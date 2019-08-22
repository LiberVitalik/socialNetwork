import * as React from 'react';
import {
    PersonInfoActiveChat,
    PersonInfoActiveFollow,
    PersonInfoActiveWrapper,
    PersonInfoContainer,
    PersonInfoName,
    PersonInfoNameBlock,
    PersonInfoPhoto, PersonInfoStatus, PersonInfoStatusWrapper,
    PersonInfoWrapper
} from './person-info.style';
import { PersonInfoProps } from './person-info.types';
import { Block } from '../../theme/commot-style/common-style';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faCommentAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { DefaultPersonInfo } from '../../data/default-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PersonMenu } from '../person-menu/person-menu';

library.add(faCircleNotch);
library.add(faCommentAlt);
library.add(faUserCheck);

export class PersonInfo extends React.Component<PersonInfoProps, {}> {
    public render(): React.ReactNode {
        const { name, photo, isOnline = false } = this.props;

        return (
            <PersonInfoWrapper>
                <PersonInfoPhoto photo={photo || DefaultPersonInfo.photoUrl} />
                <PersonInfoContainer>
                    <PersonInfoNameBlock>
                        <Block>{this.convertName(name || DefaultPersonInfo.name)}</Block>
                        <PersonInfoStatusWrapper>
                            <PersonInfoStatus icon={faCircleNotch} isOnline={isOnline}   />
                        </PersonInfoStatusWrapper>
                    </PersonInfoNameBlock>
                    <PersonInfoActiveWrapper>
                        <PersonInfoActiveFollow>
                            <FontAwesomeIcon icon={faUserCheck} />
                            <span>Following</span>
                        </PersonInfoActiveFollow>
                        <PersonInfoActiveChat>
                            <FontAwesomeIcon icon={faCommentAlt} />
                            <span>Chat</span>
                        </PersonInfoActiveChat>
                    </PersonInfoActiveWrapper>
                </PersonInfoContainer>
                <PersonMenu />
            </PersonInfoWrapper>
        );
    }

    private convertName = (name: string) => {
        return name.split(' ').map(namePart => <PersonInfoName>{namePart}</PersonInfoName>)
    }
}