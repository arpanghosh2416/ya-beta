import React from 'react'

const BookConsultationButton = () => {
  return (
    <button className="relative mt-[1rem] w-[100%] max-w-[200px] rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-2 md:px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-2 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:opacity-100 after:blur-md after:transition-opacity after:duration-300 hover:from-purple-600 hover:to-blue-500 hover:after:opacity-0">
            Book Consultation
          </button>
  )
}

export default BookConsultationButton
