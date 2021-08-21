import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { ThemeContext } from './ThemeContext'
export default function Header (props) {
  const { onToggleTheme } = React.useContext(ThemeContext)
  return(
    <div
      style={{
        background:'#ccc'
      }}
      >
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </div>
  )
}

Header.defaultProps = {
  title: `JStack's Blog`
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onToggleTheme: PropTypes.func.isRequired,
}
