import { client } from "../../libs/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from 'next/link'
import { Header } from '../../components/organisms/Header';

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

export default function BlogId({ post }:{ post:Post }) {
  return (
    <>
      <Header />

      <main>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid key={post.id}>
              <Typography gutterBottom variant="h4" component="h2" sx={{
                color: '#333',
                fontWeight: 'bold',
                mb: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}>{post.title}</Typography>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${post.content}`,
                }}
              />
            </Grid>

            <Link href="/">
              <a>Go to Home</a>
            </Link>
          </Grid>
        </Container>
      </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "posts" });

  const paths = data.contents.map((content: { id: any; }) => `/post/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: any; }; }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "posts", contentId: id });

  return {
    props: {
      post: data,
    },
  };
};
