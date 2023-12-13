import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="w-screen h-screen text-extrabold flex justify-around">
            <div className="flex flex-col justify-around">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-black">Get a quote</h1>
                    <p className="text-lg">Fill up the form and I will get back to you within 24 hours</p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/phone-contact.png" alt="phone" width={30} height={30} />
                        <p>+91 6281768263</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/email.png" alt="email" width={30} height={30} />
                        <p>kanugurajesh3@gmail.com</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/instagram.png" alt="email" width={30} height={30} />
                        <Link href="https://www.instagram.com/kanugurajesh/">
                            <p>kanugurajesh</p>
                        </Link>
                    </span>
                </div>
                <div className="flex gap-10">
                    <Image src="/assets/blog/icons/linkedin-contact.png" alt="linkedin" width={30} height={30} />
                    <Image src="/assets/blog/icons/x.png" alt="x" width={30} height={30} />
                    <Image src="/assets/blog/icons/github-contact.png" alt="github" width={30} height={30} />
                </div>
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
                <label htmlFor=""></label>
                <input type="email" />
                {/* @ts-ignore */}
                <textarea name="" id="" cols="30" rows="10">
                </textarea>
            </div>
        </div>
    )
}