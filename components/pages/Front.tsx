import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import PostCard, { Post } from "../../components/molecules/PostCard"

interface Posts extends Array<Post>{}

export const Front = ({ posts }: { posts: Posts }): JSX.Element => {
  return (
    <div style={{ paddingBottom: '144px' }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {
            posts.map((post) => (
              <Grid xs={12} sm={6} md={4} key={post.id}>
                <PostCard { ...post} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </div>
  )
};
