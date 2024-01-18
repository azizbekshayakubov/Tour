

import React from 'react'
import Masonry,{ ResponsiveMasonry } from 'react-responsive-masonry' {ResponsiveMasonry }  from "react-responsive-masonry"

const MasonryImagesGallery = () => {
  return (
    
    <ResponsiveMasonry columnsCountBreakPoints={{350:1 , 768:3, 992:4}}>
        <Masonry gutter='1rem'>

        </Masonry>

    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery