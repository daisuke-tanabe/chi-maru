import React from 'react';
import CardGroup, { Posts } from "../organisms/CardGroup"

interface FrontProps {
  ({ posts }: { posts: Posts }): JSX.Element;
}

export const Front: FrontProps = (props): JSX.Element => {
  return (
    <CardGroup { ...props } />
  )
};
