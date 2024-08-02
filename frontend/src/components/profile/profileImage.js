import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserProfilePicture({userId}) {
    const [profilePictureUrl, setProfilePictureUrl] = useState(null);
    const [error, setError] = useState(null);

    const _blankImg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>`;
    useEffect(() => {
        const fetchPicture = async () => {
            try {
                const response = await axios.get('/api/users/:_id'); // Replace with your data fetching logic
                console.log('responseMst', response);
                setProfilePictureUrl(response.data.message); // Assuming the response structure
            } catch (error) {
                console.error('Error fetching profile picture:', error);
                setError('Error loading profile picture');
            }
        };

        fetchPicture();
    }, [userId]);

    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <img
                    src={profilePictureUrl || _blankImg} // Replace with your default image path
                    alt="User Profile Picture"
                    onError={(e) => {
                        e.target.src = '/default-profile-picture.jpg';
                    }}
                />
            )}
        </div>
    );
}

export default UserProfilePicture;
