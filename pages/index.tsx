import React from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import { client } from "../libs/client";
import { Post } from './post/[id]';
import { Front } from '../components/pages/Front';

interface Posts extends Array<Post>{}

interface Props {
  posts: Posts;
}

const Home: NextPage<Props> = (props) => {
  return (
    <Front {...props} />
  );
};
export default Home;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const data = await client.get({ endpoint: 'posts' });

  return {
    props: {
      posts: data.contents,
    },
  };
};
