import React, { memo } from 'react'
import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail
