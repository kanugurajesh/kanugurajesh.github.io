import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="w-screen h-screen text-extrabold flex justify-around font-black">
            <div className="flex flex-col justify-around">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-black">Get a quote</h1>
                    <p className="text-lg">Fill up the form and I will get back to you within 24 hours</p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/phone-contact.png" alt="phone" width={25} height={25} />
                        <p>+91 6281768263</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/email.png" alt="email" width={25} height={25} />
                        <p>kanugurajesh3@gmail.com</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/instagram.png" alt="email" width={25} height={25} />
                        <Link href="https://www.instagram.com/kanugurajesh/">
                            <p>kanugurajesh</p>
                        </Link>
                    </span>
                </div>
                <div className="flex gap-10">
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/linkedin-contact.png" alt="linkedin" width={30} height={30} />
                    </Link>
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/x.png" alt="X" width={30} height={30} />
                    </Link>
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/github-contact.png" alt="github" width={30} height={30} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-10">
                <div className="flex flex-col gap-2">
                    <label htmlFor="text-input">Name:</label>
                    <input type="text" id="text-input" className="border border-black border-2 h-10 rounded-md p-2 font-normal" placeholder="Enter the name"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email-input">Email:</label>
                    <input type="email" id="email-input" className="border border-black border-2 h-10 rounded-md p-2 font-normal" placeholder="Enter the email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="textarea-input">Message:</label>
                    {/* @ts-ignore */}
                    <textarea name="" placeholder="Enter the message" id="textarea-input" cols="30" rows="10" className="border border-black border-2 h-40 rounded-md p-2 font-normal">
                    </textarea>
                </div>
            </div>
        </div>
    )
}