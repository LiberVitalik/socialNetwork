import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexCenter } from '../../theme/commot-style/common-style';
import { ColorPalette } from '../../theme/colors/colors';

export const BarsIcon = styled(FontAwesomeIcon)`
    font-size: 28px;
    transition: color .2s ease;
    color: ${ColorPalette.Background.dark};
`;

export const CloseIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
    transition: color .2s ease;
    color: ${ColorPalette.Main.light};
`;

export const HeaderMenuItem = styled.button`
    ${FlexCenter};
    border: none;
    background: transparent;
    color: ${ColorPalette.Main.light};
    cursor: pointer;
    padding: 8px;
    
    &:focus,
    &:active {
        outline: none;
    }
    
    &:hover {
        svg {
            color: ${ColorPalette.Main.light};
        }
    }
`;