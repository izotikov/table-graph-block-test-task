import { useEffect, useState } from "react";

type TResize = {
	isLarge: boolean;
	isMedium: boolean;
	isMobile: boolean;
};

const getResize = (): TResize => {
	return {
		isLarge: document.documentElement.clientWidth > 1415,
		isMedium: document.documentElement.clientWidth > 1000 && document.documentElement.clientWidth <= 1415,
		isMobile: document.documentElement.clientWidth <= 1000,
	};
};

export default function useResize(debounceTime = 200) {
	const [resize, setResize] = useState<TResize>(getResize);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const handleResize = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				setResize(getResize());
			}, debounceTime);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			clearTimeout(timeout);
			window.removeEventListener("resize", handleResize);
		};
	}, [debounceTime]);

	return resize;
}
