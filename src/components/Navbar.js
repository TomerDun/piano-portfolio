import { AiFillYoutube } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { AJ } from './CustomIcons';

const Navbar = ({setModalOpen}) => {
    return (        
        <div className='bg-main-300'>

            <nav className='flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 sm:p-2'>
                <a href='/' className="text-center sm:text-left block text-3xl text-sec-500">PIANO PLAYLIST</a>
                <div className='flex my-2 sm:my-0 text-center gap-2 sm:w-1/2 justify-evenly'>
                    <NavLink className='link' to='/sheets' >Sheet Music</NavLink>
                    <NavLink className='link' to='/stock-music' >Royalty Free Music</NavLink>
                    <NavLink className='link' to='/portfolio' >Portfolio</NavLink>
                    <NavLink to='/' className='link pr-4'>Home</NavLink>
                </div>

                <div className='flex justify-evenly mt-4 sm:mt-0 sm:gap-3'>
                    <button className='btn bg-sec-300/80 hover:bg-sec-300 rounded-lg px-2 lg:mr-8' onClick={() => setModalOpen(true)}>Contact</button>
                    <a href='https://www.youtube.com/pianoplaylist' target='_blank'><AiFillYoutube className='icon' /></a>
                    <a href='https://audiojungle.net/user/pianoplaylist/portfolio' target='_blank'><AJ className='icon-nosize text-lg' /></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;