import DefaultLayout from '~/layouts/default'
import { IconClockHour3 } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconExternalLink } from '@tabler/icons-react'
import { IconCalendar } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const ProjectDetail = () => {
  return (
    <section className='w-full max-w-5xl mx-auto py-12 space-y-8'>
      <Image src='/static/images/project/tereby/preview.png' width={1024} height={728} alt='Project Preview' className='rounded-xl' />
        <div className="flex items-center space-x-8 font-medium mb-4">
          <a href="#" className='underline'>#website</a>
          <div className="flex items-center">
            <IconCalendar className='mr-1.5' />
            Feb 24, 2022
          </div>
          <div className="flex items-center">
            <IconClockHour3 className='mr-1.5' />
            6 min read
          </div>
          <a href='#' target='_blank' className="flex items-center underline">
            <IconBrandGithub className='mr-1.5' />
            Repository
          </a>
          <a href='#' target='_blank' className="flex items-center underline">
            <IconExternalLink className='mr-1.5' />
            Live site
          </a>
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold leading-tight">Tereby</h1>
          <p className="text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">
          Praesent porttitor, urna sollicitudin auctor maximus, nisl mi hendrerit tellus, at aliquet leo sapien non quam. Ut quis vulputate diam, ac molestie augue. Duis placerat urna non magna placerat, sed interdum diam tempor. Maecenas pharetra rutrum mauris ac ultricies. Praesent non auctor tortor. Aenean eu commodo erat. Quisque a urna purus. Ut ultricies pellentesque felis eu ornare. Etiam ut ante eleifend metus laoreet bibendum ut ut sapien. Morbi placerat erat in erat hendrerit, ac vulputate est egestas. Aenean sit amet porta nunc. Vestibulum turpis ex, hendrerit eu auctor ac, maximus in massa. Mauris lobortis libero mauris, quis tincidunt lacus congue non. In ipsum nibh, lobortis id ex vitae, condimentum luctus ante. Sed malesuada sollicitudin enim quis euismod. Suspendisse mollis ornare libero nec interdum.
          </p>
          <p className="text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">
          Suspendisse potenti. Curabitur quis semper nunc. Phasellus urna nibh, fermentum sed dui eu, vulputate pharetra augue. Aliquam sed felis sed nibh pharetra dapibus. In sollicitudin a est vel dapibus. Aenean aliquet pulvinar tincidunt. Pellentesque congue risus tortor. Fusce lacinia luctus viverra.
          </p>
        </div>
    </section>
  )
}


ProjectDetail.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
export default ProjectDetail