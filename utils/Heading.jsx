import React from 'react'

const Heading = ({title, description, keywords}) => {
  return (
    <>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property="og:image" content="https://kyawswarlynn.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fksl.ae30a3ea.jpg&w=640&q=75" />
        <meta property="og:type" content="website" />
    </>
  )
}

export default Heading