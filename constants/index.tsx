export const workTypes = {
  ALL: "All",
  FEATURED: "Featured",
  SE: "Software Engineering",
  DS: "Data Science",
};

export interface Project {
  title: string;
  url: string;
  tags: Array<string>;
  description: string;
  textColor: string;
  tileImagePath?: string;
  maintainAspectRatio?: boolean;
  type: Array<string>;
  organization: string;
}

export interface Education {
  institute: string;
  url?: string;
  title: string;
  duration: string;
  body1?: string;
  body2?: string;
}

export interface Experience {
  organization: string;
  url?: string;
  positions: Array<{
    title: string;
    duration: string;
    body?: string;
  }>;
}

export interface Skills {
  languages: string[];
  frameworks_and_libraries: string[];
  databases: string[];
  misc: string[];
  ui_ux: string[];
}

export interface Interest {
  title: string;
}
export interface Resume {
  download_url: string;
  education: Education[];
  experience: Experience[];
  skills: Skills;
  interests: Interest[];
  awards: string[];
}
