import axios from "axios";
import {ActionerHolders} from "@types/dataTypes";

export const axiosDataRequest = axios.get<ActionerHolders[]>('/data.json')
	.then(response => response.data)
	.catch(error => console.error('Error! ', error))