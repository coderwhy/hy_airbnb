import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconClose = memo(() => {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="关闭" focusable="false" style={styleStrToObject("height: 2em; width: 2em; display: block; fill: rgb(255, 255, 255);")}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
  )
})

export default IconClose