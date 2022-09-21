import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo(() => {
  /** 定义组件内部的状态 */
  const [showBrowser, setShowBrowser] = useState(false)

  /** redux获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item' onClick={e => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item} onClick={e => setShowBrowser(true)}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => setShowBrowser(true)}>显示照片</div>
      { showBrowser && (
        <PictureBrowser 
          pictureUrls={detailInfo.picture_urls} 
          closeClick={e => setShowBrowser(false)}
        /> 
      )}
    </PicturesWrapper>
  )
})

export default DetailPictures