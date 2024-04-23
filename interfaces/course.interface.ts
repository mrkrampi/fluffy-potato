export type  CourseInterface = {
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
}
