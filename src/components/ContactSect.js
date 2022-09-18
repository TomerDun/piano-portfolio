import { useState } from "react";
import { sendEmail } from "../api/emailApi";

const ContactSect = () => {

    const [msg, setMsg] = useState('')
    const [sender, setSender] = useState('')
    const [infoMsg, setInfoMsg] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        const emailMsg = `Message from sender: <${sender}>:\n\n${msg}`;
        await sendEmail('thepianoplaylist.com contact message', emailMsg);
        console.log('<DEV> contact finished');
        setSender('')
        setMsg('')
        setInfoMsg("Message sent, We'll be in touch!")
    }

    return (
        <div id='contact' className="w-[90%] mx-auto mt-40 max-w-4xl">
            <h1 className="text-center text-3xl mb-8">Let's have a chat!</h1>
            <div id='contact-main' className="bg-main-300/60 px-6 pt-6 pb-2">
                <p className="text-gray-400">Contact me to book a session, talk about a project or book a one on one lesson. Leave a message and i'll get back to you via email.</p>

                <form onSubmit={(e) => handleSubmit(e)} className="mt-8 flex flex-col">



                    <div id='email' className="">
                        <h4 className="text-sm mb-1">Your Email</h4>
                        <input value={sender} onChange={(e) => setSender(e.target.value)} className="text-black input p-1 mb-4 w-full lg:w-auto lg:min-w-[220px]" />
                    </div>

                    <div id='messge' className="lg:w-[70%]">
                        <h4 className="text-sm mb-1">Your message</h4>
                        <textarea className="text-black w-full min-h-[6rem] mb-4 p-1 input" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    </div>


                    <input disabled={msg == '' || sender == ''} type='submit' className="btn w-[95%] mx-auto sm:w-fit sm:px-14 sm:mx-0 mt-8 bg-sec-300/80 hover:bg-sec-300 rounded-lg py-2 text-xl disabled:bg-sec-300/30 disabled:text-gray-500 disabled:cursor-default" value='Send' />

                </form>

                <h3 className="mt-4 text font-light text-center text-gray-200">{infoMsg}</h3>

            </div>
        </div>
    )
}

export default ContactSect;