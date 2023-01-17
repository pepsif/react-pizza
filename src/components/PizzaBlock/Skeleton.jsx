import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={460}
        viewBox="0 0 260 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#d9d9d9"
        {...props}
    >
        <circle cx="125" cy="105" r="100" />
        <rect x="0" y="219" rx="7" ry="7" width="260" height="18" />
        <rect x="0" y="252" rx="26" ry="26" width="261" height="55" />
        <rect x="2" y="322" rx="30" ry="30" width="125" height="55" />
        <rect x="133" y="325" rx="24" ry="24" width="127" height="53" />
    </ContentLoader>
)

export default Skeleton

