import styled, { css } from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';
import { FlexVerticalCenter } from '../../theme/commot-style/common-style';

const HeaderSpacer = css`
    position: relative;
    
    &:after {
        content: '';
        width: 1px;
        height: 100%;
        background: ${ColorPalette.Main.light};
        margin: 10px;
    }
`;

export const MainHeader = styled.header`
    ${FlexVerticalCenter};
    
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 2%;
    background: ${ColorPalette.Main.green};
    color: ${ColorPalette.Main.light};
    
    svg {
        width: 40px;
        height: 40px;
        fill: ${ColorPalette.Main.light};
    }
    
    ${HeaderSpacer};
`;

export const Navigation = styled.section`
    
`;