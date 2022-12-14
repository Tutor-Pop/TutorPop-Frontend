import React from 'react'
import { useSelector } from 'react-redux'

const LoadingSpinner = () => {

    const isLoading = useSelector(state => state.loading.value)

    return (
        <>
        {isLoading && <div className="loading-background">
            <div className="loading-spinner spinner-border text-warning" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            
        </div>}
        </>
    )
}

export default LoadingSpinner