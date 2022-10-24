import React, { useEffect, useState } from "react"

import Social from "modules/Social"
import Layout from "components/Layout"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"

const ProfileIndex = () => {
  const dispatch = useDispatch();

  const [sidebarToggler, setSidebarToggler] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Layout
      sidebarToggler={sidebarToggler}
      banner={<div></div>}
      onClick={() => setSidebarToggler(!sidebarToggler)}
    >
      <Social />
    </Layout>
  )
}

export default ProfileIndex