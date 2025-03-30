import { userModel } from "../modals/UserModal.js";

const AddUser = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        console.log(req.body)

        const document = {
            name: name,
            email: email,
            password: password
        }

        const result = await userModel.insertOne(document);

        res.json({ status: "success", data: result })
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
}

export { AddUser };