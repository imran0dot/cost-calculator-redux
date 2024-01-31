import axios from "../../../utils/axios";

export const getTransactions = async () => {
    const responce = await axios('/transactions');
    return responce.data;
};

export const postTransaction = async (data) => {
    const responce = await axios.post('/transactions', data);
    return responce.data;
}