import { client } from "../../libs/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from 'next/link'
import { Header } from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import Head from "../_head";

export interface Post {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  postId: string;
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

interface Props {
  props: {
    post: Post;
  }
}

export default function BlogId({ post }:{ post:Post }) {
  return (
    <>
      <Head
        title={post.title}
        description={post.content.replace(/(<([^>]+)>)/gi, '').slice(0, 100)}
      />

      <Header />

      <main>
        <div style={{ paddingBottom: '144px' }}>
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
        </div>
      </main>

      <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "posts" });

  const paths = data.contents.map((content: { postId: any; }) => ({
    params: {
      id: content.postId
    }
  }));
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: any; }; }) => {
  const id = context.params.id;
  // @ts-ignore
  const data = await client.get({
    endpoint: "posts",
    queries: {
      filters: `postId[equals]${id}`
    },
  });

  return {
    props: {
      post: data.contents[0],
    },
  };
};
