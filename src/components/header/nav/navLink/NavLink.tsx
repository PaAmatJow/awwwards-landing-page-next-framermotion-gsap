import Link from "next/link";
import { motion } from 'framer-motion';
import { slide } from '../../anim.js';

interface LinkData {
	index: number;
	title: string;
	href: string;
}

interface NavLinkProps {
	data: LinkData;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}


const NavLink = ({data, setIsActive}: NavLinkProps) => {
  return (
    <motion.div custom={data.index} variants={slide} initial='initial' animate='enter' exit='exit' className="">
      <div className=""></div>
      <Link href={data.href} onClick={()=>{setIsActive(false)}}>
        {data.title}
      </Link>
    </motion.div>
  )
}
export default NavLink