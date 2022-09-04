import React from 'react';
import Layout from '../template/Layout'
import CardGroup, { Posts } from "../organisms/CardGroup"

interface FrontProps {
  ({ posts, firstViewCardNumber }: { posts: Posts, firstViewCardNumber: number }): React.ReactElement;
}

export const Front: FrontProps = (props) => {
  return (
    <Layout>
      <CardGroup { ...props } />
    </Layout>
  )
};
