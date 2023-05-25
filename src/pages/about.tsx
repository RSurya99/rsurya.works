import React from 'react'
import DefaultLayout from '~/layouts/default'
import Head from 'next/head'

const about = () => {
  return (
    <>
      <Head>
        <title>About | RSurya99 - Rafli Surya Pratama Portfolio</title>
        <meta name="description" content="Rafli Surya Pratama (@RSurya99) Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full max-w-screen-xl mx-auto px-4 py-12 space-y-8'>
        <div className='max-w-5xl space-y-6'>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">About</h1>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Hi there! my name is Rafli Surya Pratama, and I am a Front End Engineer.</p>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">I have always been passionate about technology and design, aiming to create a seamless user experience that not only looks beautiful but also functions flawlessly. I believe that a well-designed interface can have a significant impact on a user&apos;s overall experience and satisfaction with a product.</p>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">I am also an open-source enthusiast, you can see <a href="https://github.com/rsurya99" target='_blank' className='underline text-primary'>list of my project here</a>. Besides of creating an open-source project, I do contribute to other projects. I love how collaboration and knowledge sharing happen through open-source and I am happy to see what I do could eventually feedback to the community and industry.</p>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Outside of programming, I find joy in exploring new topics and ideas through writing. Whether it&apos;s learning about the latest technology trends or diving into a new hobby, I&apos;m always eager to expand my knowledge and gain new perspectives.</p>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Writing helps me to remember important details and to distill complex ideas into digestible pieces of information. Whether I&apos;m coding a new feature or exploring a new subject, I&apos;m always eager to challenge myself and to push beyond my limits. I believe that the pursuit of knowledge and personal growth is a lifelong journey, and I&apos;m excited to see where it takes me next.</p>
          <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">When I&apos;m not coding or learning something new, you can find me playing video games, I find that playing video games is a great way to unwind and challenge myself. I enjoy the social aspect of gaming and connecting with other players.</p>
        </div>
        <hr className='max-w-5xl bg-primary-300' />
        <div className="max-w-5xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Skillset (Programming)</h2>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">Programming Language</h3>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Javascript, Typescript, PHP, Python</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">Markup Language</h3>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">HTML, Markdown</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">Framework</h3>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">JQuery, Vue (and Nuxt), React (and Next), Express.js, Laravel, Django </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">Styling</h3>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">SASS/SCSS, Tailwind CSS, Bootstrap, Vuetify, Ant Design, Material UI, Mantine, Element UI, Uno CSS</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">Build tools</h3>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Webpack, Rollup, Vite</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">Others</h3>
            <p className="text-base sm:text-lg tracking-wide leading-relaxed text-primary-300 dark:text-zinc-200">Git, Linux, SQL, MongoDB, Firebase, Docker, Figma, Storybook</p>
          </div>
        </div>
      </section>
    </>
  )
}

about.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default about