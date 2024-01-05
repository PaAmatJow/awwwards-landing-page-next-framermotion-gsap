'use client';

import Contact from '@/components/contact/Contact';
import Description from '@/components/description/Description';
import Landing from '@/components/landing/Landing';
import Preloader from '@/components/preloader/Preloader';
import Projects from '@/components/projects/Projects';
import SlidingImages from '@/components/slidingImages/SlidingImages';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
	const [isLoading, setIsloading] = useState(true)
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();

		setTimeout(() => {
			setIsloading(false)
			document.body.style.cursor = 'default'
			window.scrollTo(0,0)
		},2000)
	}, []);

	return (
		<main className='overflow-hidden'>
			<AnimatePresence mode='wait'>
				{isLoading && <Preloader /> }
			</AnimatePresence>
			<Landing />
			<Description />
			<Projects />
			<SlidingImages />
			<Contact />
		</main>
	);
}
