import axios from "./axiosInstance";

const fetchMessage = async () => {
    try {
        const result = await axios.get();

        return {
            success: true,
            data: result.data
        };

    } catch (error) {
        const { status, data } = error.response;

        return {
            success: false,
            data: data + ' Error ' + status
        }
    }
};

export default {
    fetchMessage
};