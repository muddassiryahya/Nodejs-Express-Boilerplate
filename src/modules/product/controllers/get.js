import { GET_DATA_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE } from "../constants/index.js";
import getData from "../services/get.js";


const getController = async (req, res) => {
    try {
        const users = await getData(req.query);
        res.status(200).send({ status: 200, message: GET_DATA_MESSAGE, data: users });
    } catch (err) {
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE, error: err });
    }
}
export default getController;