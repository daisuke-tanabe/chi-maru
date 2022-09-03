import React, { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { client } from "../libs/client";
import { Post } from './post/[id]';
import { Front } from '../components/pages/Front';
import useMediaQuery from "@mui/material/useMediaQuery";

interface Posts extends Array<Post>{}

interface NextPageProps {
  posts: Posts
}

const Home: NextPage<NextPageProps> = ({ posts }) => {
  // min-width:600px以上はファーストビューに入るカード6枚をプリロード
  const isMatchSm = useMediaQuery('(min-width:600px)');

  const [firstViewCardNumber] = useState(() => {
    if (isMatchSm) return 6;
    return 2;
  });

  const props = { posts, firstViewCardNumber }

  return (
    <Front {...props} />
  );
};

export default Home;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'posts' });

  return {
    props: {
      posts: data.contents,
    },
  };
};

