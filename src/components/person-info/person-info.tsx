import * as React from 'react';
import { PersonInfoWrapper } from './person-info.style';

export class PersonInfo extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <PersonInfoWrapper>
                <h3>This is PersonInfo component</h3>
            </PersonInfoWrapper>
        );
    }
}