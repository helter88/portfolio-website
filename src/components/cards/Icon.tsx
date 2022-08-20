import React from 'react'
import {IconName, icons} from './PortfolioCardIcons';


interface Props {
    type: IconName
} 


const Icon: React.FC = ({type}) => {
    const Image = icons[type]
  return (
    <div>
      <Image fill='#D3F4FF'/>
    </div>
  )
}

export default Icon

