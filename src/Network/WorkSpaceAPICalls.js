import { fetchDataFormBackend } from "./url";
import { DASHBOARD_APIS } from "../Constants/APIConstants";

export const getDashboardLists = () => {
  return fetchDataFormBackend(DASHBOARD_APIS.GET_DASHBOARD_LISTS, "GET");
};
