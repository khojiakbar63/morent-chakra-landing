import React from 'react'

export const Section = ({children, className}) => {
  return (
    <section className={`bg-[#F6F7F9] ${className}`}>{children}</section>
  )
}
