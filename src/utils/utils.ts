import {ActionerHolders} from "@types/dataTypes";

export function normalizeData(data: ActionerHolders[]) {
	const mergedData = Object.values(
		data.reduce((acc, item) => {
			// Приводим к единому числовому типу
			const sharePercent = parseFloat(item.share_percent.toString());
			if (acc[item.holder]) {
				acc[item.holder].share_percent += sharePercent;
			} else {
				acc[item.holder] = { ...item, share_percent: sharePercent };
			}
			return acc;
		}, {} as Record<string, { holder: string; share_percent: number }>)
	);

	const total = mergedData.reduce((sum, item) => sum + item.share_percent, 0);

	return mergedData.map(item => ({
		...item,
		share_percent: +((item.share_percent / total) * 100).toFixed(2),
		key: item.holder,
	}));
}

export function normalizeTableData(data: ActionerHolders[]) {
	return data.map(item => ({
		...item,
		share_percent: item.share_percent.toString() + ' %'
	}))
}

export function getTodayData() {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const day = today.getDate();

	return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;

}