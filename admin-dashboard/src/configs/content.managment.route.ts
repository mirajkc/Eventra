/// this will contain all the pages route related to content managemnt 

import EventManagementLayout from "@/layouts/eventmanagement.layout"
import OrganizationManagementLayout from "@/layouts/organization.management.layout"
import UserManagementLayout from "@/layouts/usermanagemen.layout"
import EventManagement from "@/pages/EventManagement"
import OrganizationManagement from "@/pages/OrganizationManagement"
import UserManagement from "@/pages/UserManagement"

export const contentManagementRoutes= [
  { path: 'content/user', Component : UserManagementLayout, children : [
    { index : true, Component : UserManagement}
  ]},
  { path: 'content/organization', Component : OrganizationManagementLayout, children : [
    { index : true, Component : OrganizationManagement}
  ]},
  { path: 'content/event', Component : EventManagementLayout, children : [
    { index : true, Component : EventManagement}
  ]}
]