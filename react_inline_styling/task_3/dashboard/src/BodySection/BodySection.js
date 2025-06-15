import React from 'react'


let styles = {
	margin: "40px",
}

function BodySection({ title, children }) {
  return (
    <div className='bodySection' style={styles}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default BodySection
