export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
  imageUrl?: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiencyLevel: number;
  iconClass: string;
}
