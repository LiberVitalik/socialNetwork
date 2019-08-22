import styled from 'styled-components';
import { FlexVerticalCenter, GetEllipsis, HeaderBorder } from '../../theme/commot-style/common-style';
import { SansPro } from '../../theme/fonts/fonts';
import { ColorPalette } from '../../theme/colors/colors';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserWrapper = styled.div`
    ${HeaderBorder('left')};
    ${FlexVerticalCenter};
    
    height: 100%;
    grid-area: User;
`;

export const UserName = styled(Link)`
    ${FlexVerticalCenter};
    
    font-family: ${SansPro.regular};
    color: ${ColorPalette.Main.light};
    text-decoration: none;
    transition: color .2s ease;
    margin: 0 6px 0 12px;
    
    span {
        ${GetEllipsis(200)};
    }
    
    svg {
        transition: color .2s ease;
    }
    
    &:active,
    &:focus {
        color: ${ColorPalette.Main.light}
    }
    
    &:hover {
        text-decoration: underline;
        color: ${ColorPalette.Main.brown};
        
        svg {
            color: ${ColorPalette.Main.brown};
        }
    }
`;

export const UserNameIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
    margin: 3px 8px 0;
`;

export const UserPhoto = styled.label<{ photo: string }>`
    display: block;
    width: 40px;  
    height: 40px;
    border-radius: 50%;
    color: ${ColorPalette.Main.light};
    background: ${({photo}) => `url(${photo})`} no-repeat 50% 50%;
    background-size: cover;
    border: 1px solid ${ColorPalette.Main.light};
    cursor: pointer;
    
    &:hover {
        border: 1px solid ${ColorPalette.Main.brown};
    }
    
    input {
        display: none;
    }
`;