import Role from "../models/role.js";

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
export const postRole = async (req, res) => {
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

export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error fetching roles'});
    }
}

export const getRole = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) {
            return res.status(404).json({message: 'Role not found'});
        }
        res.json(role);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error fetching role'});
    }

}
