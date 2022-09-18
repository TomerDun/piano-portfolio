import pianoImg from '../images/piano.png'
import { connectApi, sendEmail } from '../api/emailApi';

const Hero = () => {

    async function useApi() {
        const res = await sendEmail();
        console.log(res);
    }

    return (
        <div className="mt-2">
            <div className='relative'>
                <img src={pianoImg} className='block w-full max-w-full object-cover aspect-square object-[30%] sm:aspect-video sm:object-left lg:aspect-auto lg:max-h-[550px] lg:object-fill'></img>

                <div id='slider' className='bg-main-500/70 p-2 sm:px-6 absolute bottom-0 w-full text-center lg:right-0 lg:w-[40%] lg:text-left lg:bg-main-500/80 lg:min-h-[55%]'>
                    <div id='header' className='text-2xl sm:text-3xl mb-2 mx-auto max-w-[60%] lg:max-w-full lg:mx-0 lg:mb-6'>
                        <span className='text-sec-500'>Music Solutions </span>
                        For Every Need
                    </div>

                    <p className='text-sm text-gray-300'>
                        Personally crafted music solution to fit every need from production to background music
                    </p>                    
                        <a href='#contact' className='inline-block mt-4 bg-sec-300/80 btn hover:bg-sec-300 rounded-lg px-5 py-1 text-2xl w-full text-center lg:w-auto lg:mt-14 lg:mb-3'>Contact</a>                    

                </div>
            </div>

        </div>
    )
}

export default Hero;