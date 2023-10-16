import axios from "axios";

const BASE_URL="https://kyawswarlynn.onrender.com";
// Items
export const getItems = async () => {
    const res = await axios.get(`${BASE_URL}/api/items/get`);
    return res.data;
}

export const getOneItem = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/items/get/${id}`);
    return res.data;
}

export const getItemsByName = async (itemName) => {
    const res = await axios.get(`${BASE_URL}/api/items/getItemsByName?itemName=${itemName}`);

    return res.data;
}

// Services

export const getServices = async () => {
    const res = await axios.get(`${BASE_URL}/api/services/get`);
    return res.data;
}

export const getOneService = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/services/get/${id}`);
    return res.data;
}

// Portfolios

export const getPortfolios = async () => {
    const res = await axios.get(`${BASE_URL}/api/portfolios/get`);
    return res.data;
}

export const getOnePortfolio = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/portfolios/get/${id}`);
    return res.data;
}

// Social Accounts
export const getSocials = async () => {
    const res = await axios.get(`${BASE_URL}/api/socials/get`);
    return res.data;
}

export const getOneSocial = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/socials/get/${id}`);
    return res.data;
}

// Certificates

export const getCertificates = async () => {
    const res = await axios.get(`${BASE_URL}/api/certificates/get`);
    return res.data;
}

export const getOneCertificate = async (id) => {
    const res = await axios.get(`${BASE_URL}/api/certificates/get/${id}`);
    return res.data;
}
