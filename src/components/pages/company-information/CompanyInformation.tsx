import {FC, use} from 'react';
import {ActionerHolders} from "@types/dataTypes";
import {normalizeData} from "@utils/utils";
import TableBlock from "@components/pages/company-information/table-block/TableBlock";
import DonutBlock from "@components/pages/company-information/donut-block/DonutBlock";
import styles from './CompanyInformation.module.scss';


interface CompanyInformationProps {
  dataPromise: Promise<ActionerHolders[]>;
  companyName: string;
}

const CompanyInformation: FC<CompanyInformationProps> = ({dataPromise, companyName}) => {
  const data = use(dataPromise);
  const companyData: ActionerHolders[] = data[companyName] ?? [];

  const normalizedData = normalizeData(companyData);

    return (
      <div className={styles.container}>
        <h2 className={styles.header}>Структура акционеров</h2>
        <div className={styles.body}>
          <TableBlock normalizedData={normalizedData}/>
          <DonutBlock normalizedData={normalizedData}/>
        </div>
      </div>

    );
};

export default CompanyInformation;