import Image from "next/image"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"
import { useState } from "react"

export default function Contact() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    // create a function to validate the email
    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    // create a function to validate the name
    const validateName = (name: string) => {
        const re = /^[a-zA-Z ]{2,30}$/
        return re.test(name)
    }

    // create a function to validate the message
    const validateMessage = (message: string) => {
        const re = /^[a-zA-Z ]{2,30}$/
        return re.test(message)
    }

    // create a function to validate the form

    const validateForm = () => {
        if (!validateName(name)) {
            toast.error("Please enter the valid name")
            return false
        }
        if (!validateEmail(email)) {
            toast.error("Please enter the valid email")
            return false
        }
        if (!validateMessage(message)) {
            toast.error("Please enter the valid message")
            return false
        }
        return true
    }

    // create a function to handle the submit
    const handleSubmit = () => {
        if (validateForm()) {
            toast.success("Your message has been sent successfully")
        }
    }

    return (
        <div className="w-screen h-screen text-extrabold flex justify-around items-center">
            <Toaster />
            <div className="flex flex-col justify-around gap-40 h-3/4">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-black">Contact us</h1>
                    <p className="text-lg">Fill up the form and I will get back to you within 24 hours</p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/phone-contact.png" className="hover:scale-110 transition ease-in-out" alt="phone" width={25} height={25} />
                        <p>+91 6281768263</p>
                    </span>
                    <span className="flex gap-5 align-center">
                        <Image src="/assets/blog/icons/gmail.png" className="hover:scale-110 transition ease-in-out" alt="email" width={25} height={25} />
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
                    <Link href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/">
                        <Image src="/assets/blog/icons/linkedin-contact.png" className="hover:scale-110 transition ease-in-out" alt="linkedin" width={35} height={35} />
                    </Link>
                    <Link href="https://twitter.com/exploringengin1">
                        <Image src="/assets/blog/icons/twitter.png" className="hover:scale-110 transition ease-in-out" alt="X" width={35} height={35} />
                    </Link>
                    <Link href="https://www.instagram.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/instagram-contact.png" className="hover:scale-110 transition ease-in-out" alt="github" width={35} height={35} />
                    </Link>
                    <Link href="https://github.com/kanugurajesh/">
                        <Image src="/assets/blog/icons/github-contact.png" className="hover:scale-110 transition ease-in-out" alt="github" width={35} height={35} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-7 h-3/4">
                <div className="flex justify-center">
                    <Image src="/assets/blog/icons/customer-service.png" className="hover:scale-110 transition ease-in-out mb-2 mt-10" alt="contact" width={70} height={80} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="text-input" className="font-bold">Name:</label>
                    <input type="text" id="text-input" className="border outline-0 border-1 h-10 rounded-md p-2 font-normal w-80 focus:border-blue-500 focus:border-2" placeholder="Enter the name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="font-bold">Email:</label>
                    <input type="email" id="email-input" className="border outline-0 border-1 h-10 rounded-md p-2 font-normal w-80 focus:border-blue-500 focus:border-2" placeholder="Enter the email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="textarea-input" className="font-bold">Message:</label>
                    {/* @ts-ignore */}
                    <textarea name="" placeholder="Enter the message" id="textarea-input" cols="30" rows="10" className="border outline-0 border-1 h-40 rounded-md p-2 font-normal w-80 focus:border-blue-500 focus:border-2" value={message} onChange={(e) => {
                        setMessage(e.target.value)
                    }}>
                    </textarea>
                </div>
                <div>
                    {/* @ts-ignore */}
                    <button className="w-full font-bold bg-black hover:bg-white hover:text-black text-white px-5 py-3 rounded-md border border-2 transition ease-in-out" onClick={()=>handleSubmit()}>Send Message</button>
                </div>
            </div>
        </div>
    )
}