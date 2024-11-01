import { useState } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ searchValue, onChangeValue }) {
	return (
		<div className={css.search__box}>
			<input className="input"
				type='text'
				name='search'
				value={searchValue}
				onChange={onChangeValue}
				placeholder='Find contacts by name'
			/>
		</div>
	)
}