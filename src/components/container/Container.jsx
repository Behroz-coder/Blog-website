import React from 'react'


//  ** Container component for wrapping content with a max-width and centered alignment.
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container