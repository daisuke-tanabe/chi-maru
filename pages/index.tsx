import * as React from 'react';
import type { NextPage } from 'next';
import Link from "next/link";
import { client } from "../libs/client";
import { Post } from './posts/[id]';

interface Posts extends Array<Post>{}

const Home: NextPage<{posts: Posts}> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((blog) => (
          <li key={blog.id}>
            <Link href={`/posts/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "posts" });

  return {
    props: {
      posts: data.contents,
    },
  };
};
