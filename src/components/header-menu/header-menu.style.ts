import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter, HeaderBorder } from '../../theme/commot-style/common-style';
import { ColorPalette } from '../../theme/colors/colors';

export const BarsIcon = styled(FontAwesomeIcon)`
    font-size: 28px;
    transition: color .2s ease;
`;

export const CloseIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
    transition: color .2s ease;
    color: ${ColorPalette.Main.brown};
`;

export const HeaderMenuItem = styled.button`
    ${FlexCenter};
    width: 60px;
    border: none;
    background: transparent;
    color: ${ColorPalette.Main.light};
    grid-area: HeaderMenuItem;
    cursor: pointer;
    
    ${HeaderBorder()};
    
    &:focus,
    &:active {
        outline: none;
    }
    
    &:hover {
        svg {
            color: ${ColorPalette.Main.brown};
        }
    }
`;