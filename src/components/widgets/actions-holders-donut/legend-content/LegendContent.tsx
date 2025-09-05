import { memo } from "react";
import styles from "./LegendContent.module.scss"

export const LegendContent = memo(({ payload }) => (
	<div style={{ paddingBottom: 70 }}>
		<ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
			{payload?.map((entry, index) => (
				<li className={styles.liElem} key={`item-${index}`}>
          <span
						style={{
							display: "inline-block",
							borderRadius: "50%",
							width: 12,
							height: 12,
							backgroundColor: entry.color,
							marginRight: 8,
						}}
					/>
					{entry.value}
				</li>
			))}
		</ul>
	</div>
));