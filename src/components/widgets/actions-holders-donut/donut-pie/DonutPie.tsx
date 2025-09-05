import styles from './DonutPie.module.scss';
import {Cell, Pie} from "recharts";
import {useMemo} from "react";
import useResize from "@hooks/useResize";
import {ActionerHolders} from "@types/dataTypes";

interface DonutPieProps {
	data: ActionerHolders[];
}

const DonutPie = ({data}: DonutPieProps) => {

	const donutColors = ["#69CDFF", "#FF5555", "#FFC94F", "#37D881", "purple", "pink"];

	//Для оптимизации можно убрать ноль, чтобы был небольшой дебаунс.
	// Я оставил, чтобы можно было динамично растягивать и смотреть, как выглядит на всех разрешениях сайт
	const { isMobile, isMedium } = useResize(0);

	function radiusCalculation() {
		return (isMobile || isMedium)
			? { innerRadius: 65, outerRadius: 110 }
			: { innerRadius: 90, outerRadius: 150 };
	}

	const radius = useMemo(() => radiusCalculation(), [isMobile, isMedium]);

	return (
		<Pie
			data={data}
			dataKey="share_percent"
			className={styles.pie}
			nameKey="holder"
			cx="50%"
			cy="45%"
			innerRadius={radius.innerRadius}
			outerRadius={radius.outerRadius}
		>
			{data.map((entry, index) => {
				const color = donutColors[index % donutColors.length];
				return (
					<Cell
						key={`cell-${index}`}
						fill={color}
						className={styles.sector}
						tabIndex={-1}
					/>
				);
			})}
		</Pie>
	);
};

export default DonutPie;