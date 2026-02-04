/// this will contain all the pages route related to content managemnt 

import UserManagementLayout from "@/layouts/usermanagemen.layout"
import UserManagement from "@/pages/UserManagement"

export const contentManagementRoutes= [
  { path: 'content/user', Component : UserManagementLayout, children : [
    { index : true, Component : UserManagement}
  ]}
]