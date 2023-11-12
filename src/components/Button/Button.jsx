import React from 'react';
import { ActiveBtn, DisabledBtn } from './Button.styled';

const Button = ({ isActive, onClick, isLoading }) => {
  if (isActive) {
    return (
      <ActiveBtn onClick={onClick}> {isLoading ? '...' : 'Follow'}</ActiveBtn>
    );
  }
  return (
    <DisabledBtn onClick={onClick}>
      {isLoading ? '...' : 'Following'}
    </DisabledBtn>
  );
};

export default Button;
