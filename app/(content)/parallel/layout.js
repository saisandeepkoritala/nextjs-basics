import React from 'react'

const ParallelLayout = ({children,latest,past}) => {
    return (
        <div>
            {children}
            {latest}
            {past}
        </div>
    )
}

export default ParallelLayout