import PlayerBox from "./PlayerBox";

const mediaItems = [
    { title: 'Wrapped - video animation', source: 'https://drive.google.com/file/d/19MRQRZ1rS2mmY9MKpCyBFfWUKM6zyZ2d/preview' },
    { title: 'Spring - Scorelief Competition', source: "https://drive.google.com/file/d/1cob8T_NI1HAOUVLVsKRKnJbU-mNijtA1/preview" },
    { title: 'Absolute Minimum - Minimalistic undercue', source: 'https://drive.google.com/file/d/17dL4HkvKjCSAwE8Lm_4eptrhshhmtMhS/preview' },
]

const pianoItems = [
    {title: 'Out Of Reach', source: 'https://drive.google.com/file/d/12ajekd_Hwpj3hj-mWfh4OM_8-bb75T2q/preview'},
    {title: 'Like Someone In Love', source: 'https://drive.google.com/file/d/12t0wAJeh0rMfAD513mWJ-jghHNwpgQ0c/preview'},
    {title: 'Misty', source: 'https://www.youtube.com/embed/9Sgl7SZYvJE'}
]

const Portfolio = () => {
    return (
        <div className="w-[90%] max-w-[1400px] mx-auto mt-10 text-center">
            <h1 className="header">Portfolio</h1>

            <div className="flex flex-wrap justify-center 2xl:justify-between mt-12">
                <PlayerBox delay={300} items={mediaItems} title='Media Compositions'/>
                <PlayerBox delay={400} items={pianoItems} title='Piano'/>                
            </div>
        </div>
    )
}

export default Portfolio;