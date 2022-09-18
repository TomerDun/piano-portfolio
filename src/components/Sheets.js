import { useState } from "react";
import ImageBox from "./ImageBox";
import Modal from "./Modal";

const frames = [
    { title: 'Doctor Strange - The Hands Dealt', img: require('../images/sheets/strange.png'), videoLink: 'https://youtu.be/D3q2EJpwIDs', downloadLink: 'https://drive.google.com/file/d/1_6pX-8ZWjqS7OeY_g_bq6vaJNAp0TJuK/view?usp=sharing' },    
    { title: 'The Batman', img: require('../images/sheets/batman.png'), videoLink: 'https://youtu.be/_5qI6TveX9Q', downloadLink: 'https://drive.google.com/file/d/1ns10CtJHrjJycwyotQ2BITV7Me01nN7F/view?usp=sharing' },    
    { title: 'Night In Tunisia - Charlie Parker Solo transcription', img: require('../images/sheets/tunisia.png'), videoLink: 'https://youtu.be/veM23opX-9E', downloadLink: 'https://drive.google.com/file/d/1xZXZQoz9dz2SSyNI2u9c1EduSICuPtlr/view?usp=sharing' },    
    { title: 'Smokin out the window', img: require('../images/sheets/smokin.png'), videoLink: 'https://youtu.be/rdTe8HIEurk', downloadLink: 'https://drive.google.com/file/d/1vCPqPdYGLRFJQ_isYQUMeg3E2j0yaPvP/view?usp=sharing' },    
    { title: 'Curb You Enthusiasm', img: require('../images/sheets/curb.png'), videoLink: 'https://youtu.be/L5JniFelrY4', downloadLink: 'https://drive.google.com/file/d/1VtCG90l6X3qYWpFyITUAcotqGn5S1A_t/view?usp=sharing' },    
    { title: 'Fargo Theme', img: require('../images/sheets/fargo.png'), videoLink: 'https://youtu.be/frCK8IZkoU4', downloadLink: 'https://drive.google.com/file/d/1DF6WzH2OjkJdEUp4UUVoh5esaPcvAdbJ/view?usp=sharing' },    
    { title: 'There Will Never Be Another You - Chet Baker Solo Transcription', img: require('../images/sheets/there_will.png'), videoLink: 'https://youtu.be/XieMMDKZ6oE', downloadLink: 'https://drive.google.com/file/d/1vfoVjjHlLx6vYv7Pnlz4PQMwQUAzvTJL/view?usp=sharing' },    
    { title: 'Minecraft OST - Wet Hands', img: require('../images/sheets/wet.png'), videoLink: 'https://youtu.be/BF-2oe0M0Zk', downloadLink: 'https://drive.google.com/file/d/1ROfLrAslsyWOHD_FcMziorFX9d79LgjY/view?usp=sharing' },    
    { title: 'I Will Always Think Of You - Bojack Horseman', img: require('../images/sheets/iwill.png'), videoLink: 'https://youtu.be/j1Vxar_Lva8', downloadLink: 'https://drive.google.com/file/d/17PlLjLx8EybmWZwhc_rzQDFjCDDV5Hmr/view?usp=sharing' },    
    { title: 'I Fall In Love Too Easily - Chet Baker Transcription', img: require('../images/sheets/ifall.png'), videoLink: 'https://youtu.be/BT-kzK5clTI', downloadLink: 'https://drive.google.com/file/d/12Hw2vx8TtRr5HQmELhI393mJE3btPwuT/view?usp=sharing' },    
    { title: "Youv'e Got A Friend In Me", img: require('../images/sheets/friend.png'), videoLink: 'https://youtu.be/7ZddctXa9GY', downloadLink: 'https://drive.google.com/file/d/1WKAsGWysgn0CG_ZA34eHj3pY24T70V1u/view?usp=sharing' },    
    { title: 'Futurama Theme', img: require('../images/sheets/futurama.png'), videoLink: 'https://youtu.be/4mmH86j04zA', downloadLink: 'https://drive.google.com/file/d/1DMqBHxKUWTjFteKk94hMnqGEGjLmO17J/view?usp=sharing' },    
    { title: 'Giant Steps For Solo Piano', img: require('../images/sheets/giant.png'), videoLink: 'https://youtu.be/Lujl_cjwkaI', downloadLink: 'https://drive.google.com/file/d/1wKj2PgE-tJnpX_qXU93A-crnn2gUpM1V/view?usp=sharing' },    
    { title: 'Mii Channel Theme', img: require('../images/sheets/mii.png'), videoLink: 'https://youtu.be/aphfAFzwNO8', downloadLink: 'https://drive.google.com/file/d/1cQ2KgLOSTXRIUzi8S7DcVLxdgI_VqhcB/view?usp=sharing' },    
]

const Sheets = ({modalOpen, setModalOpen}) => {
    
   

    return (
        <>
        <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
        <div className="w-[90%] mx-auto mt-10">
            <h1 className="header">Sheet Music Library</h1>
            <div className="flex w-[90%] lg:w-full mx-auto gap-4 py-14 flex-wrap justify-center lg:justify-start">
                {frames.map((frame, i) => <ImageBox key={i} title={frame.title} img={frame.img} videoLink={frame.videoLink} downloadLink={frame.downloadLink} />)}
            </div>

            <button onClick={() => setModalOpen(true)} className="bg-sec-500 py-1 px-4 text-lg font-semibold rounded-lg mb-7">Private Piano Lessons</button>
        </div>
        </>

    )
}

export default Sheets;
