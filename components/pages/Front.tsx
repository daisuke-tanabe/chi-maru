import React from 'react';
import CardGroup, { Posts } from "../organisms/CardGroup"

interface FrontProps {
  ({ posts, firstViewCardNumber }: { posts: Posts, firstViewCardNumber: number }): JSX.Element;
}

export const Front: FrontProps = (props): JSX.Element => {
  return (
    <CardGroup { ...props } />
  )
};
