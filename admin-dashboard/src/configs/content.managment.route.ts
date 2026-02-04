/// this will contain all the pages route related to content managemnt 
import EventManagementLayout from "@/layouts/eventmanagement.layout"
import EventManagement from "@/pages/EventManagement"

export const contentManagementRoutes= [
  { path: 'content/event', Component : EventManagementLayout, children : [
    { index : true, Component : EventManagement}
  ]}
]