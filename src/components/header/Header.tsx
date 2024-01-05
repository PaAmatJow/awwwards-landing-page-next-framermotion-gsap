'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Nav from './nav/Nav';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../../common/magnetic/Magnetic.jsx';

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const burger = useRef(null);

	const handleClick = () => {
		if (!isActive) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(burger.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				onLeave: () => {
					gsap.to(burger.current, {
						scale: 1,
						duration: 0.25,
						ease: 'power1.out',
					});
				},
				onEnterBack: () => {
					gsap.to(burger.current, {
						scale: 0,
						duration: 0.25,
						ease: 'power1.out',
					});
				},
			},
		});
	}, []);

	return (
		<div className='absolute top-0 z-10 flex text-white p-[35px] justify-between w-full'>
			<div className='flex items-center group cursor-pointer'>
				<p className='group-hover:rotate-[360deg] transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]'>
					©
				</p>

				<div className='flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:pr-[30px]'>
					<p className='relative transiton-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:translate-x-[-100%]'>
						Code by
					</p>
					<p className='relative transiton-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] pl-[0.3em] group-hover:translate-x-[-65px]'>
						Dennis
					</p>
					<p className='absolute left-[120px] pl-[0.3em] transiton-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:translate-x-[-65px]'>
						Snellenberg
					</p>
				</div>
			</div>

			<div className='flex items-center'>
				<Magnetic>
					<div className='flex flex-col relative z-10 p-[15px] cursor-pointer group'>
						<Link href='/'>Work</Link>
						<div className='absolute w-[5px] h-[5px] rounded-[50%] bg-white top-[80%] left-[50%] scale-0 translate-x-[-50%] group-hover:scale-100 group-hover:translate-x-0 transition-all duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] '></div>
					</div>
				</Magnetic>

				<Magnetic>
					<div className='flex flex-col relative z-10 p-[15px] cursor-pointer group'>
						<Link href='/'>About</Link>
						<div className='absolute w-[5px] h-[5px] rounded-[50%] bg-white top-[80%] left-[50%] scale-0 translate-x-[-50%] group-hover:scale-100 group-hover:translate-x-0 transition-all duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] '></div>
					</div>
				</Magnetic>

				<Magnetic>
					<div className='flex flex-col relative z-10 p-[15px] cursor-pointer group'>
						<Link href='/'>Contact</Link>
						<div className='absolute w-[5px] h-[5px] rounded-[50%] bg-white top-[80%] left-[50%] scale-0 translate-x-[-50%] group-hover:scale-100 group-hover:translate-x-0 transition-all duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] '></div>
					</div>
				</Magnetic>
			</div>

			{/* burger button */}
			<div
				ref={burger}
				onClick={handleClick}
				className={`fixed right-0 top-0 m-[20px] z-[9999] w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[50%] bg-[#1C1D20] ${
					isActive ? 'bg-[#455CE9] transition-colors duration-500 ease-out' : ''
				} cursor-pointer flex flex-col items-center justify-center scale-0`}
			>
				<div
					className={`w-[40%] mx-auto h-[1px] bg-white absolute top-[40%] origin-center ${
						isActive ? 'rotate-[45deg] top-[50.3%]' : ''
					} transitiion-transform duration-300`}
				></div>
				<div
					className={`w-[40%] mx-auto h-[1px] bg-white absolute bottom-[40%] origin-center ${
						isActive ? 'rotate-[-45deg] bottom-[50.3%]' : ''
					} transitiion-transform duration-300`}
				></div>
			</div>

			<AnimatePresence mode='wait'>
				{isActive && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.2, transition: { duration: 0.3 } }}
							exit={{ opacity: 0, transition: { duration: 0.3 } }}
							className='fixed inset-0 bg-black z-10'
							onClick={() => setIsActive(false)}
						/>
						<Nav setIsActive={setIsActive} />
					</>
				)}
			</AnimatePresence>
		</div>
	);
};
export default Header;
