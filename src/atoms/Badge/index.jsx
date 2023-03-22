import React from 'react'
import './Badge.scss'

const Badge = ({number = '1'}) => {
  return (
    <div className="badge">{number}</div>
  )
}

export default Badge