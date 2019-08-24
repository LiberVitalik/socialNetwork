import styled from 'styled-components';
import { FlexVerticalCenter, GetEllipsis, HeaderBorder } from '../../theme/commot-style/common-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPalette } from '../../theme/colors/colors';
import { Link } from 'react-router-dom';

export const FriendsBlockWrapper = styled.aside`
    width: 260px;
    box-sizing: border-box;
    max-height: calc(100vh - 60px);
    overflow: hidden;
    background: ${ColorPalette.Text.soft};
   ${HeaderBorder('left')};
`;

export const FriendsBlockContainer = styled.ul`
    max-height: calc(100vh - 60px);
    overflow: hidden;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

export const FriendsBlockItem= styled.li`
    ${FlexVerticalCenter};
    height: 40px;
    padding: 12px;
    ${HeaderBorder('bottom')};
    justify-content: space-between;
`;

export const FriendsBlockLink = styled(Link)`
    ${FlexVerticalCenter};
    text-decoration: none;
`;

export const FriendsBlockPhoto = styled.div<{picture?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: ${({picture}) => `url(${picture})`} no-repeat 50% 50%;
    background-size: cover;
    margin-right: 12px;
`;

export const FriendsBlockName = styled.div`
    color: ${ColorPalette.Main.light};
    ${GetEllipsis(160)};
`;

export const FriendsActiveBlock = styled(FontAwesomeIcon)`
    font-size: 18px;
`;