import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorPalette } from '../../theme/colors/colors';
import { FlexCenter } from '../../theme/commot-style/common-style';

export const NavigationWrapper = styled.nav`
    height: 100%;
    grid-area: Navigation;
    padding: 0 12px;
    
    ${FlexCenter};
`;

export const NavigationLink = styled(Link)`
    display: block;
    padding: 8px;
    
    svg {
        transition: color .2s ease;
    }
    
    &:hover {
        svg {
            color: ${ColorPalette.Main.light};
        }
    }
`;

export const NavigationIcon = styled(FontAwesomeIcon)`
    color: ${ColorPalette.Background.dark};
    font-size: 24px;
`;