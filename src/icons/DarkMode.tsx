import * as React from 'react'

function SvgDarkMode(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      width={16}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      ref={svgRef}
      {...props}
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgDarkMode)
export default ForwardRef
