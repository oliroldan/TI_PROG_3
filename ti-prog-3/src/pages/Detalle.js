import React from 'react'
import Detalle from '../components/Detalle/Detalle'

const DetallePage = ({ match }) => {
  const { id } = match.params

  return (
    <Detalle id={id} />
  )
}

export default DetallePage
