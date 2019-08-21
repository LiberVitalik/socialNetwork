import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';
import { Link } from 'react-router-dom';
import { FlexCenter, HeaderBorder } from '../../theme/commot-style/common-style';

export const MainHeader = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background: ${ColorPalette.Main.green};
    color: ${ColorPalette.Main.light};
`;

export const MainHeaderContainer = styled.div`
    height: 100%;
    padding: 0 12px;
    
    display: grid;
    grid-auto-columns: 60px  60px auto 1fr auto;
    grid-template-areas: 'HeaderLogoLink HeaderMenuItem Navigation . User';
    
    svg {
        width: 28px;
        height: 28px;
        fill: ${ColorPalette.Main.light};
        
        path { 
            transition: fill .2s ease; 
        }
    }
`;

export const HeaderLogoLink = styled(Link)`
    width: 60px;
    height: 100%;
    grid-area: HeaderLogoLink;
    text-decoration: none;
    flex-direction: column;
    
    ${HeaderBorder()};
    ${FlexCenter};
    
    span {
        font-size: 10px;
        color: ${ColorPalette.Main.light};
        text-transform: uppercase;
        margin-top: 2px;
        transition: fill .2s ease;
    }
    
    &:hover {
        svg {
            fill: ${ColorPalette.Main.brown};
        }
        
        span {
            color: ${ColorPalette.Main.brown};
        }
    }
`;