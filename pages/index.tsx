import React  from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { client } from "../libs/client";
import { Post } from './post/[id]';
import { Front } from '../components/pages/Front';

interface Posts extends Array<Post>{}

interface NextPageProps {
  posts: Posts
}

const Home: NextPage<NextPageProps> = ({ posts }) => {
  const props = { posts, firstViewCardNumber: 6 }

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

