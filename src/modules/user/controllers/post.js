import { INTERNAL_SERVER_ERROR_MESSAGE, POST_DATA_MESSAGE } from '../constants/index.js';
import postData from '../services/post.js';

const postController = async (req, res) => {
    try {
        const data = await postData(req.body);
        res.status(200).send({ status: 200, message: POST_DATA_MESSAGE, data });
    } catch (err) {
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default postController;