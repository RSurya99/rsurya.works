import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BaseLogo from '../logo/Base'
import { IconLink, IconBrandGithub } from '@tabler/icons-react'

const ProjectCard = ({ project }: any) => {
  return (
    <Link href={`/projects/${project.slug}`} className="mb-2 flex flex-col justify-between  bg-primary dark:bg-zinc-200 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
      <div className="inline-block w-fit p-2 rounded-full bg-zinc-300 dark:bg-zinc-700">
          {project.logo ? 
          <Image src={project.logo} width={32} height={32} alt={project.title + ' Project'} />
          :
          <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-primary border-8 border-primary dark:border-zinc-50"></div>
          }
      </div>
      <h4 className="text-2xl font-semibold text-white dark:text-primary leading-tight">{project.title}</h4>
      <p className="text-zinc-200 dark:text-primary-300 tracking-wide leading-relaxed">{project.excerpt}</p>
      <div className="pt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags && project.tags.map((tag:string) => (
            <div key={tag} className="p-1.5 rounded-full bg-white dark:bg-primary text-primary-300 dark:text-zinc-200">
              <BaseLogo componentName={tag} className='w-6 h-6' />
            </div>
          ))}
        </div>
        <div className="mb-1 flex space-x-2 text-white dark:text-primary self-end">
          <div><IconLink /></div>
          <div><IconBrandGithub /></div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard