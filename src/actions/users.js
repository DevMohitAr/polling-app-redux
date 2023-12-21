export const RECEIVEUSERS= "RECEIVEUSERS"

export default function users(users) {
  return ({
    type:RECEIVEUSERS,
    users
  });
}
