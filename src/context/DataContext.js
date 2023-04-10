import { createContext, useState, useEffect } from "react"

// Sanity
import sanityClient from "../client"

export const DataContext = createContext({})

const query = `
*[_type == "collection"]{
    _id,
  name,
    slug {
      current},
    description,
      image {
      asset ->{
        url
      }
      },
    "videos": videos[]-> {
      _id,
      number,
      name,
      url,
      "channel": channel->{
        _id,
        name,
        image {
      asset ->{
        url
      }
      },
      },
      "skills": skills[]->{
        _id,
        name
      },
        "languages": languages[]->{
        _id,
        name
        }
    }
  }`

export const DataContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([])
  console.log("COLLECTIONS: ", collections)

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => setCollections(data))
      .catch((err) => console.log("ERROR: ", err))
  }, [])

  return (
    <DataContext.Provider value={{ collections, setCollections }}>
      {children}
    </DataContext.Provider>
  )
}
