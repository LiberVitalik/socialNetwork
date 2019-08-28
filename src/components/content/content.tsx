import * as React from 'react';
import { ContentWrapper } from './content.style';
import { Route } from 'react-router';
import { RoutingEnum } from '../../routing-enum/routing-enum';
import { Profile } from '../profile/profile';
import { Friends } from '../friends/friends';
import { Message } from '../message/message';
import { Group } from '../group/group';
import { News } from '../news/news';
import { Photos } from '../photos/photos';
import { InfoBlock } from '../info-block/info-block';

export class Content extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <ContentWrapper>
                <Route path={RoutingEnum.profile} component={Profile} />
                <Route path={RoutingEnum.friends} render={() => <Friends />} />
                <Route path={RoutingEnum.message} component={Message} />
                <Route path={RoutingEnum.group} component={Group} />
                <Route path={RoutingEnum.news} component={News} />
                <Route path={RoutingEnum.photos} component={Photos} />
                <Route path={`${''}`} component={() => <InfoBlock getCurrentUser={this.getCurrentUser} />} />
            </ContentWrapper>
        );
    }

    private getCurrentUser = ():void => {};
}