import React from "react";

const JobCard = ({ img, title, children }) => {
    return (
        <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl mb-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2 mb-4 w-1/2 text-brand-purple">
                        {img}
                    </div>
                </div>
                <div className="h-15">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default JobCard;