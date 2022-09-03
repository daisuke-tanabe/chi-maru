import React, {useState} from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import { client } from "../libs/client";
import { Post } from './post/[id]';
import { Front } from '../components/pages/Front';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Posts extends Array<Post>{}

interface NextPageProps {
  posts: Posts
}

const Home: NextPage<NextPageProps> = ({ posts }) => {
  const theme = useTheme();

  // min-width:900px以上はファーストビューに入るカードが6枚
  const isMatchMd = useMediaQuery(theme.breakpoints.up('md'));

  // min-width:600px以上はファーストビューに入るカードが4枚
  const isMatchSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [firstViewCardNumber] = useState(() => {
    if (isMatchMd) return 6;
    if (isMatchSm) return 4;
    return 2;
  })

  const props = { posts, firstViewCardNumber }

  return (
    <Front {...props} />
  );
};

export default Home;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (): Promise<GetStaticPropsResult<NextPageProps>> => {
  const data = await client.get({ endpoint: 'posts' });

  return {
    props: {
      posts: data.contents,
    },
  };
};
