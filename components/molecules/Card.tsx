import React from 'react';
import { default as MCard } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea, CardMedia} from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image, { ImageLoaderProps } from 'next/image';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

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
  ({ post, index, firstViewCardNumber }:{ post: Post; index: number; firstViewCardNumber: number; }): JSX.Element
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Card: CardProps = ({ post, index, firstViewCardNumber}) => {
  const japanTime = new Date(Date.parse(post.publishedAt)).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  const date = new Date(japanTime);

  return (
    <MCard>
      <Link href={`/post/${post.postId}`} prefetch={false} passHref>
        <CardActionArea>
          <CardMedia
            css={{
              position: 'relative',
              aspectRatio: `auto 700/433`
            }}
          >
            <Image
              src={imageLoader({
                src: post.eyecatch.url,
                width: post.eyecatch.width,
              })}
              layout="fill"
              objectFit="cover"
              alt={post.title}
              priority={index < firstViewCardNumber}
              unoptimized
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2" sx={{
              color: '#333',
              fontWeight: 'bold',
              height: 'calc(1.75em * 2)',
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
            <Typography
              gutterBottom
              variant="body2"
              component="time"
              sx={{
                color: '#c0c0c0',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AccessTimeOutlinedIcon
                css={{
                  color: '#c0c0c0',
                  fontSize: '16px',
                  marginRight: '8px'
                }}
              />
              {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </MCard>
  )
}

export default Card
