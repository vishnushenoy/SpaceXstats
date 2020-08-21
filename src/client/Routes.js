import React from 'react'
import Home,{loadData} from './components/HomeComponent/Home'

export default [
    {
        path:'/',
        component:Home,
        loadData:loadData
    }
]
