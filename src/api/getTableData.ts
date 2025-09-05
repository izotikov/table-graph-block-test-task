import {ActionerHolders} from "@types/dataTypes";
import {axiosDataRequest} from "@api/api";

// Имитация запроса к серверу
export function getTableData() {

    return new Promise<ActionerHolders[]>((resolve) => {
        setTimeout(() => {
            resolve(axiosDataRequest);
        }, 1000);
    })
}