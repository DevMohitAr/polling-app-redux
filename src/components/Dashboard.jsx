import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const [list, setList] = React.useState("unansweredList");
  const authUser = useSelector((store) => store.auth);
  let users = useSelector((store) => store.users);

  const answers = users[authUser]?.answers;

  console.log("userAnswers", answers);
  const allPolls = useSelector((store) => store.polls);
  const pollsIds = Object.keys(allPolls);
  const answeredList = answers?.map((id) => allPolls[id]);
  const unansweredList = pollsIds
    .filter((pollId) => !answers.includes(pollId))
    .map((id) => allPolls[id]);
console.log("un",unansweredList);
  const questions = { answeredList, unansweredList };

  return (
    <main className="bg-slate-900 h-screen text-slate-100 text-center p-1 ">
      <div className="mt-6 flex gap-10 justify-center text-2xl text-slate-100 mb-10">
        <button
          style={{ color: list === "answeredList" ? "#38bff8" : "" }}
          onClick={() => setList("answeredList")}
        >
          Answered
        </button>
        <button
          style={{ color: list === "unansweredList" ? "#fb7185" : "" }}
          onClick={() => setList("unansweredList")}
        >
          UnAnswered
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-8 ">
          {questions[list]?.map((poll) => {
            return (
              <li className="text-xl" key={poll.id}>
                <Link to={`/users/${poll.id}`}>{poll.question}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
function formatUsers(users) {
  return Object.keys(users).reduce((formattedUsers, id) => {
    const user = users[id];

    formattedUsers[id] = {
      ...user,
      answers: Object.keys(user.answers),
    };

    return formattedUsers;
  }, {});
}
