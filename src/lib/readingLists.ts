const readingLists = [
  {
    title: 'Vercel Open Graph Image Generator',
    link: 'https://vercel.com/templates/next.js/og-image-generation',
    description: 'A template for generating Open Graph images with Next.js.',
    domain: 'vercel.com',
  },
  {
    title: 'How Frontend Frameworks Work',
    link: 'https://mfrachet.github.io/create-frontend-framework/intro.html',
    description: 'A guide to create your own frontend framework.',
    domain: 'mfrachet.github.io',
  },
  {
    title: 'How to Lint Commit Messages with Husky and CommitLint',
    link: 'https://betterprogramming.pub/how-to-lint-commit-messages-with-husky-and-commitlint-b51d20a5e514',
    description: 'A guide to lint commit messages with Husky and CommitLint.',
    domain: 'betterprogramming.pub',
  },
  {
    title: 'How to Create a Laravel Desktop Application',
    link: 'https://laravelarticle.com/laravel-desktop-application',
    description: 'A guide to create a Laravel desktop application.',
    domain: 'laravelarticle.com',
  },
  {
    title: 'Osu! Tournament Map Pools',
    link: 'https://oma.hwc.hr/pools',
    description: 'An archive website for osu! tournament map pools.',
    domain: 'oma.hwc.hr',
  },
  {
    title: 'Leveraging Cache in Nuxt.js',
    link: 'https://dev.to/jacobandrewsky/leveraging-cache-in-vuejs-and-nuxtjs-4b26',
    description: 'A guide to leveraging cache in Nuxt.js.',
    domain: 'dev.to',
  },
  {
    title: 'Vue and Nuxt Performance Optimization Checklist',
    link: 'https://vuestorefront.io/blog/vue-and-nuxt-performance-optimization-checklist',
    description: 'A checklist for Vue and Nuxt performance optimization.',
    domain: 'vuestorefront.io',
  },
]

export const getAllReadingLists = () => readingLists

export const getLatestReadingLists = (length: number) => readingLists.slice(0, length)