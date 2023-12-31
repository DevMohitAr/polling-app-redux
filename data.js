export let users = {
  devmohitar: {
    id: " devmohitar",
    name: "Mohit Arora",
    avatarURL: "./src/assets/manu.jpeg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "a",
      "6ni6ok3ym7mf1p33lnez": "a",
      am8ehyc8byjqgar0jgpub9: "b",
      loxhs1bqm25b708cmbf3g: "d",
    },
    polls: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  shalludesign: {
    id: "shalludesign",
    name: "Shallu Arora",
    avatarURL: "./src/assets/image2.png",
    answers: { vthrdm985a262al8qx3do: "a", xj352vofupe1dqz9emx13r: "a" },
    polls: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  rishuarora: {
    id: "rishuarora",
    name: "Riyansh Arora",
    avatarURL: "./src/assets/image1.png",
    answers: {
      xj352vofupe1dqz9emx13r: "a",
      vthrdm985a262al8qx3do: "d",
      "6ni6ok3ym7mf1p33lnez": "d",
    },
    polls: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};
export let polls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    question: "Who is the best basketball player to ever live?",
    author: "devmohitar",
    timestamp: 1467166872634,
    aText: "Michael Jordan",
    aVotes: ["devmohitar"],
    bText: "Jimmer Fredette",
    bVotes: [],
    cText: "Lebron James",
    cVotes: [],
    dText: "Kobe Bryant",
    dVotes: [],
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    question: "How will we build UIs in 2019?",
    author: "shalludesign",
    timestamp: 1468479767190,
    aText: "React.js",
    aVotes: ["devmohitar"],
    bText: "ReasonML",
    bVotes: [],
    cText: "Vue.js",
    cVotes: [],
    dText: "Angular.js",
    dVotes: ["shalludesign"],
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    question: "What is your favorite book?",
    author: "devmohitar",
    timestamp: 1488579767190,
    aText: "Harry Potter",
    aVotes: ["devmohitar"],
    bText: "Lord of the Rings",
    bVotes: ["devmohitar"],
    cText: "To Kill a Mockingbird",
    cVotes: [],
    dText: "Other",
    dVotes: [],
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    question: "Which artist do you prefer?",
    author: "rishuarora",
    timestamp: 1482579767190,
    aText: "Chance the Rapper",
    aVotes: [],
    bText: "Anderson .Paak",
    bVotes: [],
    cText: "Childish Gambino",
    cVotes: [],
    dText: "Kanye West",
    dVotes: ["devmohitar"],
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    question: "Where is the best place to live?",
    author: "rishuarora",
    timestamp: 1489579767190,
    aText: "Eden, Utah",
    aVotes: ["rishuarora"],
    bText: "Kauai, HI",
    bVotes: [],
    cText: "San Francisco, CA",
    cVotes: [],
    dText: "Other",
    dVotes: ["shalludesign"],
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    question: "Who will win the election in 2020?",
    author: "shalludesign",
    timestamp: 1493579767190,
    aText: "Kanye West",
    aVotes: ["shalludesign"],
    bText: "Donald Trump",
    bVotes: [],
    cText: "Oprah Winfrey",
    cVotes: ["rishuarora"],
    dText: "Dwayne Johnson",
    dVotes: [],
  },
};
export const  formatUsers=(users)=> {
  return Object.keys(users).reduce((formattedUsers, id) => {
    const user = users[id];

    formattedUsers[id] = {
      ...user,
      answers: Object.keys(user.answers),
    };

    return formattedUsers;
  }, {});
}