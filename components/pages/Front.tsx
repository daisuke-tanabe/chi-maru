import { NextPage } from "next";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link'
import {textAlign} from "@mui/system";
import { Header } from '../organisms/Header';

export interface Post {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  summary: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  },
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  }
}

export interface Posts extends Array<Post>{}

interface PostCard {
  ({ n, post }: {
    n: number;
    post: Post;
  }): JSX.Element
}

const PostCard:PostCard = ({ n,post }) => {
  return (
    <Grid xs={12} sm={6} md={4} key={post.id}>
      <Card>
        <Link href={`/post/${post.id}`}>
          <a style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={post.eyecatch.url}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h2" sx={{
                  color: '#333',
                  fontWeight: 'bold',
                  mb: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                }}>{post.title}</Typography>
                <Typography gutterBottom variant="body2" sx={{
                  color: '#333',
                  lineHeight: 1.6,
                  height: 'calc(1.6em * 3)',
                  mb: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}>{post.summary}</Typography>
                <Typography gutterBottom variant="body2" component="time" sx={{ color: '#c0c0c0' }}>{post.publishedAt}</Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Link>
      </Card>
    </Grid>
  )
}

export const Front = ({ posts }: { posts: Posts}): JSX.Element => {
  return (
    <>
      <Header />

      <main>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {
              posts.map((post, n) => PostCard({ n, post }))
            }
          </Grid>
        </Container>
      </main>
    </>
  );
};
