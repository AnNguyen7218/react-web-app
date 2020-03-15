import {useEffect, useState} from 'react'

export const useDarkMode = () => {
	const [theme, setTheme] = useState('light');
	const [componentMounted, setComponentMounted] = useState(false);

	const saveThemeToLocalStorage = (theme: string) => {
		window.localStorage.setItem('theme', theme)
	}

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			saveThemeToLocalStorage('dark');
		} else {
			setTheme('light');
			saveThemeToLocalStorage('light');
		}
	}

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		if (localTheme) {
			setTheme(localTheme);
		} else {
			setTheme('light');
			saveThemeToLocalStorage('light');
		}
		setComponentMounted(true)
	}, []);
	
	return {theme, toggleTheme, componentMounted}
}


