import React from 'react';

const ProjectCard = ({ projectName, description, imageSrc }) => {
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
        <p className="text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
