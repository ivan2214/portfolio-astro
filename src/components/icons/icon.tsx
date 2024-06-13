import { type SVGProps } from 'react'

import {
  DeviconJavascript,
  DeviconTypescript,
  DeviconReact,
  DeviconNextjs,
  DeviconVitejs,
  DeviconAstro,
  DeviconTailwindcss,
  DeviconShadcn,
  DeviconExpress,
  DeviconNestjs,
  DeviconPrisma,
  DeviconDocker,
  DeviconGit,
  Fa6BrandsDiscord,
  Fa6BrandsLinkedin,
  Fa6BrandsXTwitter,
  Fa6BrandsGithub,
  MdiGmail,
  PepiconsPencilInternet,
  DeviconVercel,
  DeviconMongodb,
} from '@components/icons/icons-svg'

export const Icons: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  javascript: DeviconJavascript,
  typescript: DeviconTypescript,
  react: DeviconReact,
  nextjs: DeviconNextjs,
  vite: DeviconVitejs,
  astro: DeviconAstro,
  tailwind: DeviconTailwindcss,
  shadcn: DeviconShadcn,
  express: DeviconExpress,
  nestjs: DeviconNestjs,
  docker: DeviconDocker,
  prisma: DeviconPrisma,
  git: DeviconGit,
  mongo: DeviconMongodb,
  vercel: DeviconVercel,

  // ICONS LOGOS
  discord: Fa6BrandsDiscord,
  linkedin: Fa6BrandsLinkedin,
  x: Fa6BrandsXTwitter,
  github: Fa6BrandsGithub,
  gmail: MdiGmail,
  internet: PepiconsPencilInternet,
}

export type IconName =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'nextjs'
  | 'vite'
  | 'astro'
  | 'tailwind'
  | 'shadcn'
  | 'express'
  | 'nestjs'
  | 'docker'
  | 'prisma'
  | 'git'
  | 'discord'
  | 'linkedin'
  | 'x'
  | 'github'
  | 'gmail'
  | 'google'
  | 'internet'
  | 'vercel'
  | 'mongo'
  | 'zustand'

export const Icon = ({
  name,
  className,
}: {
  name: IconName
  className?: HTMLDivElement['className']
}) => {
  const isValidName = name in Icons
  const Icon = isValidName ? Icons[name] : Icons['javascript']

  return <Icon className={className} />
}
