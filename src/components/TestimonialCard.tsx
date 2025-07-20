
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, content, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center text-center">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <p className="text-gray-600 italic mb-4">"{content}"</p>
        <div>
          <h4 className="font-semibold text-text">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
