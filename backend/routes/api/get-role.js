import Role from "../../models/roles.js";

export default async (req, res) => {
    try {
        const {name, description} = req.body;
        const role = new Role({name, description});
        await role.save();
        res.status(201).json(role);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error creating role'});
    }
}