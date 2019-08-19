import styled from 'styled-components';
import { FlexVerticalCenter } from '../../theme/commot-style/common-style';
import { SansPro } from '../../theme/fonts/fonts';
import { ColorPalette } from '../../theme/colors/colors';
import { Link } from 'react-router-dom';

export const UserWrapper = styled.div`
    ${FlexVerticalCenter};
`;

export const UserName = styled(Link)`
    font-family: ${SansPro.regular};
    color: ${ColorPalette.Main.light};
    text-decoration: none;
    
    &:active,
    &:focus {
        color: ${ColorPalette.Main.light}
    }
    
    &:hover {
        text-decoration: underline;
        color: ${ColorPalette.Text.middle};
    }
`;

export const UserPhoto = styled.label<{ photo?: string }>`
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${ColorPalette.Main.light};
    background: ${({photo}) => photo ? `url(${photo})` : ''} no-repeat 50% 50%;
    background-size: cover;
    border: 1px solid ${ColorPalette.Main.light};
    cursor: pointer;
    
    input {
        display: none;
    }
`;