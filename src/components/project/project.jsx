import React from 'react';
import { motion } from 'framer-motion';

// import classes from './works.module.css';
import ProjectList from './projectList';
import MyComponent from './textProject';
import textProject from './textProject';
// import NewList from './ProjectsListcopy';

const Project = function (props) {
  // const records = Slice(firstIndex, lastIndex);
  // const npage = Math.ceil(props.data.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <motion.div
      className="mt-10 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-judson text-primary mb-4">
        My Projects
      </h1>

      <ProjectList />
      {/* <NewList /> */}
      {/* <MyComponent /> */}
    </motion.div>
  );
};

export default Project;
