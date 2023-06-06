import DefaultLayout from '~/layouts/default'
import React from 'react'
import { getMapProjectsMeta, getProjectCategories, getLatestProjectsMeta } from '~/lib/projects'
import { uuid } from '~/utils/uuid'
import ProjectCard from '~/components/base/ProjectCard'
import Head from 'next/head'
import type { Project, Projects } from '~/types/project'

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

type Props = {
  latestProjects: Project[],
  projects: Projects,
  categories: string[]
}

const ProjectsIndex = ({ latestProjects, projects, categories }: Props) => {
  return (
    <>
      <Head>
        <title>Projects | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className="space-y-1.5">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Projects</h1>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">List of projects that I am proud of.</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Latest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {latestProjects.map((project: Project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
        {categories.map((el: string) => (
        <div key={uuid()} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">{el}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {projects[el].map((project: Project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
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