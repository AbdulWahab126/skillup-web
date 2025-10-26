import CourseCard from '@/_components/all-courses/CourseCard'
import { Grid, Typography } from '@mui/material'

const dummyCourses = [
  {
    title: 'Mastering React Native',
    instructor: 'Sarah Ahmed',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b',
    rating: 4.8,
    learners: '2.4k',
    price: '$29.99'
  },
  {
    title: 'AI for Beginners',
    instructor: 'Dr. Ali Khan',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    rating: 4.6,
    learners: '3.1k',
    price: '$39.99'
  },
  {
    title: 'Full Stack Web Development',
    instructor: 'Michael Scott',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    rating: 4.9,
    learners: '5.6k',
    price: '$49.99'
  },
  {
    title: 'UI/UX Design Bootcamp',
    instructor: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
    rating: 4.7,
    learners: '1.9k',
    price: '$25.99'
  },
  {
    title: 'Python for Data Science',
    instructor: 'John Smith',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
    rating: 4.8,
    learners: '4.3k',
    price: '$35.00'
  },
  {
    title: 'Mastering React Native',
    instructor: 'Sarah Ahmed',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b',
    rating: 4.8,
    learners: '2.4k',
    price: '$29.99'
  },
  {
    title: 'AI for Beginners',
    instructor: 'Dr. Ali Khan',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    rating: 4.6,
    learners: '3.1k',
    price: '$39.99'
  },
  {
    title: 'Full Stack Web Development',
    instructor: 'Michael Scott',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    rating: 4.9,
    learners: '5.6k',
    price: '$49.99'
  },
  {
    title: 'UI/UX Design Bootcamp',
    instructor: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
    rating: 4.7,
    learners: '1.9k',
    price: '$25.99'
  },
  {
    title: 'Python for Data Science',
    instructor: 'John Smith',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
    rating: 4.8,
    learners: '4.3k',
    price: '$35.00'
  },
  {
    title: 'UI/UX Design Bootcamp',
    instructor: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28',
    rating: 4.7,
    learners: '1.9k',
    price: '$25.99'
  },
  {
    title: 'Python for Data Science',
    instructor: 'John Smith',
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
    rating: 4.8,
    learners: '4.3k',
    price: '$35.00'
  }
]

const AllCourses = () => {
  return (
    <div>
      <Typography variant='h3' fontWeight={600} sx={{ color: 'text.primary', mb: 4 }}>
        Explore All Courses
      </Typography>

      <Grid container spacing={2}>
        {dummyCourses.map((course, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default AllCourses
