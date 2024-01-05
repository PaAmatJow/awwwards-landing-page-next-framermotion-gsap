import {motion} from 'framer-motion'

const Curve = () => {

  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
		window.innerHeight
	} Q-100 ${window.innerHeight / 2} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
		window.innerHeight
	} Q100 ${window.innerHeight / 2} 100 0`;

	const curve = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
	};

  return (
		<svg className='absolute top-0 left-[-99px] w-[100px] h-[100%] fill-[#292929] stroke-none'>
			<motion.path
				variants={curve}
				initial='initial'
				animate='enter'
				exit='exit'
			></motion.path>
		</svg>
	);
}
export default Curve