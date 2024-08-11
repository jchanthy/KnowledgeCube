import Role from "../../../models/role.js";

export default async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error fetching roles'});
    }
}