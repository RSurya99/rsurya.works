import DefaultLayout from '~/layouts/default'

export default function Error500() {
  return (
    <>
      <section className='w-full min-h-[70vh] flex flex-col items-center justify-center text-center'>
        <span className="text-[256px] font-semibold">
          500
        </span>
        <h2 className="text-5xl font-semibold mb-3">Something bad just happened..</h2>
        <p className='text-lg text-primary/75 dark:text-slate-50/75 px-40'>We cannot handle your request right now, please wait for a couple of minutes and refresh the page.</p>
      </section>
    </>
  )
}

Error500.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>{page}</DefaultLayout>
)
