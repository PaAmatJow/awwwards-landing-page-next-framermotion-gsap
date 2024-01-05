'useClient';

import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface Project {
	title: string;
	src: string;
	color: string;
}

interface ModalProps {
	modal: {
		active: boolean;
		index: number;
	};
	projects: Project[];
}

const scaleAnimation = {
	initial: {
		scale: 0,
		x: '-50%',
		y: '-50%',
	},
	open: {
		scale: 1,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	close: {
		scale: 0,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};

const Modal = ({ modal, projects }: ModalProps) => {
	const { active, index } = modal;
	const container = useRef(null);
	const cursor = useRef(null);
	const cursorLabel = useRef(null);

	useEffect(() => {
		const moveContainerX = gsap.quickTo(container.current, 'left', {
			duration: 0.8,
			ease: 'back.out',
		});
		const moveContainerY = gsap.quickTo(container.current, 'top', {
			duration: 0.8,
			ease: 'back.out',
		});

		const moveCursorX = gsap.quickTo(cursor.current, 'left', {
			duration: 0.5,
			ease: 'back.out',
		});
		const moveCursorY = gsap.quickTo(cursor.current, 'top', {
			duration: 0.5,
			ease: 'back.out',
		});

		const moveCursorLabelX = gsap.quickTo(cursorLabel.current, 'left', {
			duration: 0.5,
			ease: 'back.out',
		});
		const moveCursorLabelY = gsap.quickTo(cursorLabel.current, 'top', {
			duration: 0.5,
			ease: 'back.out',
		});

		window.addEventListener('mousemove', (e) => {
			const { clientX, clientY } = e;
			moveContainerX(clientX);
			moveContainerY(clientY);

			moveCursorX(clientX);
			moveCursorY(clientY);

			moveCursorLabelX(clientX);
			moveCursorLabelY(clientY);
		});
	}, []);

	return (
		<>
			<motion.div
				ref={container}
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'open' : 'close'}
				className='h-[350px] w-[400px] absolute overflow-hidden flex items-center justify-center pointer-events-none'
			>
				<div
					style={{ top: index * -100 + '%' }}
					className='h-full w-full absolute transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]'
				>
					{projects.map((project, index) => {
						const { title, src, color } = project;
						return (
							<div
								key={index}
								style={{ backgroundColor: color }}
								className='relative h-full flex items-center justify-center'
							>
								<Image
									src={`/images/${src}`}
									alt={title}
									width={300}
									height={0}
									className='h-auto'
								/>
							</div>
						);
					})}
				</div>
			</motion.div>
			<motion.div
				ref={cursor}
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'open' : 'close'}
				className='w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] text-white absolute z-20 flex items-center justify-center pointer-events-none'
			></motion.div>
			<motion.div
				ref={cursorLabel}
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'open' : 'close'}
				className='w-[80px] h-[80px] rounded-[50%] text-white absolute z-20 flex items-center justify-center text-[14px] font-light pointer-events-none'
			>
				View
			</motion.div>
		</>
	);
};
export default Modal;
