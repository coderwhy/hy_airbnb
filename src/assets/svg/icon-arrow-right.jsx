import React, { memo } from 'react'
import styleStrToObj from './utils'

const IconArrowRight = memo((props) => {
  const { width = 12, height = 12 } = props

  return (
    <svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="next" focusable="false" style={styleStrToObj(`height: ${height}px; width: ${width}px; display: block; fill: currentcolor;`)}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
  )
})

export default IconArrowRight