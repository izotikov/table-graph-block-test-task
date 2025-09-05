import { useMemo } from "react";
import {Legend, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import { ActionerHolders } from "@types/dataTypes";
import useResize from "@hooks/useResize";
import {CustomTooltip} from "@components/widgets/actions-holders-donut/custom-tooltip/CustomTooltip";
import DonutPie from "@components/widgets/actions-holders-donut/donut-pie/DonutPie";
import {LegendContent} from "@components/widgets/actions-holders-donut/legend-content/LegendContent";
import styles from './ActionHoldersDonut.module.scss';

interface ActionHoldersDonutProps {
	data: ActionerHolders[];
}

const ActionHoldersDonut = ({ data }: ActionHoldersDonutProps) => {
	//Для оптимизации можно убрать ноль, чтобы был небольшой дебаунс.
	// Я оставил, чтобы можно было динамично растягивать и смотреть, как выглядит на всех разрешениях сайт
	const { isMobile, isMedium } = useResize(0);

	const dynamicHeight = useMemo(() => {
		const base = (isMobile || isMedium) ? 420 : 300;
		const extraPerItem = 25;
		return base + data.length * extraPerItem;
	}, [data, isMobile, isMedium]);

	return (
		<ResponsiveContainer width="100%" height={dynamicHeight} className={styles.pieContainer}>
			<PieChart>
				<DonutPie data={data}/>
				<Tooltip content={<CustomTooltip />} />
				<Legend
					align={(isMobile || isMedium) ? "center" : "right"}
					verticalAlign={(isMobile || isMedium) ? "bottom" : "top"}
					layout="vertical"
					iconSize={10}
					content={<LegendContent />}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default ActionHoldersDonut;
