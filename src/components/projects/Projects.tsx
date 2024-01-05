'use client';

import { useState } from 'react';
import Project from './projectComponents/project/Project';
import Modal from './projectComponents/modal/Modal';
import Magnetic from '@/common/magnetic/Magnetic';

const Projects = () => {
	const projects = [
		{
			title: 'C2 Montreal',
			src: 'c2montreal.png',
			color: '#000000',
		},
		{
			title: 'Office Studio',
			src: 'officestudio.png',
			color: '#8C8C8C',
		},
		{
			title: 'Locomotive',
			src: 'locomotive.png',
			color: '#EFE8D3',
		},
		{
			title: 'Silencio',
			src: 'silencio.png',
			color: '#706D63',
		},
	];

	const [modal, setModal] = useState({ active: false, index: 0 });

	return (
		<main className='flex flex-col h-screen items-center mt-[200px] justify-center relative mb-[-100px] md:mb-0 '>
			<div className='flex  md:w-[1000px] flex-col items-center justify-center'>
				{projects.map((project, index) => {
					return (
						<Project
							key={index}
							index={index}
							title={project.title}
							setModal={setModal}
						/>
					);
				})}
			</div>
			<Magnetic>
				<div className='mt-[100px] rounded-[3em] border border-[#888888] cursor-pointer relative flex items-center justify-center px-[60px] py-[15px] hover:bg-[#455CE9] hover:text-white transition-colors duration-200 ease-out'>
				<p className=''>More work</p>
			</div>
			</Magnetic>
			

			<Modal modal={modal} projects={projects} />
		</main>
	);
}

export default Projects;