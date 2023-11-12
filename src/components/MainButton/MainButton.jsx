import React from 'react';
import { StyledButton } from './MainButton.styled';

const MainButton = ({ to }) => {
  return <StyledButton to={to}> Back</StyledButton>;
};

export default MainButton;
