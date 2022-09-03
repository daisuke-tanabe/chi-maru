import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card, { Post } from "../molecules/Card";

export interface Posts extends Array<Post>{}

interface CardGroupProps {
  ({ posts, firstViewCardNumber }: { posts: Posts, firstViewCardNumber: number }): JSX.Element
}

const CardGroup:CardGroupProps = ({ posts, firstViewCardNumber }) => {
  return (
    <Grid container spacing={4}>
      {
        posts.map((post, index) => {
          const props = { post, firstViewCardNumber, index }
          return (
            <Grid xs={12} sm={6} md={4} key={post.id}>
              <Card { ...props } />
            </Grid>
          )
        })
      }
    </Grid>
  )
};

export default CardGroup;
