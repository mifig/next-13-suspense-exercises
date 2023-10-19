import InterviewWrapper from "./InterviewWrapper"
import { getComments } from '@/helpers/interview-helpers';
import Comment from "@/components/Comment/Comment";

export const dynamic = 'force-dynamic';

async function InterviewExercise() {
  const comments = await getComments();

  return (
    <InterviewWrapper>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </InterviewWrapper>
  )
}

export default InterviewExercise