import styled from 'styled-components';
import logo from '../../images/Logo.png';
import cardImage from '../../images/card-image.png';

export const CardContainer = styled.li`
    position: relative;
    width: 380px; 
    height: 460px; 
    position: relative; 
    background: linear-gradient(115deg, #471CA9 0%, #5736A3 69%, #4B2A99 100%); 
    box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px rgba(0, 0, 0, 0.23); 
    border-radius: 20px; 
`;

export const Logo = styled.div`
    position: absolute; 
    width: 76px; 
    height: 22px; 
    left: 20px; 
    top: 20px;
    background: url(${logo});
    background-size: contain;
`;

export const CardImage = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
  background: url(${cardImage});
`;

export const Line = styled.div`
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px; 
    background: #EBD8FF; 
    box-shadow: 0px 3.4369285106658936px 2.5776965618133545px #FBF8FF inset";
`;