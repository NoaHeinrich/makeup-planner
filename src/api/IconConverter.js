import React from 'react'
import { FaLeaf, FaDog, FaRegHandshake, FaTree} from 'react-icons/fa'
import {GiEarthAfricaEurope, GiNoseSide } from 'react-icons/gi'

const iconize = (tags) => {
  const icons = {
    'Vegan': <FaLeaf />,
    'cruelty free': <FaDog />,
    'Fair Trade': <FaRegHandshake />,
    'Natural': <FaTree />,
    'Organic': <FaTree />,
    'EcoCert': <GiEarthAfricaEurope />,
    'Hypoallergenic': <GiNoseSide />
  }
  return tags.map(tag => {
    return icons[tag]
  })
}

export default iconize