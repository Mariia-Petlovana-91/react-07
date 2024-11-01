import css from '../AddUser/AddUser.module.css';
import { iconSize } from '../utils/iconSize';
import { IoPersonAdd } from "react-icons/io5";

export default function ({setIsVisible}) {
	return (<>
		<button className='userBtn'
			type='button'
			onClick={()=>setIsVisible(true)}
		>
			<IoPersonAdd className='userIcon'
				size={iconSize.m}
			/>
		</button>
	</>)
}