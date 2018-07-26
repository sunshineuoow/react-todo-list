import React from 'react'

const Link = ({ active, children, onClick }) => (
  <button
    style={{ marginLeft: '4px' }}
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
)

export default Link