import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPalette } from '../../theme/colors/colors';
import { FlexCenter, HeaderBorder } from '../../theme/commot-style/common-style';

export const NavigationWrapper = styled.nav`
    height: 100%;
    grid-area: Navigation;
    padding: 0 12px;
    
    ${HeaderBorder()};
    ${FlexCenter};
`;

export const NavigationLink = styled(Link)`
    display: block;
    
    &:not(:last-child) {
        margin-right: 12px;
    }
    
    svg {
        transition: color .2s ease;
    }
    
    &:hover {
        svg {
            color: ${ColorPalette.Main.brown};
        }
    }
`;

export const NavigationIcon = styled(FontAwesomeIcon)`
    color: ${ColorPalette.Main.light};
    font-size: 28px;
`;