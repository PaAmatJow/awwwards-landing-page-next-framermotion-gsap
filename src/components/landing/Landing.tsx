'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {motion} from 'framer-motion'
import {slideUp} from './animation.js'

const Landing = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				scrub: true,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: '-=300px',
		});
	}, []);

	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0;
		}
		if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.05 * direction;
		requestAnimationFrame(animation);
	};

	return (
		<motion.main variants={slideUp} initial='initial' animate='enter' className='relative flex  h-screen overflow-hidden'>
			<Image
				src='/images/background.jpg'
				alt='dennis'
				priority={true}
				fill={true}
				className='object-cover'
			/>

			{/* slider */}
			<div className='absolute top-[calc(100vh-300px)]'>
				<div ref={slider} className='relative whitespace-nowrap'>
					<p
						ref={firstText}
						className='m-0 text-white text-[200px] tracking-tight font-normal pr-[50px]'
					>
						Dennis Snellenberg -
					</p>
					<p
						ref={secondText}
						className='absolute top-0 left-[100%] m-0 text-white text-[200px] tracking-tight font-normal pr-[50px]'
					>
						Dennis Snellenberg -
					</p>
				</div>
			</div>
		</motion.main>
	);
};

export default Landing;
