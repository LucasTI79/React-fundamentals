import React from 'react'
import PropTypes from 'prop-types';

export default function Header ({ title, children }) {
  return(
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

Header.defaultProps = {
  title: `JStack's Blog`
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}