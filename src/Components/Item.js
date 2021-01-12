import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, completed, text, number }) => (  // Updating after clicking on submit Button
  <li className={'item'}
    onClick={onClick}
  >  
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item