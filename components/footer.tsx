import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { LinkedIn_URL } from '../lib/constants'
import { GitHub_URL } from '../lib/constants'
import styles from '../styles/footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Crafted by Rajesh
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 gap-5">
            <a
              href={LinkedIn_URL}
            >
              <Image src="/assets/blog/icons/linkedin.png" alt="linkedin" width={50} height={50} />
            </a>
            <a
              href={GitHub_URL}
            >
              <Image src="/assets/blog/icons/github.png" alt="github" width={50} height={50} />
            </a>
            <a
              href={LinkedIn_URL}
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors rounded-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
