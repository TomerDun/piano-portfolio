import { Link } from "react-router-dom";
import MusicBox from "./MusicBox";

const MusicSect = () => {
    return (
        <div id='music' className="w-[90%] mx-auto mt-40">

            <div className="text-4xl text-center reveal-up" data-aos='fade-up'>
                Music that fits <span className="text-sec-500">your</span> needs
            </div>

            <div className="flex flex-col gap-12 xl:flex-row mt-12 justify-evenly">
                <MusicBox delay={600} source='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1314085657&color=%2300c8a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' title='Corporate Music' itemName='Inspiring Emotional Piano' itemLink='https://soundcloud.com/piano-playlist-820843609/inspiring-emotional-piano' userLink='https://soundcloud.com/piano-playlist-820843609' />
                <MusicBox delay={800} source={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1116371347&color=%2300c8a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'} title='Hip Hop' userLink={'https://soundcloud.com/piano-playlist-820843609'} itemLink={'https://soundcloud.com/piano-playlist-820843609/relaxed-piano-hip-hop-vibes'} itemName='Relaxed Piano Hip Hop' />
                <MusicBox delay={1000} title="Cinematic" source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1150686712&color=%2300c8a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" userLink='https://soundcloud.com/piano-playlist-820843609' itemLink='https://soundcloud.com/piano-playlist-820843609/wars-action-cue' itemName='Wars - Action cue' />
                
            </div>

            <div className="text-center mt-16 xl:ml-24 xl:text-left" data-aos='fade-up'>
                <Link className="text-info text-lg underline font-semibold" to='/stock-music'>Browse Royalty Free Music</Link>
            </div>
            


        </div>
    )
}

export default MusicSect;

// div style



