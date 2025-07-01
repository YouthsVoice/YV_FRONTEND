import React from 'react'

const Form = () => {
  return (
<div className="w-full flex justify-center py-8">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf6fjn43z23OOzcuLUFvrJpumlltSSSzFOaz5wcyxAwg8OzEA/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="border-0 rounded-lg shadow-lg"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  )
}

export default Form
