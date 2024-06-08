export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type Study = {
  title: string
  institution: string
  link: string
  date: string
}

export type Experience = {
  company: string
  location: string
  position: string
  start: string
  end: string
  link?: string
  isPractices?: boolean
  tasks: string[]
}

export type Networks = {
  network: string
  link: string
}[]
