import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { LinkedIn_URL } from '../lib/constants'
import { GitHub_URL } from '../lib/constants'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Footer = () => {

  const router = useRouter();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Crafted by Rajesh
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
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
              onClick={() => {
                router.push("/contact")
              }}
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors rounded-sm cursor-pointer"
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
