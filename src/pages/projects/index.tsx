import DefaultLayout from '~/layouts/default'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getMapProjectsMeta, getProjectCategories, getLatestProjectsMeta } from '~/lib/projects'
import BaseLogo from '~/components/logo/Base'
import { uuid } from '~/utils/uuid'

export async function getStaticProps() {
  const latestProjects = getLatestProjectsMeta(3)
  const projects = getMapProjectsMeta()
  const categories = getProjectCategories()

  return {
    props: {
      latestProjects,
      projects,
      categories
    }
  }
}

const ProjectsIndex = ({ latestProjects, projects, categories }: any) => {
  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
      <div className="space-y-1.5">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Projects</h1>
        <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">List of projects that I am proud of.</p>
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Latest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {latestProjects.map((project: any) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="mb-2 flex flex-col justify-between bg-primary dark:bg-zinc-200 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
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
          ))}
        </div>
      </div>
      {categories.map((el: string) => (
      <div key={uuid()} className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">{el}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {projects[el].map((project: any) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="mb-2 flex flex-col justify-between  bg-primary dark:bg-zinc-200 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
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
          ))}
        </div>
      </div>
      ))}
    </section>
  )
}


ProjectsIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default ProjectsIndex