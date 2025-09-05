import {ActionerHolders} from "@types/dataTypes";
import ActionHoldersDonut from "@components/widgets/actions-holders-donut/ActionHoldersDonut";
import styles from './DonutBlock.module.scss';

interface DonutBlockProps {
	normalizedData: ActionerHolders[];
}

const DonutBlock = ({normalizedData}: DonutBlockProps) => {
	return (
		<div className={styles.donutWrapper}>
			<ActionHoldersDonut data={normalizedData}/>
		</div>
	);
};

export default DonutBlock;