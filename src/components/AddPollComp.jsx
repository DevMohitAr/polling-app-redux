import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPoll } from "../actions/polls";
export default function AddPollComp() {
  const [options, setOptions] = React.useState({ a: "", b: "", c: "", d: "" });
  const [question, setQuestion] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = crypto.randomUUID();
  const polls = useSelector((store) => store.polls);
  const author = useSelector((store) => store.auth);
  const handleInputChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let poll = { question, options };
    poll = formatPoll(poll)
    dispatch(addPoll(poll, author, id));
    navigate("/");
    setOptions({ a: "", b: "", c: "", d: "" });
    setQuestion("");
  };
  return (
    <div className="h-screen grid place-content-center bg-slate-900">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-cyan-300 p-4 w-96 rounded-lg"
      >
        <div className="space-y-4">
          <label className="block text-lg text-slate-100" htmlFor="question">
            What is your question?
          </label>
          <input
            type="text"
            value={question}
            name="question"
            id="question"
            className="bg-slate-100 p-3 w-full"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <h3 className="mb-2 mt-4 text-lg text-slate-100">
          What are the options?
        </h3>
        <div className="space-y-5">
          <div>
            <label className="text-cyan-400 block mb-1 text-lg" htmlFor="a">
              A
            </label>
            <input
              className="bg-slate-100 p-2 w-full"
              type="text"
              name="a"
              id="a"
              onChange={handleInputChange}
            />
          </div>
          <div>
            {" "}
            <label className="text-cyan-400 block mb-1 text-lg" htmlFor="b">
              B
            </label>
            <input
              className="bg-slate-100 p-2 w-full"
              type="text"
              name="b"
              id="b"
              onChange={handleInputChange}
            />
          </div>
          <div>
            {" "}
            <label className="text-cyan-400 block mb-1 text-lg" htmlFor="c">
              C
            </label>
            <input
              className="bg-slate-100 p-2 w-full"
              type="text"
              name="c"
              id="c"
              onChange={handleInputChange}
            />
          </div>
          <div>
            {" "}
            <label className="text-cyan-400 block mb-1 text-lg" htmlFor="d">
              D
            </label>
            <input
              className="bg-gray-100 p-2 w-full"
              type="text"
              name="d"
              id="d"
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 p-2 text-gray-100 text-md rounded-lg"
            disabled={
              question === "" ||
              options.a === "" ||
              options.b === "" ||
              options.c === "" ||
              options.d === ""
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


const formatPoll = (poll,author,id)=>{
    const newPoll = {
      id,
      question: poll.question,
      author: author,
      aText: poll.options.a,
      aVotes: [],
      bText: poll.options.b,
      bVotes: [],
      cText: poll.options.c,
      cVotes: [],
      dText: poll.options.d,
      dVotes: [],
    };
    return newPoll
}