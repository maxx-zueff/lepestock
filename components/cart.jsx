import styles from './cart.module.scss'
import Trash from '../public/delete.svg'
import Plus from '../public/more.svg'
import Minus from '../public/minus.svg'
import classNames from 'classnames'

// import useClick from '../hooks/useClick'
// import { useState } from "react";

export default function Component(props) {

	function handleClick(e) {
		e.preventDefault();
		props.updateToggle(!props.toggle);
	}

	let items = 2;
	let subtotal = 2780;

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
												<span className={styles.subtotal}>{subtotal} ₽</span>
											</div>
										</div>
										<div className={styles.productContainer}>
											<div className={styles.productWrapper}>

												<div className={styles.productList}>
													<div className={styles.product}>
														<a href="/">
															<div className={styles.productImage}>
																<img src="/products/1.jpg" alt=""/>
															</div>
														</a>
														<div className={styles.productDescription}>
															
															<div className={styles.productCol}>
																<span>Букетикcc для твоей любимой красотки</span>
																<div className={styles.amountContainer}>
																	<span className={styles.amountDescription}>Количество:</span>
																	<div className={styles.amountChange}>
																		<Minus />
																	</div>
																	<div className={styles.amountProduct}>1</div>																
																	<div className={styles.amountChange}>
																		<Plus />
																	</div>
																</div>
															</div>

															<div className={classNames(styles.productCol, styles.productCol_left)}>
																<div className={styles.productPrice}>1590 ₽</div>
																<div className={styles.btnIcon}>
																	<Trash />
																</div>
															</div>
														</div>
													</div>
													<div className={styles.product}>
														<a href="/">
															<div className={styles.productImage}>
																<img src="/products/2.jpg" alt=""/>
															</div>
														</a>
														<div className={styles.productDescription}>
															
															<div className={styles.productCol}>
																<span>Чудесные цветы для чудесной тёщи</span>
																<div className={styles.amountContainer}>
																	<span className={styles.amountDescription}>Количество:</span>
																	<div className={styles.amountChange}>
																		<Minus />
																	</div>
																	<div className={styles.amountProduct}>1</div>																
																	<div className={styles.amountChange}>
																		<Plus />
																	</div>
																</div>
															</div>

															<div className={classNames(styles.productCol, styles.productCol_left)}>
																<div className={styles.productPrice}>1190 ₽</div>
																<div className={styles.btnIcon}>
																	<Trash />
																</div>
															</div>
														</div>
													</div>

													<div className={styles.productSection}>
														<p className={styles.productDescription}>Выберите способ получения:</p>
														<div className={styles.productReception}>
															<div className={styles.itemReception}>
																<div className={styles.productImage}>
																	<img src="/delivery.png" alt=""/>
																</div>
																<p>Доставка</p>
															</div>
															<div className={styles.itemReception}>
																<div className={styles.productImage}>
																	<img src="/shop.png" alt=""/>
																</div>
																<p>В салоне</p>
															</div>
														</div>

													</div>
												</div>
											</div>
											<div>
												<button className={styles.confirm}>Подтвердить заказ</button>
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