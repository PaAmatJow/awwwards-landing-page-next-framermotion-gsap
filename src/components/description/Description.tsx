import {motion} from 'framer-motion'
import {slideUp, opacity} from './animation'
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from '../../common/magnetic/Magnetic.jsx'

const Description = () => {
  const container = useRef(null)
  const isInView = useInView(container)

  const phrase =
		'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
  return (
		<div
			ref={container}
			className='px-[60px] md:px-[200px] mt-[100px] md:mt-[200px] flex justify-center'
		>
			<div className='max-w-[1400px] flex flex-col md:flex-row gap-[50px] relative'>
				<p className='m-0 text-[36px] gap-[8px] leading-[1.3]'>
					{phrase.split(' ').map((word, index) => {
						return (
							<span
								key={index}
								className='relative overflow-hidden inline-flex mr-[5px] gap-[5px]'
							>
								<motion.span
									variants={slideUp}
									custom={index}
									initial='initial'
									animate={isInView ? 'open' : 'closed'}
									className=''
								>
									{word}
								</motion.span>
							</span>
						);
					})}
				</p>
				<motion.p
					variants={opacity}
					initial='initial'
					animate={isInView ? 'open' : 'closed'}
					className='m-0 text-[18px] w-[80%] font-light'
				>
					The combination of my passion for design, code & interaction positions
					me in a unique place in the web design world.
				</motion.p>
				<div data-scroll data-scroll-speed={0.1}>
					<Magnetic>
						<div className='absolute top-[90%] md:top-[80%] left-[40%]  md:left-[calc(100%-250px)] bg-[#1C1D20] text-white w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#455CE9] transition-colors duration-200 ease-out'>
						<p className='m-0 text-[16px] font-light relative z-10'>About me</p>
					</div>
					</Magnetic>
					
				</div>
			</div>
		</div>
	);
}
export default Description