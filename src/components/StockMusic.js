import ScrollPlayer from "./ScrollPlayer";

const corporateItems = [
    { title: 'Uplifting Corporate Motivation', source: 'https://drive.google.com/file/d/1OYZ3w6yFEs5841UdwHOPm4ScaU8EL_Vh/preview', description: '3 tracks', price: '24$', tags: ['uplifting', 'motivational'], link: 'https://audiojungle.net/item/uplifting-corporate-motivation/35313078' },    
    { title: 'Winter Piano', source: 'https://drive.google.com/file/d/1OS18smxTZxsZ0luyWkQ0oaGLX-6RA4r8/preview', description: '2 Versions', price: '25$', tags: ['piano', 'emotional'], link: 'https://audiojungle.net/item/sad-inspirational-piano/33657834' },    
    { title: 'Excitement In The Air', source: 'https://drive.google.com/file/d/1hjgc2BXaVShzEUsvdNiFnvieQgB1Hum7/preview', description: '2 versions', price: '24$', tags: ['piano', 'emotional'], link: 'https://audiojungle.net/item/inspiring-emotional-piano/34417924' },    
]

const hipHopItems = [
    { title: 'Maximum Action', source: 'https://drive.google.com/file/d/13ZGt5ugEDqPkTi7YxDpXNEbCwL7d36uK/preview', description: '3 Versions', price: '$24', tags: ['action', 'sports'], link: 'https://audiojungle.net/item/sport-action-trap/33969965' },        
    { title: 'Energetic Moments', source: 'https://drive.google.com/file/d/1tdsLicyk_SKK5E0MYFn04qRMCDcxt5Py/preview', description: '1 Version', price: '10$', tags: ['energetic', 'trap'], link: 'https://audiojungle.net/item/high-energy-trap/32305394' },        
    { title: 'Before The Sunset', source: 'https://drive.google.com/file/d/1jsjCK13olr9QCMcTs77iMy6P79-82FV1/preview', description: '1 Version', price: '10$', tags: ['lofi', 'calm'], link: 'https://audiojungle.net/item/relaxed-piano-hip-hop/33507699' },        
    { title: 'The Lofi Vlog', source: 'https://drive.google.com/file/d/1dIwxquPks6affL8MzjmZ952zfKtjhsYF/preview', description: '2 Versions', price: '24$', tags: ['lofi','calm'], link: 'https://audiojungle.net/item/happy-hip-hop-vlog/35464629' },        
    { title: 'Happy And Chiil', source: 'https://drive.google.com/file/d/1ErwpHf1JvnXIDPdbSSAJIVg-1zqg3RzJ/preview', description: '3 Versions', price: '15$', tags: ['lofi', 'calm'], link: 'https://audiojungle.net/item/happy-chill-lofi-hip-hop/32924479' },        
    { title: 'Cinematic Energy', source: 'https://drive.google.com/file/d/18lIe8CrKiGiX3AVopOw5ZKOc3oeRRk1N/preview', description: '3 Versions', price: '24$', tags: ['cinematic', 'energetic'], link: 'https://audiojungle.net/item/cinematic-full-energy-trap/34678086' },            
]


const StockMusic = () => {    

    return (                
        <div className="w-[90%] max-w-7xl mx-auto mt-10">
            <h1 className="header mb-10">Royalty Free Music Library</h1>
            <div className="flex flex-col flex-wrap items-center md:flex-row md:items-start md:justify-evenly">
                <ScrollPlayer items={hipHopItems} title='Hip Hop'/>                                
                <ScrollPlayer delay={300} items={corporateItems} title='Corporate'/>                                
            </div>             
        </div>        
    )
}

export default StockMusic;