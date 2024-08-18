import Permission from "../../../models/permission.js";

const getOnePermission = async (req, res) => {
    try {
        const {userId} = req.params;
        console.log(`userId: ${userId}`); // Verify the userId value

        const getOnePermission = await Permission.find({userId}).populate('userId');
        console.log(`getOnePermission: ${getOnePermission}`); // Verify the getOnePermission value

        console.log(getOnePermission);

        if (!getOnePermission) {
            return res.status(404).json({error: 'Permission not found'});
        }
        res.json(getOnePermission);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to retrieve permissions'});
    }
}
export default getOnePermission;