import {comments} from "../../../../Data/users";

export default function handler(req, res) {
    res.status(200).json(comments);

}