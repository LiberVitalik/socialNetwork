import styled, { css } from 'styled-components';
import { ColorPalette } from '../colors/colors';

export const Block = styled.div``;

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FlexVerticalCenter = css`
    display: flex;
    align-items: center;
`;

export const AbsoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const FlexWrapper = styled.div`
    ${FlexVerticalCenter};
`;

export const HeaderBorder = (side: string = 'right') => {
    return `border-${side}: 1px solid ${ColorPalette.Text.middle}`
};

export const GetEllipsis = (maxWidth: number = 150) => {
    return `
        display: block;
        max-width: ${maxWidth}px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `
};