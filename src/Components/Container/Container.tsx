import React from 'react'
import './Container.css'

interface ContainerData {
    component: React.ComponentType
}

export const Container = (params: ContainerData) => {

    return(
        <div id="liven-container">
            <div id="liven-container-inside">
                {<params.component/>}
            </div>
        </div>
    )

}