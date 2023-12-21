export const ADDANSWERS = "ADDANSWERS";

export default function handleAnswers({ authUser, id, answer }) {
  return {
    type: ADDANSWERS,
    authUser,
    id,
    answer,
  };
}
