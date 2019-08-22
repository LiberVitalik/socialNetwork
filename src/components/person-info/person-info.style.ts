import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';
import { SansPro } from '../../theme/fonts/fonts';
import { FlexCenter, GetEllipsis } from '../../theme/commot-style/common-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PersonInfoWrapper = styled.aside`
    width: 232px;
    background: ${ColorPalette.Main.brown};
`;

export const PersonInfoPhoto = styled.div<{ photo: string }>`
    height: 180px;
    background: ${({photo}) => `url(${photo})`} no-repeat 50% 50%;
    background-size: cover;
`;

export const PersonInfoContainer = styled.div`
    width: 100%;
    height: 150px;
    flex-direction: column;
    background: ${ColorPalette.Main.dark};
`;

export const PersonInfoNameBlock = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-between;
    background: ${ColorPalette.Main.dark};
    padding: 12px;
    box-sizing: border-box;
`;

export const PersonInfoName = styled.div`
    font-family: ${SansPro.regular};
    color: ${ColorPalette.Main.light};
    font-size: 24px;
    text-transform: capitalize;
    ${GetEllipsis(160)};
`;

export const PersonInfoStatusWrapper = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PersonInfoStatus = styled(FontAwesomeIcon)<{isOnline: boolean}>`
    font-size: 18px;
    color: ${({isOnline}) => isOnline ? `${ColorPalette.Main.green}` : `${ColorPalette.State.error}`};
`;

export const PersonInfoActiveWrapper = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    
    button {
        ${FlexCenter};
        font-family: ${SansPro.semibold};
        background: ${ColorPalette.Main.green};
        color: ${ColorPalette.Main.light};
        font-size: 12px;
        text-transform: uppercase;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 2px;
        border: none;
        
        &:hover {
            outline: 1px solid ${ColorPalette.Main.light};
        }
        
        svg {
            margin-right: 8px;
        }
    }
`;

export const PersonInfoActiveFollow = styled.button`
    display: flex;
    margin-right: 18px;
`;

export const PersonInfoActiveChat = styled.button`
    display: flex;
`;