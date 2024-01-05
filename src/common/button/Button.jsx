import gsap from "gsap";
import { ButtonHTMLAttributes, ReactNode, useEffect, useRef } from "react";



const Button = ({children, backgroundColor='#455CE9', ...attributes}) => {
  const circle = useRef(null);
	let timeline = useRef(null);
	let timeoutId = null;
	useEffect(() => {
		timeline.current = gsap.timeline({ paused: true });
		timeline.current
			.to(
				circle.current,
				{ top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
				'enter'
			)
			.to(
				circle.current,
				{ top: '-150%', width: '125%', duration: 0.25 },
				'exit'
			);
	}, []);

	const manageMouseEnter = () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeline.current.tweenFromTo('enter', 'exit');
	};

	const manageMouseLeave = () => {
		timeoutId = setTimeout(() => {
			timeline.current.play();
		}, 300);
	};

  return (
		<div
			className='rounded-[3em] border border-[#888888] cursor-pointer relative flex items-center justify-center px-[60px] py-[15px] overflow-hidden'
			onMouseEnter={() => {
				manageMouseEnter();
			}}
			onMouseLeave={() => {
				manageMouseLeave();
			}}
			{...attributes}
		>
			{children}
			<div ref={circle} style={{ backgroundColor }} className='w-full h-[150%] absolute rounded-[50%] top-[100%]'></div>
		</div>
	);
}
export default Button