export const workTypes = {
  ALL: "All",
  FEATURED: "Featured",
  SE: "Software Engineering",
  DS: "Data Science",
};

export interface Project {
  title: string;
  tags: Array<string>;
  description: string;
  textColor: string;
  tileImagePath?: string;
  type: Array<string>;
  organization: string;
}
