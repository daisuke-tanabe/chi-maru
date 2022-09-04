import { client } from "../../libs/client";
import Typography from "@mui/material/Typography";
import React from "react";
import Link from 'next/link'
import Head from "../_head";
import Layout from '../../components/template/Layout';

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

export default function BlogId({ post }:{ post:Post }) {
  return (
    <>
      <Head
        title={post.title}
        description={post.content.replace(/(<([^>]+)>)/gi, '').slice(0, 100)}
      />
      <Layout>
        <article
          css={{
            img: {
              maxWidth: '100%',
              height: 'auto'
            }
          }}
        >
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

        </article>

        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </Layout>
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
