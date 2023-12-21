import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import handleAnswers from "../actions/answers";
export default function Poll() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const authUser = useSelector((store) => store.auth);
  const users = useSelector((store) => store.users);
  const polls = useSelector((store) => store.polls);
  const poll = polls[id];
  if (!poll) {
    return <p>this poll does not exist</p>;
  }

  const votekeys = ["aVotes", "bVotes", "cVotes", "dVotes"];
  const textKeys = ["aText", "bText", "cText", "dText"];

  const vote = votekeys.reduce((vote, key) => {
    if (poll[key]?.includes(authUser)) {
      return key[0];
    }
    return vote === null ? null : vote;
  }, null);

  const totalVotes = votekeys.reduce(
    (total, key) => total + poll[key]?.length,
    0
  );
  const handleAnswer = (answer) => {
    if (vote === null) {
      dispatch(
        handleAnswers({
          authUser,
          answer,
          id: poll.id,
        })
      );
    }
  };

  return (
    <div className="h-screen bg-slate-900 text-slate-100 grid place-content-center">
      <article className="flex flex-col gap-4">
        <h1 className="text-4xl text-cyan-300">{poll.question}</h1>
        <p className="text-center ">
          <span className="mr-3">By</span>
          <span className="text-green-500">{users[authUser].name}</span>{" "}
        </p>
        <ul className="flex flex-col gap-4 text-lg">
          {textKeys.map((key) => {
            const count = poll[key[0] + "Votes"]?.length;
            return (
              <li
                key={key}
                onClick={() => handleAnswer(key[0])}
                className="border-2 border-slate-400 p-2 hover:bg-slate-500 cursor-pointer"
              >
                {vote === null ? (
                  poll[key]
                ) : (
                  <div className="flex justify-between">
                    <span>{poll[key]}</span>
                    <span>
                      {getPercentage(count, totalVotes)}% ({count})
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export function getPercentage(count, total) {
  return total === 0 ? 0 : parseInt((count / total) * 100, 10);
}
