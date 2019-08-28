import styled from 'styled-components';
import { ColorPalette } from '../theme/colors/colors';

export const Main = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    margin-top: 60px;
    background: ${ColorPalette.Background.light};
    display: flex;
    justify-content: space-between;
`;