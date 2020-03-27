import React, {useState} from 'react'
import { FaLeaf, FaDog, FaRegHandshake, FaTree} from 'react-icons/fa'
import {GiEarthAfricaEurope, GiNoseSide } from 'react-icons/gi'

const TagIcon = (props) => {
  const icons = {
    'Vegan': <FaLeaf className="tag-icon"/>,
    'cruelty free': <FaDog className="tag-icon"/>,
    'Fair Trade': <FaRegHandshake className="tag-icon"/>,
    'Natural': <FaTree className="tag-icon"/>,
    'Organic': <FaTree className="tag-icon"/>,
    'EcoCert': <GiEarthAfricaEurope className="tag-icon"/>,
    'Hypoallergenic': <GiNoseSide className="tag-icon"/>
  }

  if (!(props.tag in icons)) {
    return(<div></div>)
  } else {
    return(
      <div className="icon-container">
        {icons[props.tag]}
        <p className="icon-text">{props.tag}</p>
      </div>
    )
  }
  
}
export default TagIcon