const updatePermission = async (req, res) => {
    try {
        const {userId} = req.params;
        const {newPermission} = req.body;

        if (!newPermission) {
            return res.status(400).json({error: 'Missing newPermission data'});
        }

        const permission = await Permission.findOne({userId});

        if (!permission) {
            return res.status(404).json({error: 'Permission not found'});
        }

        if (permission.permissions.some(perm => perm.equals(newPermission))) {
            return res.status(400).json({error: 'Permission already exists'});
        }

        permission.permissions.push(newPermission);
        await permission.save();

        res.status(200).json(permission);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export default updatePermission;
