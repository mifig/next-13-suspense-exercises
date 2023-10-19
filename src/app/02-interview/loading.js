import React from "react"
import Spinner from "@/components/Spinner/Spinner"
import InterviewWrapper from "./InterviewWrapper"

function LoadingCommentsSection() {
  return (
    <InterviewWrapper>
      <Spinner/>
    </InterviewWrapper>
  )
}

export default LoadingCommentsSection