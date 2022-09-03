import React from 'react';
import { default as MCard } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image, { ImageLoaderProps } from 'next/image';

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

export interface CardProps {
  (post: Post): JSX.Element
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Card: CardProps = (post) => {
  return (
    <MCard>
      <Link href={`/post/${post.postId}`} prefetch={false} passHref>
        <CardActionArea>
          <Image
            loader={imageLoader}
            height={post.eyecatch.height}
            width={post.eyecatch.width}
            src={post.eyecatch.url}
            alt={post.title}
            css={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2" sx={{
              color: '#333',
              fontWeight: 'bold',
              mb: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}>{post.title}</Typography>
            <Typography gutterBottom variant="body2" sx={{
              color: '#333',
              lineHeight: 1.6,
              height: 'calc(1.6em * 3)',
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}>{post.summary}</Typography>
            <Typography gutterBottom variant="body2" component="time" sx={{ color: '#c0c0c0' }}>{post.publishedAt}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </MCard>
  )
}

export default Card
