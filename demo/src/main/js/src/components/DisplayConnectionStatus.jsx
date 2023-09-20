import React from 'react'
import { useVerifyConnectionQuery } from '../rest/mainApi'

function DisplayConnectionStatus() {

    const { data, isLoading, error } = useVerifyConnectionQuery();
    
    return isLoading || data?.status !== "OK" ? null : (            
        <>
            <label>CONNECTION: </label>
            <p>{data?.message || "No se pudo obtener el mensaje"}</p>
            <p>{error?.data || null}</p>
        </>
    )
}

export default DisplayConnectionStatus