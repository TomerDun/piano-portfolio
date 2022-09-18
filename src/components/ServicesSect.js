import { Link } from "react-router-dom";
import PlayerBox from "./PlayerBox";

const mediaItems = [
    { title: 'Wrapped - video animation', source: 'https://drive.google.com/file/d/19MRQRZ1rS2mmY9MKpCyBFfWUKM6zyZ2d/preview' },
    { title: 'Spring - Scorelief Competition', source: "https://drive.google.com/file/d/1cob8T_NI1HAOUVLVsKRKnJbU-mNijtA1/preview" },
    { title: 'Absolute Minimum - Minimalistic Cue', source: 'https://drive.google.com/file/d/17dL4HkvKjCSAwE8Lm_4eptrhshhmtMhS/preview' },
]

const pianoItems = [
    {title: 'Out Of Reach', source: 'https://drive.google.com/file/d/12ajekd_Hwpj3hj-mWfh4OM_8-bb75T2q/preview'},
    {title: 'Like Someone In Love', source: 'https://drive.google.com/file/d/12t0wAJeh0rMfAD513mWJ-jghHNwpgQ0c/preview'},
    {title: 'Misty', source: 'https://www.youtube.com/embed/9Sgl7SZYvJE'}
]

const ServicesSect = () => {
    return (
        <div className="text-center mt-60 mx-auto w-[90%] lg:w-full ">
            <h1 className="text-4xl mb-16" data-aos='fade-up'>The <span className="text-sec-500">power</span> of music for you project</h1>

            <div className="flex flex-col lg:flex-row justify-evenly sm:flex-grow">
               <PlayerBox title='Media Coposition' items={mediaItems} delay={600}/> 
               <PlayerBox title='Session Pianist' items={pianoItems} delay={800}/> 
            </div>

            <div className="text-center mt-16 xl:ml-24 xl:text-left" data-aos='fade-up'>
                <Link className="text-info text-lg underline font-semibold" to='/portfolio'>See Portfolio</Link>
            </div>

        </div>
    )
}

export default ServicesSect;