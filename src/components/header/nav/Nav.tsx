import NavLink from './navLink/NavLink';
import {motion} from 'framer-motion'
import {menuSlide} from '../anim.js'
import Curve from './curve/Curve';

interface NavProps {
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Work',
		href: '/',
	},
	{
		title: 'About',
		href: '/',
	},
	{
		title: 'Contact',
		href: '/',
	},
];

const Nav = ({setIsActive}: NavProps) => {
	return (
		<motion.div
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
			className='fixed right-0 top-0 h-[100vh] bg-[#292929] text-white z-20'
		>
			<div className='h-[100%] px-[50px] py-[25pxx] md:p-[100px]  flex flex-col justify-around md:justify-between'>
				<div className='flex flex-col gap-[12px] text-[40px] md:text-[50px] '>
					<div className='uppercase border-b border-[#999999] text-[#999999] text-[11px] mb-[40px]'>
						<p className=''>Navigation</p>
					</div>

					{navItems.map((item, index) => {
						return <NavLink key={index} data={{ ...item, index }} setIsActive={setIsActive} />;
					})}
				</div>
				<div className='flex flex-col gap-[12px]'>
					<div className='uppercase border-b border-[#999999] text-[#999999] text-[11px]'>
						<p className=''>Socials</p>
					</div>
					<div className='flex w-full justify-between text-[12px] gap-[40px]'>
						<a href=''>Awwwards</a>
						<a href=''>Instagram</a>
						<a href=''>Dribble</a>
						<a href=''>LinkedIn</a>
					</div>
				</div>
			</div>
			<Curve />
      
		</motion.div>
	);
};
export default Nav;
