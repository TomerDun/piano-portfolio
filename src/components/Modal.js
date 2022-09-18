import { useState } from 'react';
import reactDom from 'react-dom';
import { sendEmail } from '../api/emailApi';


const Modal = ({ isOpen, handleClose }) => {

    const [sender, setSender] = useState('');
    const [msg, setMsg] = useState('');
    const [infoMsg, setInfoMsg] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('YOYOYO');
        const emailMsg = `Message from sender: <${sender}>:\n\n${msg}`;
        await sendEmail('thepianoplaylist.com contact message', emailMsg);
        console.log('<DEV> contact finished');
        setSender('')
        setMsg('')
        setInfoMsg("Message sent, We'll be in touch!")
    }

    if (!isOpen) {
        return null;
    }
    return reactDom.createPortal(
        <div className='bg-black/50 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center' onClick={handleClose}>
            <div onClick={e => e.stopPropagation()} className='fixed flex flex-col max-w-[90%] bg-main-300/80 border-gray-800 border rounded-md p-3 pop-in'>
                <h1 className='text-xl mb-6'>Contact me to book a private lesson, work together on a project or any other reason!</h1>
                <form  onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-[95%] mx-auto'>
                    <h4 className='text-gray-400 text-sm'>Your email</h4>
                    <input required className='input p-1 text-black w-full' type="email" value={sender} onChange={e => setSender(e.target.value)}/>

                    <h4 className='text-gray-400 text-sm mt-6'>Your message</h4>
                    <textarea required className='input p-1 text-black' type="text-area" value={msg} onChange={e => setMsg(e.target.value)}/>

                    {infoMsg && <p className='mt-4 text-info'>{infoMsg}</p>}

                    <input className='bg-sec-300 max-w-fit px-6 py-1 text-lg mt-10 rounded-lg cursor-pointer' type="submit" />
                    <button onClick={handleClose} className='absolute bottom-1 right-2 bg-gray-500 px-1 rounded-md border border-gray-400'>X</button>
                </form>

            </div>
        </div>
        , document.getElementById('portal')
    )
}

export default Modal;