import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCenter, FlexVerticalCenter } from '../../theme/commot-style/common-style';
import { SansPro } from '../../theme/fonts/fonts';
import { ColorPalette } from '../../theme/colors/colors';

export const PersonMenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const PersonMenuItem = styled.li`
    height: 40px;
    margin-bottom: 12px;
    ${FlexVerticalCenter};
    justify-content: space-between;
`;


export const PersonMenuLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: ${ColorPalette.Text.soft};
    
    &:hover {
        color: ${ColorPalette.Text.light};
    }
`;

export const PersonMenuLabel = styled.div`
    font-family: ${SansPro.semibold};
    font-size: 12px;
    color: ${ColorPalette.Text.soft};
    width: 30px;
    height: 15px;
    border: 1px solid ${ColorPalette.Text.soft};
    border-radius: 12px;
    ${FlexCenter};
    margin-top: 6px;
`;