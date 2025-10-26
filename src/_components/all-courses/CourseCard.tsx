// 'use client'

import Image from 'next/image'

import { Star } from 'lucide-react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface CourseCardProps {
  title: string
  instructor: string
  image: string
  rating: number
  learners: string
  price: string
}

const CourseCard = ({ title, instructor, image, rating, learners, price }: CourseCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: 2, // smaller corners
        boxShadow: '0 3px 14px rgba(0,0,0,0.07)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 5px 18px rgba(0,0,0,0.12)',
          transform: 'translateY(-2px)'
        }
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: 220 }}>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover'
          style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography variant='h6' fontWeight={600} sx={{ color: 'text.primary', mb: 0.5 }}>
          {title}
        </Typography>

        <Typography variant='body2' sx={{ color: 'text.secondary', mb: 1 }}>
          by {instructor}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(rating) ? '#FBBF24' : 'none'}
              strokeWidth={1.5}
              color='#FBBF24'
            />
          ))}
          <Typography variant='body2' sx={{ color: 'text.secondary', ml: 0.5 }}>
            {rating.toFixed(1)}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {learners} learners
          </Typography>
          <Typography variant='subtitle1' fontWeight={600} sx={{ color: 'primary.main' }}>
            {price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CourseCard
