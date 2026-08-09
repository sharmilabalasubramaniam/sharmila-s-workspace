export interface SkillGroup {
  category: string;
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    label: 'Comfortable using',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'AI & Data',
    label: 'Comfortable using',
    skills: ['Machine Learning', 'NLP', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    category: 'Web Development',
    label: 'Comfortable using',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Flask'],
  },
  {
    category: 'Tools',
    label: 'Comfortable using',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
];

export const learningSkills: string[] = [
  'LangChain',
  'Deep Learning',
  'FastAPI',
  'Docker',
  'Google Cloud',
];
