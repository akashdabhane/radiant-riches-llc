import React from "react";

const Rating = ({ rating }) => {
    // Calculate the percentage rating out of 100
    // const percentageRating = (rating / 10) * 100;

    return (
        <div className="flex items-center">
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => {
                    const starClass = index < Math.floor(rating / 2) ? "text-yellow-400" : "text-gray-300";
                    return (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 ${starClass}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 2l1.93 6.24h6.27l-5.05 3.89 1.93 6.24-5.05-3.9-5.05 3.89 1.93-6.24-5.05-3.89h6.27z"
                            />
                        </svg>
                    );
                })}
            </div>
        </div>
    );
};

export default Rating;
