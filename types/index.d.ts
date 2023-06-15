export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export type SiteContent = {
  profile: string;
  map: string;
  weather: string;
  contact: string;
};

export type GAEvent = {
  category: string;
  action: string;
  label: string;
};
