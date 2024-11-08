import React from 'react'

export const TodoFooter = ({ nrTask }) => {
    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: 'black', fontSize: '20px' }}>
            Task left:{nrTask}
        </div>
    )
}