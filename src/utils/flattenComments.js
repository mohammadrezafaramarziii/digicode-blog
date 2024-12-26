export default function flattenComments(comments) {
  const result = [];

  const processComment = (comment, parentComment = {}) => {
    result.push({ ...comment, parentComment });
    if (comment.answers && comment.answers.length > 0) {
      comment.answers.forEach((answer) =>
        processComment(answer, {
          name: comment.user.name,
          text: comment.content.text,
          slug: comment?.post?.slug || "not-found",
        })
      );
    }
  };

  comments.forEach((comment) => processComment(comment));

  return result;
}
