import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import PostCard, { Post } from "../../components/molecules/PostCard"

interface Posts extends Array<Post>{}

export const Front = ({ posts }: { posts: Posts }): JSX.Element => {
  return (
    <Grid container spacing={4}>
      {
        posts.map((post) => (
          <Grid xs={12} sm={6} md={4} key={post.id}>
            <PostCard { ...post} />
          </Grid>
        ))
      }
    </Grid>
  )
};
