export default function authAction(id) {
  return { type: SETAUTHEDUSER, id };
}

export const SETAUTHEDUSER = "SETAUTHEDUSER";
