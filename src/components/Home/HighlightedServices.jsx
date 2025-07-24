import React from 'react'
import ComSlider from '../shared/ComSlider'
import { highlightedServiceRow1, highlightedServiceRow2 } from '@/utils/data/data'

const HighlightedServices = () => {
  return (
    <section className="mb-16">
      <div className="container-custom mx-auto">
        <p className="font-archivo text-gradient text-xl font-bold pb-1 text-center">
           Highlighted Services
        </p>
        <p className="text-[#555555] text-sm font-medium font-archivo mb-8 text-center">
          Our highlighted services include advanced diagnostics, specialized treatments, and personalized patient care across all departments.
        </p>
      </div>
      <div className="pl-4 space-y-3">
        <ComSlider components={highlightedServiceRow1} width="200px" />
        <ComSlider
          components={highlightedServiceRow2}
          width="200px"
          reverse={true}
        />
      </div>
    </section>
  )
}

export default HighlightedServices