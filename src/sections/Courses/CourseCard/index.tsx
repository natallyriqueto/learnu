import { Clock, Star } from 'phosphor-react';

import { 
  Avatar, 
  CardContainer, 
  CardContent, 
  CardFooter, 
  CardImage, 
  CardInfo, 
  CardTeacher, 
  Divider 
} from './style';
import { Course } from '..';

import chartBarBeginner from '@/assets/ChartBarBeginner.svg';

interface ICourseCard {
  course: Course
}

export const CourseCard = ({ course }: ICourseCard)  => {
  const { 
    img,
    category,
    title,
    review,
    totalStudents,
    teachers,
    totalHours,
    difficulty
  } = course;

  return (
    <CardContainer>
      <CardImage src={img} />
      <CardContent>
        <span>{category}</span>
        <h5>{title}</h5>
        <CardInfo>
          <Star size={24} weight="fill" color="#FFAB00" />
          <strong>{review.score}</strong> 
          <span>{review.stats}</span>

          <Divider />

          <strong>{totalStudents}</strong> 
          <span>Students</span>
        </CardInfo>
        <CardTeacher>
          <Avatar src={teachers.teacherImg} /> 
          <strong>{teachers.teacher}</strong>
          <span>{`+${teachers.totalTeachers} teachers`}</span>
        </CardTeacher>
      </CardContent>
      <CardFooter>
        <div>
          <Clock size={24} color="#919EAB" />
          {totalHours}
        </div>
        <div>
          <img src={chartBarBeginner} />
          {difficulty}
        </div>
      </CardFooter>
    </CardContainer>);
};