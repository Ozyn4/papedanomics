import React from 'react';
import { Button } from '@mantine/core';

type EditButtonProps = {
  onClick: () => void;
};

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} >
      Edit
    </Button>
  );
};

export default EditButton;

