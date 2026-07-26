import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Users Management
        </h1>

        <span className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Total Users: {users.length}
        </span>

      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

        {loading ? (

          <div className="p-8 text-center">
            Loading users...
          </div>

        ) : (

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Username</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="p-4">{user.id}</td>

                  <td className="p-4 font-medium">
                    {user.username}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">

                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                      {user.role}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}
