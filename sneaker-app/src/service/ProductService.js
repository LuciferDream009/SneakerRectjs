import axios from 'axios';
export const getAllproduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll-product `)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-details/${id}`)
    return res.data
}