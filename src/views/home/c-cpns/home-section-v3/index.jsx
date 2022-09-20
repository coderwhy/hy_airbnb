import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import { SectionV3Wrapper } from './style'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3