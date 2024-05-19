import { Event, WithContext } from 'schema-dts';

export interface CourseInterface {
  id: number;
  name: string;
  level: string;
  duration: string;
  countOfModules?: number;
  previewImage?: string;
  slug: string;
  overview: Array<string>;
  goals: Array<string>;
  overviewImage: string;
  courseProgram: Array<CourseProgram>;
  courseTitle: string;
  courseDescription: string;
  microdata: WithContext<Event>;
}

export interface CourseProgram {
  id: number;
  title: string;
  lessons: Array<string>;
  objective: string;
}
