import React from "react"
import { useGetDogsQuery } from "../../hooks/useApollo"

export const Dogs = () => {
  const { data, loading } = useGetDogsQuery()

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.dogs?.map(({ id, name, age, isPedigree }) => (
          <div key={id}>
            <h2>{name}</h2>
            <h5>{age}</h5>
            <h5>{isPedigree}</h5>
          </div>
        ))
      )}
    </div>
  )
}

export default Dogs
