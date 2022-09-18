const MusicBox = ({ source, itemName, title, userLink, itemLink, delay }) => {
    return (
        <div className="flex flex-col items-center max-w-full" data-aos='fade-up' data-aos-delay={delay}>
            <h1 className="mb-2 text-2xl font-semibold">{title}</h1>

            <div className="">
            <iframe height="300" scrolling="no" frameBorder="no" allow="autoplay" src={source}></iframe>
            <div className="music-box self-start" ><a href={userLink} title="Piano Playlist" target="_blank" className="text-gray-200 no-underline" >Piano Playlist</a> · <a href={itemLink} title="Wars - Action cue" target="_blank" className="text-gray-200 no-underline">{itemName}</a></div>
            </div>
        </div>
    )
}

export default MusicBox;