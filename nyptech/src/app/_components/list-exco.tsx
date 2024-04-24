"use client"
import React, { useState } from 'react';

interface ProjectCardProps {
  projectName: string;
  description: string;
  imageSrc: string;
  subheading: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, subheading, description, imageSrc }) => {
  // State to manage whether to show the full description or not
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle the description state
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Assuming a line is roughly 50 characters, this will need adjustments based on actual font size and container width
  const maxDescriptionLength = 150; // Approx 3 lines of 50 characters

  return (
    <div className="flex flex-col space-y-2">
      <img
        alt="Project"
        className="aspect-[5/3] overflow-hidden rounded-lg object-cover object-center"
        height="300"
        src={imageSrc}
        width="500"
      />
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">{projectName}</h3>
        <p className="badge badge-outline">
          {subheading}
        </p>
        <p>
          {showFullDescription ? description : `${description.substring(0, maxDescriptionLength)}...`}
        </p>
        {description.length > maxDescriptionLength && (
          <button onClick={toggleDescription} className="btn btn-link">
            {showFullDescription ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
