import React from 'react';
import { Button } from '@mantine/core';

type SubmitButtonProps = {
  onClick: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} >
      Submit
    </Button>
  );
};

export default SubmitButton;

