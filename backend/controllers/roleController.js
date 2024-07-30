import Role from "../models/roles.js";

export const userRoles = async (req, res) => {
    try {
        const {name, description} = req.body;
        const role = new Role({name, description});
        await role.save();
        res.status(201).json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error creating role'});
    }
}
