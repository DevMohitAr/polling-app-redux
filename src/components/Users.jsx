import React from "react";
import { useSelector } from "react-redux";
export default function Users() {
  const users = useSelector((store) => store.users);

  return (
    <main className="bg-slate-950 h-screen">
      <div className="p-1">
        <h1 className="text-slate-50 text-center mt-10 mb-10 text-4xl text-slate-300">
          Users
        </h1>
      </div>

      <div className="grid place-content-center  gap-y-10">
        {Object.keys(users).map((id) => {
          const { name, avatarURL, polls, answers } = users[id];

          return (
            <aside
              key={name}
              className="grid grid-cols-[1fr_auto_auto_1fr] justify-items-center gap-x-6 border-2 rounded-lg p-5 border-cyan-300 "
            >
              <div></div>
              <div className="justify-self-start">
                <img
                  src={avatarURL}
                  alt={name}
                  className="w-14 h-14 rounded-full block object-contain"
                />
              </div>

              <div className="text-slate-50">
                {" "}
                <h3 className="text-2xl">{name}</h3>
                <div className="flex gap-4">
                  <p className="text-slate-400">{polls.length} polls</p>
                  <p className="text-cyan-500">
                    {Object.keys(answers).length} Answers
                  </p>
                </div>
              </div>
              <div></div>
            </aside>
          );
        })}
      </div>
    </main>
  );
}
