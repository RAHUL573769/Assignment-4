import { ICourse } from "./course.interface";
import Course from "./course.model";

const createCourseIntoDb = async (courseData: ICourse): Promise<ICourse> => {
  const result = await Course.create(courseData);
  return result;
};
const getCourseFromDb = async (): Promise<ICourse[]> => {
  const result = await Course.find();
  return result;
};
const getSingleCourseFromDb = async (
  courseId: string
): Promise<ICourse | null> => {
  const result = await Course.findById(courseId);
  return result;
};

export const CourseServices = {
  createCourseIntoDb,
  getCourseFromDb,
  getSingleCourseFromDb
};
