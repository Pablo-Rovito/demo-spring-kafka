import React from 'react'
import { useGetMessageQuery } from '../rest/mainApi'

function DisplayTopicMessage() {

    const { data, isLoading, error, refetch } = useGetMessageQuery();

   return isLoading || data?.status !== "OK" ? null : (            
        <>
            <label>LAST MESSAGE FROM TOPIC: </label>
            <button onClick={() => refetch()}>Get message!</button>
            <p>{data?.message || "No se pudo obtener el mensaje"}</p>
            <p>{error?.data || null}</p>
        </>
    )
}

export default DisplayTopicMessage