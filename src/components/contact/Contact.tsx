import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Magnetic from '@/common/magnetic/Magnetic';

const Contact = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end'],
	});

	const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
	const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

	return (
		<motion.div
			ref={container}
			style={{ y }}
			className='relative text-white flex flex-col items-center justify-center bg-[#141516] '
		>
			<div className='pt-[200px] w-full max-w-[1800px] bg-[#141516]'>
				<div className='relative pb-[100px] mx-[60px] md:mx-[200px] border-b border-[#868686]'>
					<span className='flex items-center'>
						<div className='relative w-[80px] h-[80px] rounded-[50%] overflow-hidden'>
							<Image
								src='/images/background.jpg'
								alt='dennis'
								fill={true}
								className='object-cover w-[80px] h-[80px]'
							/>
						</div>
						<h2 className='ml-[0.3em] text-[5vw] font-medium'>
							Let&apos;s work
						</h2>
					</span>
					<h2 className='text-[5vw] font-medium'>together</h2>
					<motion.div
						style={{ x }}
						className='absolute top-[calc(100%-75px)] left-[calc(100%-400px)]'
					>
						<Magnetic>
							<div className='w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-[50%] bg-[#455CE9] hover:bg-[#3c50cc] transition-colors duration-200 ease-out text-white flex items-center justify-center cursor-pointer'>
								<p className='m-0 text-[16px] font-thin z-[2] relative'>
									Get in touch
								</p>
							</div>
						</Magnetic>
					</motion.div>
					<motion.svg
						style={{ rotate, scale: 2 }}
						width='20'
						height='20'
						viewBox='0 0 9 9'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute top-[30%] left-[100%]'
					>
						<path
							d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
							fill='white'
						/>
					</motion.svg>
				</div>
				<div className='flex flex-col md:flex-row gap-[20px] mt-[100px] mx-[60px] md:mx-[200px]'>
					<Magnetic>
						<div className='rounded-[3em] border border-[#888888] cursor-pointer relative flex items-center justify-center px-[60px] py-[15px] hover:bg-[#455CE9] hover:text-white transition-colors duration-200 ease-out'>
							<p className=''>info@dennissnellenberg.com</p>
						</div>
					</Magnetic>
					<Magnetic>
						<div className='rounded-[3em] border border-[#888888] cursor-pointer relative flex items-center justify-center px-[60px] py-[15px] hover:bg-[#455CE9] hover:text-white transition-colors duration-200 ease-out'>
							<p className=''>+31 6 27 84 74 30</p>
						</div>
					</Magnetic>
				</div>
				<div className='mt-[200px] mx-[40px] md:mx-0 p-[20px] flex flex-col md:flex-row gap-[20px] justify-between'>
					<div className='flex gap-[10px] items-end'>
						<span className='flex flex-col gap-[15px]'>
							<h3 className='m-0 p-[2.5px] font-thin text-[1em] text-gray-200'>
								Version
							</h3>
							<p className='m-0 p-[2.5px] cursor-pointer after:content-[""] after:w-[0%] after:h-[1px] after:bg-[white] after:block after:mt-[2px] after:relative after:left-2/4 after:-translate-x-1/2 after:transition-all after:duration-200 after:ease-linear hover:after:w-full'>
								2022 © Edition
							</p>
						</span>
						<span className='flex flex-col gap-[15px]'>
							<h3 className='m-0 p-[2.5px] font-thin text-[1em] text-gray-200'>
								Local Time
							</h3>
							<p className='m-0 p-[2.5px] cursor-pointer after:content-[""] after:w-[0%] after:h-[1px] after:bg-[white] after:block after:mt-[2px] after:relative after:left-2/4 after:-translate-x-1/2 after:transition-all after:duration-200 after:ease-linear hover:after:w-full'>
								11:49 PM GMT+2
							</p>
						</span>
					</div>
					<div className='flex flex-col gap-[15px]'>
						<span className=''>
							<h3 className='m-0 p-[2.5px] font-thin text-[1em] text-gray-200'>
								Socials
							</h3>
						</span>
						<div className='flex items-center gap-[15px]'>
							<Magnetic>
								<p className=''>Awwwards</p>
							</Magnetic>
							<Magnetic>
								<p className=''>Instagram</p>
							</Magnetic>
							<Magnetic>
								<p className=''>Dribble</p>
							</Magnetic>
							<Magnetic>
								<p className=''>Linkedin</p>
							</Magnetic>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
export default Contact;
