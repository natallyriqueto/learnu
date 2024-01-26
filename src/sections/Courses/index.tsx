import { motion } from 'framer-motion';

import { CourseCard } from './CourseCard';

import { Content, CoursesContainer, Description } from './styles';

import courseImg1 from '@/assets/courseImg1.png';
import courseImg2 from '@/assets/courseImg2.png';
import courseImg3 from '@/assets/courseImg3.png';
import avatar1 from '@/assets/avatar1.png';
import avatar2 from '@/assets/avatar2.png';
import avatar3 from '@/assets/avatar3.png';
import { Caption, Heading } from '@/components/Text';

export interface Course {
  id: string;
  img: string;
  category: string;
  title: string;
  review: {
    score: string;
    stats: string;
  };
  totalStudents: string;
  teachers: {
    teacher: string;
    teacherImg: string;
    totalTeachers: string;
  };
  totalHours: string;
  difficulty: string;
}

const courses: Course[] = [
  {
    id: 'course1',
    img: courseImg1,
    category: 'agile',
    title: 'Agile Fundamentals',
    review: {
      score: '4.5',
      stats: '(56k reviews)'
    },
    totalStudents: '80k',
    teachers: {
      teacher: 'Brice Sherief',
      teacherImg: avatar1,
      totalTeachers: '4'
    },
    totalHours: '6 hours',
    difficulty: 'Beginner'
  },
  {
    id: 'course2',
    img: courseImg2,
    category: 'Front-End',
    title: 'React - The Complete Guide 2023',
    review: {
      score: '4.6',
      stats: '(98k reviews)'
    },
    totalStudents: '110k',
    teachers: {
      teacher: 'Neddy Muina',
      teacherImg: avatar2,
      totalTeachers: '2'
    },
    totalHours: '51 hours',
    difficulty: 'All Levels'
  },
  {
    id: 'course3',
    img: courseImg3,
    category: 'Data Science',
    title: 'The Data Science Course',
    review: {
      score: '4.8',
      stats: '(125k reviews)'
    },
    totalStudents: '170k',
    teachers: {
      teacher: 'Stevena Ashwood',
      teacherImg: avatar3,
      totalTeachers: '5'
    },
    totalHours: '32 hours',
    difficulty: 'Beginner'
  }
];

export const Courses = () => {
  return (
    <CoursesContainer id="courses">
      <motion.div
        key="CoursesDescription"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { y: 0, opacity: 1, },
          hidden: { y: -100, opacity: 0, }
        }}
      >
        <Description>
          <Caption text="our courses" />
          <Heading id="coursesHeading" text="Featured Content" />
        </Description>
      </motion.div>
        
      <Content>
        {
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        }
      </Content>
    </CoursesContainer>
  );
};