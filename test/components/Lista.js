import React from 'react'
import PropTypes from 'prop-types'

const Lista = () => (
  <div>
    <ul>
      <li>Hobbie 1</li>
      <li>Hobbie 2</li>
      <li>Hobbie 3</li>
    </ul>
  </div>
)

Lista.propTypes = {
  text: PropTypes.string.isRequired
}

export default Lista
