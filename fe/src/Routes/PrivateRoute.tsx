

import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute: React.FC<PropsWithChildren>  = ({children}) => {
  const user = useSelector((state: any) => state.mainState)
  return (
    <div>
       user ? <div> {children}</div>: <Navigate to = "/"/>
    </div>
  )
}

export default PrivateRoute