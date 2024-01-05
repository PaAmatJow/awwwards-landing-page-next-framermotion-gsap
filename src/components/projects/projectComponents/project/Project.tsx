interface ProjectProps {
	index: number;
	title: string;
	setModal: (value: { active: boolean; index: number }) => void;
}

const Project = ({ index, title, setModal }: ProjectProps) => {
	return (
		<div
			className='flex items-center justify-between w-full px-[50px] py-[25px] md:px-[100px] md:py-[50px] border-t border-[#C9C9C9] cursor-pointer transition-all duration-200 last-of-type:border-b hover:opacity-50 group'
			onMouseEnter={() => {
				setModal({ active: true, index: index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index: index });
			}}
		>
			<h2 className='text-[40px] 2xl:text-[60px] m-0 font-normal transition-all duration-[400ms] group-hover:translate-x-[-10px]'>
				{title}
			</h2>
			<p className='font-light transition-all duration-[400ms] group-hover:translate-x-[10px]'>
				Design & Development
			</p>
		</div>
	);
};
export default Project;
