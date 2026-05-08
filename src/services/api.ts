import axios from 'axios';
import { Project, Skill } from '../types';

const API_BASE = 'http://localhost:8080/api';

export const api = {
  getProjects: () => axios.get<Project[]>(`${API_BASE}/projects`).then(r => r.data),
  getFeatured: () => axios.get<Project[]>(`${API_BASE}/projects/featured`).then(r => r.data),
  getSkills: () => axios.get<Skill[]>(`${API_BASE}/skills`).then(r => r.data),
};
