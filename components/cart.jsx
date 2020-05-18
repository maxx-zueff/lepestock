import styles from './cart.module.scss'
// import useClick from '../hooks/useClick'
// import { useState } from "react";

export default function Component(props) {

	function handleClick(e) {
		e.preventDefault();
		props.updateToggle(!props.toggle);
	}

	let items = 1;
	let subtotal = 6900;

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
								<div className={styles.cart}>
									<div className={styles.cartContainer}>
										<div className={styles.cartHeader}>
											<h1 className={styles.youCart}>
												Корзина
												<span> ({items})</span>
											</h1>
											<div className={styles.cartSubtotal}>
												Сумма заказа
												<span className={styles.subtotal}>{subtotal} руб.</span>
											</div>
										</div>
									</div>
								</div>

							</div>
						)
					} 
				</div>
			</div>
		</div>
	)
}