import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Front, Posts } from './Front';

export default {
  title: 'pages/Front',
  component: Front,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Front>;

const posts = [
  {
    "id": "rti33uxoq",
    "createdAt": "2022-08-30T18:20:03.313Z",
    "updatedAt": "2022-08-30T18:38:33.793Z",
    "publishedAt": "2022-08-30T18:20:44.718Z",
    "revisedAt": "2022-08-30T18:38:33.793Z",
    "title": "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    "summary": "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。",
    "content": "<h2 id=\"hdb41525ba7\">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id=\"hf45076424a\">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/2e8e63151e954dd99a53591c4de3da72/blog-template-description1.png\" alt=\"\"><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/9bf380f06aa444b1a3696043b24a2bb9/blog-template-description2.png\" alt=\"\"><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d2f4643feda44371bdcb4b049024a751/blog-template-description3.png\" alt=\"\"></p><h2 id=\"h88398f2fb7\"><br>次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href=\"https://document.microcms.io/tutorial/javascript/javascript-top\" target=\"_blank\" rel=\"noopener noreferrer\">JavaScript SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/nuxt/nuxt-top\" target=\"_blank\" rel=\"noopener noreferrer\">Nuxt SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/gatsby/gatsby-top\" target=\"_blank\" rel=\"noopener noreferrer\">Gatsby SDK</a></li></ul><p><br>その他に<a href=\"https://microcms.io/features/sdk\" target=\"_blank\" rel=\"noopener noreferrer\">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href=\"mailto:support@microcms.io\" target=\"_blank\" rel=\"noopener noreferrer\">support@microcms.io</a><br>よくある質問：<a href=\"https://help.microcms.io/ja/knowledge\" target=\"_blank\" rel=\"noopener noreferrer\">https://help.microcms.io/ja/knowledge</a></p>",
    "eyecatch": {
      "url": "https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d676ce802270485cba7426be4876c8f7/blog-template.png",
      "height": 630,
      "width": 1200
    },
    "category": {
      "id": "21u6e4bjc",
      "createdAt": "2022-08-30T13:55:23.109Z",
      "updatedAt": "2022-08-30T13:55:23.109Z",
      "publishedAt": "2022-08-30T13:55:23.109Z",
      "revisedAt": "2022-08-30T13:55:23.109Z",
      "name": "更新情報"
    }
  },
  {
    "id": "b7jf7eop4f1j",
    "createdAt": "2022-08-30T18:19:58.809Z",
    "updatedAt": "2022-08-30T18:39:18.158Z",
    "publishedAt": "2022-08-30T18:20:20.934Z",
    "revisedAt": "2022-08-30T18:39:18.158Z",
    "title": "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ",
    "summary": "後ろで大きな爆発音がした。俺は驚いて振り返った。後ろで大きな",
    "content": "<h2 id=\"hdb41525ba7\">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id=\"hf45076424a\">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/2e8e63151e954dd99a53591c4de3da72/blog-template-description1.png\" alt=\"\"><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/9bf380f06aa444b1a3696043b24a2bb9/blog-template-description2.png\" alt=\"\"><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d2f4643feda44371bdcb4b049024a751/blog-template-description3.png\" alt=\"\"></p><h2 id=\"h88398f2fb7\"><br>次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href=\"https://document.microcms.io/tutorial/javascript/javascript-top\" target=\"_blank\" rel=\"noopener noreferrer\">JavaScript SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/nuxt/nuxt-top\" target=\"_blank\" rel=\"noopener noreferrer\">Nuxt SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/gatsby/gatsby-top\" target=\"_blank\" rel=\"noopener noreferrer\">Gatsby SDK</a></li></ul><p><br>その他に<a href=\"https://microcms.io/features/sdk\" target=\"_blank\" rel=\"noopener noreferrer\">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href=\"mailto:support@microcms.io\" target=\"_blank\" rel=\"noopener noreferrer\">support@microcms.io</a><br>よくある質問：<a href=\"https://help.microcms.io/ja/knowledge\" target=\"_blank\" rel=\"noopener noreferrer\">https://help.microcms.io/ja/knowledge</a></p>",
    "eyecatch": {
      "url": "https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d676ce802270485cba7426be4876c8f7/blog-template.png",
      "height": 630,
      "width": 1200
    },
    "category": {
      "id": "21u6e4bjc",
      "createdAt": "2022-08-30T13:55:23.109Z",
      "updatedAt": "2022-08-30T13:55:23.109Z",
      "publishedAt": "2022-08-30T13:55:23.109Z",
      "revisedAt": "2022-08-30T13:55:23.109Z",
      "name": "更新情報"
    }
  },
  {
    "id": "dt04bbpri",
    "createdAt": "2022-08-30T18:16:12.098Z",
    "updatedAt": "2022-08-30T18:39:01.995Z",
    "publishedAt": "2022-08-30T18:16:23.955Z",
    "revisedAt": "2022-08-30T18:39:01.995Z",
    "title": "（サンプル2）まずはこの記事を開きましょう",
    "summary": "つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、",
    "content": "<h2 id=\"hdb41525ba7\">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id=\"hf45076424a\">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/2e8e63151e954dd99a53591c4de3da72/blog-template-description1.png\" alt=\"\"><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/9bf380f06aa444b1a3696043b24a2bb9/blog-template-description2.png\" alt=\"\"><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d2f4643feda44371bdcb4b049024a751/blog-template-description3.png\" alt=\"\"></p><h2 id=\"h88398f2fb7\"><br>次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href=\"https://document.microcms.io/tutorial/javascript/javascript-top\" target=\"_blank\" rel=\"noopener noreferrer\">JavaScript SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/nuxt/nuxt-top\" target=\"_blank\" rel=\"noopener noreferrer\">Nuxt SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/gatsby/gatsby-top\" target=\"_blank\" rel=\"noopener noreferrer\">Gatsby SDK</a></li></ul><p><br>その他に<a href=\"https://microcms.io/features/sdk\" target=\"_blank\" rel=\"noopener noreferrer\">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href=\"mailto:support@microcms.io\" target=\"_blank\" rel=\"noopener noreferrer\">support@microcms.io</a><br>よくある質問：<a href=\"https://help.microcms.io/ja/knowledge\" target=\"_blank\" rel=\"noopener noreferrer\">https://help.microcms.io/ja/knowledge</a></p>",
    "eyecatch": {
      "url": "https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d676ce802270485cba7426be4876c8f7/blog-template.png",
      "height": 630,
      "width": 1200
    },
    "category": {
      "id": "21u6e4bjc",
      "createdAt": "2022-08-30T13:55:23.109Z",
      "updatedAt": "2022-08-30T13:55:23.109Z",
      "publishedAt": "2022-08-30T13:55:23.109Z",
      "revisedAt": "2022-08-30T13:55:23.109Z",
      "name": "更新情報"
    }
  },
  {
    "id": "62-ph1yfxk4j",
    "createdAt": "2022-08-30T13:55:24.429Z",
    "updatedAt": "2022-08-30T18:38:42.141Z",
    "publishedAt": "2022-08-30T13:55:24.429Z",
    "revisedAt": "2022-08-30T18:38:42.141Z",
    "title": "（サンプル）まずはこの記事を開きましょう",
    "summary": "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーで",
    "content": "<h2 id=\"hdb41525ba7\">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id=\"hf45076424a\">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/2e8e63151e954dd99a53591c4de3da72/blog-template-description1.png\" alt=\"\"><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/9bf380f06aa444b1a3696043b24a2bb9/blog-template-description2.png\" alt=\"\"><br><br>この記事の内容がAPIで取得できていることがわかります。<br><img src=\"https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d2f4643feda44371bdcb4b049024a751/blog-template-description3.png\" alt=\"\"></p><h2 id=\"h88398f2fb7\"><br>次にやること🏃</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href=\"https://document.microcms.io/tutorial/javascript/javascript-top\" target=\"_blank\" rel=\"noopener noreferrer\">JavaScript SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/nuxt/nuxt-top\" target=\"_blank\" rel=\"noopener noreferrer\">Nuxt SDK</a></li><li><a href=\"https://document.microcms.io/tutorial/gatsby/gatsby-top\" target=\"_blank\" rel=\"noopener noreferrer\">Gatsby SDK</a></li></ul><p><br>その他に<a href=\"https://microcms.io/features/sdk\" target=\"_blank\" rel=\"noopener noreferrer\">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href=\"mailto:support@microcms.io\" target=\"_blank\" rel=\"noopener noreferrer\">support@microcms.io</a><br>よくある質問：<a href=\"https://help.microcms.io/ja/knowledge\" target=\"_blank\" rel=\"noopener noreferrer\">https://help.microcms.io/ja/knowledge</a></p>",
    "eyecatch": {
      "url": "https://images.microcms-assets.io/assets/8e17e35a7f7e4f66bb028a2518f53a5a/d676ce802270485cba7426be4876c8f7/blog-template.png",
      "height": 630,
      "width": 1200
    },
    "category": {
      "id": "21u6e4bjc",
      "createdAt": "2022-08-30T13:55:23.109Z",
      "updatedAt": "2022-08-30T13:55:23.109Z",
      "publishedAt": "2022-08-30T13:55:23.109Z",
      "revisedAt": "2022-08-30T13:55:23.109Z",
      "name": "更新情報"
    }
  }
]

const Template: ComponentStory<typeof Front> = (args) => {
  return (
    <Front {...args} />
  );
}

export const Base = Template.bind({ posts });
Base.args = { posts };
