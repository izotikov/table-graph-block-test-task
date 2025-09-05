import {getTableData} from "@api/getTableData";
import {Suspense} from 'react';
import CompanyInformation from "@components/pages/company-information/CompanyInformation";


function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyInformation dataPromise={getTableData()} companyName='SBER'/>
      </Suspense>
    </>
  )
}

export default App;
