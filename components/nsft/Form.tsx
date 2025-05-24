import React from 'react'

const Form = () => {
  return (
<div className="w-full flex justify-center py-8">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfrJe19X7qTHXDfz0IbDF-DMX0COgHeZ4Lki58Sx-2ols9abw/viewform?embedded=true"
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
