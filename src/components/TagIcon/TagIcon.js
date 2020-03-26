import React, {useState} from 'react'
import { FaLeaf, FaDog, FaRegHandshake, FaTree} from 'react-icons/fa'
import {GiEarthAfricaEurope, GiNoseSide } from 'react-icons/gi'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const TagIcon = (props) => {
  const icons = {
    'Vegan': <FaLeaf />,
    'cruelty free': <FaDog />,
    'Fair Trade': <FaRegHandshake />,
    'Natural': <FaTree />,
    'Organic': <FaTree />,
    'EcoCert': <GiEarthAfricaEurope />,
    'Hypoallergenic': <GiNoseSide />
  }
  const [popover, setPopover] = useState(false)
  const toggle = () => setPopover(!popover)
  return(
    <div>
      {icons[props.tag]}
      <Popover plcement="bottom" isOpen={popover}>

      </Popover>
    </div>
  )
}