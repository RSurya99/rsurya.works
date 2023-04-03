export default function Error404() {
  return (
    <>
      <section className='w-full min-h-[70vh] flex flex-col items-center justify-center text-center'>
        <span className="text-[256px] font-semibold">
          404
        </span>
        <h2 className="text-5xl font-semibold mb-3">Oops!</h2>
        <p className='text-lg text-primary/75 dark:text-slate-50/75 px-40'>The page you&apos;re looking for either doesn&apos;t exist or you have made a typo!</p>
      </section>
    </>
  )
}
