import { useState } from "react";
import { getUsers } from "../config/axios";

export function SerchUser() {
  const [users, setUsers] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);

  async function handleGetUsers() {
    setIsFetching(true);
    const result = await getUsers();
    console.log("RESULTADO", result.users);

    setUsers(result.users);
    setIsFetching(false);
  }

  return (
    <div>
      <h2>Usuários do sistema</h2>
      {users &&
        users.map((user: any) => (
          <div key={user.id}>
            <p style={{ marginLeft: '40px'}}>{user.name}</p>
          </div>
        ))}
      <button onClick={handleGetUsers}>
        {isFetching ? "Buscando..." : "Buscar"}
      </button>
    </div>
  );
}
