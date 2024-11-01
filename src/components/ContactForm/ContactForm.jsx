import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { IoClose } from "react-icons/io5";
import schemaValidate from '../utils/validataSchema';
import { iconSize } from '../utils/iconSize';

export default function ContactForm({onAddId, setIsVisible}) {
	const INITIAL__VALUE = {
	 	name: "",
	      number: "",
	}
      
	function onSubmit(values, actions) {
		setIsVisible(false);
		onAddId(values);
		actions.resetForm();
		return;
	}

	return (
		<Formik initialValues={INITIAL__VALUE}
			onSubmit={onSubmit}
			validationSchema={schemaValidate}>
			<Form className={css.form}>
				<button className='userBtn'
					type="button"
					onClick={()=>setIsVisible(false)}
				>
					<IoClose className='userIcon'
						size={iconSize.m}
					/>
				</button>
				<label className="label">
					<span className="descript">Name</span>
					<Field className="input"
						type='text'
						name='name' />
					<ErrorMessage className={css.form__error}
						name='name'
						component="span" />
				</label>
				<label className="label">
					<span className="descript">Number</span>
					<Field className="input"
						type='text'
						name='number' />
					<ErrorMessage className={css.form__error}
						name='number'
						component="span" />
				</label>
                        <button className='btn' type="submit">Add contact</button>
			</Form>

		</Formik>
	)
}