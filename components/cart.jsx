import styles from './cart.module.scss'
// import useClick from '../hooks/useClick'
// import { useState } from "react";

export default function Component(props) {

	function handleClick(e) {
		e.preventDefault();
		props.updateToggle(!props.toggle);
	}

	return (
		<div className={props.toggle ? styles.open : null}>
			<div className={styles.panelContent}>
				<div className={styles.panelSlides}>
					{ 
						props.toggle && (
							<div className={styles.slide}>
								<div className={styles.close}>
									<button onClick={handleClick}></button>
								</div>

								<span>Test</span>
							</div>
						)
					} 
				</div>
			</div>
		</div>
	)
}