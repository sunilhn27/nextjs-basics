import { users } from "../../../../Data/users"

export default async function handler(req, res) {

    if (req.method === "GET") {
        res.status(200).json(users)
    } else if (req.method === "POST") {
        console.log("inside POST");
        const user = req.body.user;
        const newUser = {
            id: Date.now(),
            name: user,
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
        }
        users.push(newUser);
        res.status(201).json(newUser);


    }
}