import type { IconName } from "@/components/icons/icon"

export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

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
  network: IconName
  link: string
}[]

export interface Project {
  id: number
  hrefWeb?:  string
  hrefRepo?: string
  image: string
  alt: string
  heading: string
  type?: string
  tags?: string[]
  description?: string
}
