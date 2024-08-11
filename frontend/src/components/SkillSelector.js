import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SkillSelector = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('/api/skills?search=' + searchTerm); // Replace with your API endpoint
                setSkills(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (searchTerm) {
            fetchSkills();
        }
    }, [searchTerm]);

    const handleSkillSelect = (skill) => {
        setSelectedSkills([...selectedSkills, skill]);
    };

    const handleSkillRemove = (skill) => {
        setSelectedSkills(selectedSkills.filter((s) => s._id !== skill._id));
    };

    return (
        <div>
            <input
                type="input"
                placeholder="Search skills"
                value={searchTerm}
                className="select select-bordered input-primary w-full"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <option>
                {skills.map((skill) => (
                    <li key={skill._id}>
                        {skill.name}
                        <button onClick={() => handleSkillSelect(skill)}>+</button>
                    </li>
                ))}
            </option>
            <div>
                Selected Skills:
                {selectedSkills.map((skill) => (
                    <div className={'badge badge-primary'}
                         key={skill._id}>
                        {skill.name}
                        <button onClick={() => handleSkillRemove(skill)}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSelector;
