import Image from 'next/image'
import {useRef} from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';

const slider1 = [
	{
		color: '#e3e5e7',
		src: 'c2.jpg',
	},
	{
		color: '#d6d7dc',
		src: 'decimal.jpg',
	},
	{
		color: '#e3e3e3',
		src: 'funny.jpg',
	},
	{
		color: '#21242b',
		src: 'google.jpg',
	},
];

const slider2 = [
	{
		color: '#d4e3ec',
		src: 'maven.jpg',
	},
	{
		color: '#e5e0e1',
		src: 'panda.jpg',
	},
	{
		color: '#d7d4cf',
		src: 'powell.jpg',
	},
	{
		color: '#e1dad6',
		src: 'wix.jpg',
	},
];

const SlidingImages = () => {
  const container = useRef<HTMLDivElement | null>(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
		<div
			ref={container}
			className='flex flex-col gap-[3vw] relative mt-[200px] bg-white z-[2]'
		>
			<motion.div
				style={{ x: x1 }}
				className='flex relative gap-[3vw] w-[120vw] left-[-10vw]'
			>
				{slider1.map((project, index) => {
					const { color, src } = project;
					return (
						<div
							key={index}
							className='w-[25%] h-[20vw] flex items-center justify-center'
							style={{ backgroundColor: color }}
						>
							<div className='relative w-[80%] h-[80%]'>
								<Image
									src={`/images/${src}`}
									alt=''
									fill={true}
									className='object-cover'
								/>
							</div>
						</div>
					);
				})}
			</motion.div>
			<motion.div
				style={{ x: x2 }}
				className='flex relative gap-[3vw] w-[120vw] left-[-10vw]'
			>
				{slider2.map((project, index) => {
					const { color, src } = project;
					return (
						<div
							key={index}
							className='w-[25%] h-[20vw] flex items-center justify-center'
							style={{ backgroundColor: color }}
						>
							<div className='relative w-[80%] h-[80%]'>
								<Image
									src={`/images/${src}`}
									alt=''
									fill={true}
									className='object-cover'
								/>
							</div>
						</div>
					);
				})}
			</motion.div>
			<motion.div style={{ height }} className='relative mt-[100px] z-[1]'>
				<div
					className='absolute shadow-[0_60px_60px_-15px_rgba(0,0,0,0.748)] h-[1550%] w-[120%] left-[-10%] bg-white'
					style={{ borderRadius: '0 0 50% 50%' }}
				></div>
			</motion.div>
		</div>
	);
}
export default SlidingImages