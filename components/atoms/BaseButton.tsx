import React from "react";
import { Button } from '@chakra-ui/react'

export type BaseButtonProps = {
  label: string;
};

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const { label } = props;
  return <Button colorScheme="green">{label}</Button>;
};
