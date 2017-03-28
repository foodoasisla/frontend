/* Libraries */
import React, { PropTypes } from 'react';

/* Styles */
import './../styles/_base.scss';


const BaseLayout = ({ children }) => (
  <div>
    {children}
  </div>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
