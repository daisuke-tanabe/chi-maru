import { client } from "../../libs/client";

export interface Post {
  "id": string;
  "createdAt": string;
  "updatedAt": string;
  "publishedAt": string;
  "revisedAt": string;
  "title": string;
  "content": string;
  "eyecatch": {
    "url": string;
    "height": number;
    "width": number;
  },
  "category": {
    "id": string;
    "createdAt": string;
    "updatedAt": string;
    "publishedAt": string;
    "revisedAt": string;
    "name": string;
  }
}

export default function BlogId({ post }:{ post:Post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "posts" });

  const paths = data.contents.map((content: { id: any; }) => `/posts/${content.id}`);
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
