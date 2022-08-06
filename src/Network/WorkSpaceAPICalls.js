import { fetchDataFormBackend } from "./url";
import { DASHBOARD_APIS } from "../Constants/APIConstants";

export const getDashboardLists = () => {
  return fetchDataFormBackend(DASHBOARD_APIS.GET_DASHBOARD_LISTS, "GET");
};

export const addDashboardLists = (formData) => {
  return fetchDataFormBackend(DASHBOARD_APIS.ADD_DASHOARD_LIST, "POST", formData, true);
};

export const addCardToList = (formData) => {
  return fetchDataFormBackend(DASHBOARD_APIS.ADD_CARD, "POST", formData, true);
};

export const deleteList = (formData) => {
  return fetchDataFormBackend(DASHBOARD_APIS.DELETE_LIST, "POST", formData, true);
};

export const deleteCard = (formData) => {
  return fetchDataFormBackend(DASHBOARD_APIS.DELETE_CARD, "POST", formData, true);
};
