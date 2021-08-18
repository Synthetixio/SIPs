import * as React from 'react'

function SvgGithub(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>,
) {
  return (
    <svg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      width={16}
      height={15.604}
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path d="M8 0a8 8 0 00-8 8 8 8 0 005.47 7.59c.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82a7.67 7.67 0 012-.27 7.67 7.67 0 012 .27c1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117a3.1 3.1 0 01.82 2.147c0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0016 8a8 8 0 00-8-8" />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgGithub)
export default ForwardRef
