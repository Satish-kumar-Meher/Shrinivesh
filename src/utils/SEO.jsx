import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({tittle,description}) {
  return (
    <Helmet>
        <title>{tittle}</title>
        <meta 
            name='description'
            content={description}
        />    
    </Helmet>
  )
}

export default SEO
