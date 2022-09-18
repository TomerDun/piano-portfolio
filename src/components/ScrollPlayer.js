import { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort, BsDot } from 'react-icons/bs'

const ScrollPlayer = ({ items , title, delay = 200, animate = true }) => {
    const [selected, setSelected] = useState(0);

    function next() {
        if (selected < (items.length - 1)) {
            setSelected(prevSelected => prevSelected + 1);
        }
        else {
            setSelected(0);
        }
    }

    function prev() {
        if (selected > 0) {
            setSelected(prevSelected => prevSelected - 1);
        }
        else {
            setSelected(items.length - 1)
        }
    }

    return (
        <div className="w-96 max-w-full mb-10" data-aos={animate ? 'fade-up' : null} data-aos-delay={delay}>
            <h1 className="text-2xl font-semibold mb-4 text-center">{title}</h1>
            <div className="bg-main-300 pt-5">
                <div className="mb-6 bg-gray-300 relative">
                    <iframe src={items[selected].source} width='100%' className="sm:py-6" allow="autoplay" allowFullScreen></iframe>            
                    <div className="absolute bottom-1 right-4">                    
                        {items[selected].tags.map((tag, i) => <div key={i} className="ml-1 inline-block bg-main-300/70 px-1 text-info text-xs font-bold rounded-full">{tag}</div>)}                        
                    </div>
                    
                </div>

                <div className="px-5 mb-8">
                    <div className="flex justify-between mb-4">
                        <h1 className="text-lg font-semibold">{items[selected].title}</h1>
                        <h3 className="text-gray-400 mr-6">{items[selected].price}</h3>
                    </div>
                    <p className="mb-10 text-gray-400 max-w-[60%]">{items[selected].description}</p>

                    <a className="font-medium text-info border-solid border-info border-2 p-2 hover:bg-info hover:text-white btn block text-center sm:inline" href={items[selected].link}>Buy on AudioJungle</a>

                </div>

                <div className="flex justify-center pb-3">
                    <button onClick={prev} className="icon"><BsArrowLeftShort /></button>
                    {items.map((item, i) => <button onClick={() => setSelected(i)} id={i} className={(selected === i) ? 'text-2xl text-white' : 'duration-300 text-2xl text-gray-500 hover:text-white'} key={i}><BsDot /></button>)}
                    <button onClick={next} className="icon"><BsArrowRightShort /></button>

                </div>
            </div>
        </div>
    )
}

export default ScrollPlayer;