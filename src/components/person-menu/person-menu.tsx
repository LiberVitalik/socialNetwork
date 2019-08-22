import * as React from 'react';
import { PersonMenuItem, PersonMenuLabel, PersonMenuLink, PersonMenuWrapper } from './person-menu.style';
import { PersonMenuProps } from './person-menu.types';
import { RoutingEnum } from '../../routing-enum/routing-enum';

export class PersonMenu extends React.Component<PersonMenuProps, {}> {

    public render(): React.ReactNode {
        return (
            <PersonMenuWrapper>
                <PersonMenuItem>
                    <PersonMenuLink to={RoutingEnum.friends}>Friends</PersonMenuLink>
                    <PersonMenuLabel>264</PersonMenuLabel>
                </PersonMenuItem>
                <PersonMenuItem>
                    <PersonMenuLink to={RoutingEnum.group}>Group</PersonMenuLink>
                    <PersonMenuLabel>34</PersonMenuLabel>
                </PersonMenuItem>
                <PersonMenuItem>
                    <PersonMenuLink to={RoutingEnum.photos}>Photos</PersonMenuLink>
                    <PersonMenuLabel>782</PersonMenuLabel>
                </PersonMenuItem>
                <PersonMenuItem>
                    <PersonMenuLink to={RoutingEnum.news}>News</PersonMenuLink>
                    <PersonMenuLabel>8</PersonMenuLabel>
                </PersonMenuItem>
            </PersonMenuWrapper>
        );
    }
}