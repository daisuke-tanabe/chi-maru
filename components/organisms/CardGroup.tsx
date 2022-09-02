import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card, { Post } from "../molecules/Card";

export interface Posts extends Array<Post>{}

interface CardGroupProps {
  ({ posts }: { posts: Posts }): JSX.Element
}

const CardGroup:CardGroupProps = ({ posts }) => {
  return (
    <Grid container spacing={4}>
      {
        posts.map((post) => (
          <Grid xs={12} sm={6} md={4} key={post.id}>
            <Card { ...post} />
          </Grid>
        ))
      }
    </Grid>
  )
};

export default CardGroup;
