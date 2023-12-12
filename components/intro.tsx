import { CMS_NAME, Blog_Name } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {Blog_Name}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Know <a href="https://rajeshportfolio.me" className='font-bold underline underline-offset-6' target='_blank'>my</a> thoughts on <b>web</b>, <b>web3</b>, <b>Azure</b> and <b>python</b> development.
      </h4>
    </section>
  )
}

export default Intro
