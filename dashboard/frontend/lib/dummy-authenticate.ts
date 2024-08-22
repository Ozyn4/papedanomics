import { users } from "@/data/users";

interface Props {
  username: string,
  password: string
}

export const localAuthenticate = ({ username, password } : Props) => {
  const filteredUser = users.filter((user) => user.username === username);
  if(filteredUser && password == 'hahaha'){
    return filteredUser[0]
  } else {
    return null
  }
}