import DefaultLayout from '~/layouts/default'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getMapProjectsMeta, getProjectCategories, getLatestProjectsMeta } from '~/lib/projects'
import Head from 'next/head'

export async function getStaticProps() {
  const latestProjects = getLatestProjectsMeta()
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
    <>
      <Head>
        <title>Projects | RSurya99</title>
      </Head>
      <section className='w-full max-w-screen-xl mx-auto py-12 space-y-8'>
        <div className="space-y-1.5">
          <h1 className="text-5xl font-semibold leading-tight">Projects</h1>
          <p className="text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">List of projects that I am proud of.</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold leading-tight">Latest</h2>
          <div className="grid grid-cols-3 gap-8">
            {latestProjects.map((project: any) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="mb-2 bg-primary dark:bg-zinc-200 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
                <div className="inline-block p-2 rounded-full bg-zinc-300 dark:bg-zinc-700">
                  <Image src={project.logo} width={32} height={32} alt={project.title + ' Project'} />
                </div>
                <h4 className="text-2xl font-semibold text-white dark:text-primary leading-tight">{project.title}</h4>
                <p className="text-zinc-200 dark:text-primary-300 tracking-wide leading-relaxed">{project.excerpt}</p>
                <div className="pt-6 flex items-center justify-between space-x-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag:string) => (
                      <div key={tag} className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary-300 dark:text-zinc-200">{tag}</div>
                    ))}
                  </div>
                  <div className="flex space-x-2 text-white dark:text-primary">
                    <div><IconLink /></div>
                    <div><IconBrandGithub /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {categories.map((el: string) => (
        <div key={el} className="space-y-6">
          <h2 className="text-4xl font-semibold leading-tight">{el}</h2>
          <div className="grid grid-cols-3 gap-8">
            {projects[el].map((project: any) => (
              <Link href={`/projects/${project.slug}`} key={el} className="mb-2 bg-primary dark:bg-zinc-200 p-6 space-y-2 rounded-xl hover:-translate-y-2.5 transition duration-500 cursor-pointer">
                <div className="inline-block p-2 rounded-full bg-zinc-300 dark:bg-zinc-700">
                  <Image src={project.logo} width={32} height={32} alt={project.title + ' Project'} />
                </div>
                <h4 className="text-2xl font-semibold text-white dark:text-primary leading-tight">{project.title}</h4>
                <p className="text-zinc-200 dark:text-primary-300 tracking-wide leading-relaxed">{project.excerpt}</p>
                <div className="pt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag:string) => (
                      <div key={tag} className="px-2 py-1 rounded-full bg-white dark:bg-primary text-primary-300 dark:text-zinc-200">{tag}</div>
                    ))}
                  </div>
                  <div className="flex space-x-2 text-white dark:text-primary">
                    <div><IconLink /></div>
                    <div><IconBrandGithub /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-end">
            <button className="p-3 flex items-center font-medium hover:bg-zinc-100 hover:dark:bg-zinc-700 rounded-lg transition-colors duration-300">
              View all website projects
              <IconArrowNarrowRight className="ml-2" />
            </button>
          </div>
        </div>
        ))}
      </section>
    </>
  )
}


ProjectsIndex.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default ProjectsIndex