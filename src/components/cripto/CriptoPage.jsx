import React from 'react'
import { useParams } from 'react-router-dom'

export const CriptoPage = () => {

    const params = useParams()
  return (
    <h1>Soy una criptomoneda {params.id}</h1>
  )
}
