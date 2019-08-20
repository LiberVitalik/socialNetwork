import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPalette } from '../../theme/colors/colors';
import { FlexVerticalCenter } from '../../theme/commot-style/common-style';

export const NavigationWrapper = styled.nav`
    width: 100px;
    height: 100%;
    grid-area: Navigation;
    ${FlexVerticalCenter};
`;

export const NavigationLink = styled(Link)`
    display: block;
    margin-right: 12px;
    
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