import { useLayoutEffect, useState } from "react";

export default function useClick({event}) {
	const [toggle, setToggle] = useState(false);

	useLayoutEffect(() => {
		
		function handleClick(e) {
			e.preventDefault();
			setToggle(!toggle);
		}

		handleClick(e);
	});
	return toggle;
}