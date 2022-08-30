import * as React from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import Link from "next/link";
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
    // <div>
    //   <ul>
    //     {posts.map((blog) => (
    //       <li key={blog.id}>
    //         <Link href={`/posts/${blog.id}`}>
    //           <a>{blog.title}</a>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
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
