import { useState } from "react";

const PlayerBox = ({ items, title, delay=600, animate=true }) => {
    const [selected, setSelected] = useState(0);    

    return (
        <div className="w-full max-w-[650px] mb-10" data-aos={animate ? 'fade-up' : null} data-aos-delay={delay}>
            <h1 className="text-2xl font-semibold mb-4">{title}</h1>
            <div className="bg-main-300 pt-5">                
                <div className="mb-12 bg-gray-300">
                <iframe className="w-full aspect-video" src={items[selected].source} allow="autoplay" allowFullScreen></iframe>
                </div>                

                <ul className="pb-1">
                    {items.map((item, i) => <li key={i} className={(selected === i) ? "player-item selected" : "player-item"} onClick={() => setSelected(i)}>{item.title}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default PlayerBox;