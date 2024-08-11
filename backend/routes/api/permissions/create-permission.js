import Permission from "../../../models/permission.js";

const createPermission = async (req, res) => {
    console.log(req.body);
    try {
        const {userId, permissions} = req.body;

        // Validate required fields
        if (!userId || !permissions) {
            return res.status(400).json({error: 'userId and permissions are required'});
        }

        const newPermission = new Permission({userId, permissions});
        const savedPermission = await newPermission.save();
        res.status(201).json(savedPermission);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

export default createPermission;