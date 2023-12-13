import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="w-screen h-screen text-extrabold flex justify-around items-center">
            <div className="flex flex-col justify-around gap-40 h-3/4">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-black">Get a quote</h1>
                    <p className="text-lg">Fill up the form and I will get back to you within 24 hours</p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/phone-contact.png" className="hover:scale-110 transition ease-in-out" alt="phone" width={25} height={25} />
                        <p>+91 6281768263</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/email.png" className="hover:scale-110 transition ease-in-out" alt="email" width={25} height={25} />
                        <p>kanugurajesh3@gmail.com</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/instagram.png" className="hover:scale-110 transition ease-in-out" alt="email" width={25} height={25} />
                        <Link href="https://www.instagram.com/kanugurajesh/">
                            <p>kanugurajesh</p>
                        </Link>
                    </span>
                </div>
                <div className="flex gap-10">
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/linkedin-contact.png" className="hover:scale-110 transition ease-in-out" alt="linkedin" width={30} height={30} />
                    </Link>
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/twitter.png" className="hover:scale-110 transition ease-in-out" alt="X" width={30} height={30} />
                    </Link>
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/instagram.png" className="hover:scale-110 transition ease-in-out" alt="github" width={30} height={30} />
                    </Link>
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/github-contact.png" className="hover:scale-110 transition ease-in-out" alt="github" width={30} height={30} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-10 h-3/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="text-input" className="font-bold">Name:</label>
                    <input type="text" id="text-input" className="border border-black border-2 h-10 rounded-md p-2 font-normal w-80" placeholder="Enter the name"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="font-bold">Email:</label>
                    <input type="email" id="email-input" className="border border-black border-2 h-10 rounded-md p-2 font-normal w-80" placeholder="Enter the email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="textarea-input" className="font-bold">Message:</label>
                    {/* @ts-ignore */}
                    <textarea name="" placeholder="Enter the message" id="textarea-input" cols="30" rows="10" className="border border-black border-2 h-40 rounded-md p-2 font-normal w-80">
                    </textarea>
                </div>
                <div>
                    <button className="w-full font-bold bg-black hover:bg-white hover:text-black text-white px-5 py-3 rounded-md border border-2 transition ease-in-out">Send Message</button>
                </div>
            </div>
        </div>
    )
}