import React from 'react';
import {Link} from 'react-router-dom';

const Support = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Support</h1>
            <div className="flex flex-col space-y-4">
                <Link to="/support/faqs" className="text-blue-500 hover:underline">FAQs</Link>
                <Link to="/support/contact" className="text-blue-500 hover:underline">Contact Support</Link>
                <Link to="/support/guides" className="text-blue-500 hover:underline">User Guides</Link>
                <Link to="/support/community" className="text-blue-500 hover:underline">Community Help</Link>
            </div>
        </div>
    );
};

export default Support;