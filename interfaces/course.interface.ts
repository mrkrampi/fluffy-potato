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
}

export interface CourseProgram {
  id: number;
  title: string;
  lessons: Array<string>;
  objective: string;
}
