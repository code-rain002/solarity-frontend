import Label from 'components/Marketplace/NFTItems/Header/Label'
import React from 'react'

function Header({title, count}) {
  return (
    <Label name={title} count={count} />
  )
}

export default Header