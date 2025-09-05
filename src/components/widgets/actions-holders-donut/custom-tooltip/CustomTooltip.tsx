import styles from './CustomTooltip.module.scss';

export const CustomTooltip = ({ active, payload }) => {
	const isVisible = active && payload && payload.length;
	return (
		<div
			className={styles.customTooltip}
			style={{ visibility: isVisible ? "visible" : "hidden" }}
		>
			{isVisible && (
				<>
					<p className="label">{payload[0].name}</p>
					<p className="desc">{payload[0].value} %</p>
				</>
			)}
		</div>
	);
};