import { useState } from 'react';
import { AiOutlineDownload, AiOutlineYoutube } from 'react-icons/ai';

const infoClass = 'p-2 bg-black/70 absolute bottom-0 left-0 w-full overflow-hidden transition-all duration-500';

const ImageBox = ({ title, downloadLink, videoLink, img }) => {

    const [hover, setHover] = useState(false);

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-full max-w-sm relative m-0 hover:transform hover:scale-125 hover:mx-2 hover:z-10 transition-all duration-300'>
            {/* <img className='min-h-[280px] h-full w-full object-cover sm:object-fill' src={img} alt={title + ' sheet music'} />             */}
            <img className='aspect-square sm:aspect-auto sm:h-full sm:min-h-[280px] w-full object-fill sm:object-fill' src={img} alt={title + ' sheet music'} />            

            <div className={infoClass}>
                <h4>{title}</h4>
                <div hidden={!hover}>
                    <a target='_blank' href={downloadLink} className='icon mx-2'><AiOutlineDownload /></a>
                    <a target='_blank' href={videoLink} className='icon'><AiOutlineYoutube /></a>
                </div>

            </div>
        </div>
    )
}

export default ImageBox;