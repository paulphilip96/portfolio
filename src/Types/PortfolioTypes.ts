export type Experience = {
  date: string,
  thumbnail: string,
  title: string,
  company: string,
  location: string,
  jobType: string,
  techStack: string[]
}

export type Stats = {
  value: number,
  duration: number,
  label: string,
  description?: string
}

export type Extra = {
  isExternal: boolean,
  path: string,
  src: string,
  alt: string,
  title: string,
  description: string
}