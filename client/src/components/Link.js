import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <a
      className="selected"
      onClick={e => {
         e.preventDefault();
       }}
    >{children}</a>;
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
