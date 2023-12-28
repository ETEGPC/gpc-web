import { useState, useEffect } from 'react';

export const useIsDesktopWindow = () => {
    const [isDesktopWindow, setIsDesktopWindow] = useState<boolean>(false);

    useEffect(() => {
		const toggleIsDesktopWindow = (): void => {
			if(window.innerHeight >= 497 && window.innerWidth >= 800){
				setIsDesktopWindow(true);
			}else {
				setIsDesktopWindow(false);
			}
		};

		toggleIsDesktopWindow();
		window.addEventListener('resize', toggleIsDesktopWindow);

		return () => window.removeEventListener('resize', toggleIsDesktopWindow);

	}, []);

    return isDesktopWindow;
}
