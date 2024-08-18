import Permission from "../../../models/permission.js";

export default async (req, res) => {
    try {
        const getPermissions = await Permission.find();
        res.json(getPermissions);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error fetching roles'});
    }
}