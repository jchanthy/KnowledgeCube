import Skill from "../models/skill.js";

export const searchSkills = async (req, res) => {
    const {search} = req.query;

    try {
        const skills = await Skill.find({
            $or: [
                {name: {$regex: search, $options: 'i'}}, // Case-insensitive search on name
                {tags: {$in: [search]}} // Search by tag
            ]
        });
        res.json(skills);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred'});
    }
};

