import Link from 'next/link'
import { Blog_Name } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        {Blog_Name}
      </Link>
      .
    </h2>
  )
}

export default Header
