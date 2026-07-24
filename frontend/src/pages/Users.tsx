import { useEffect, useState } from "react";


interface User {

  id: number;
  username: string;
  email: string;
  role: string;

}


export default function Users() {


  const [users, setUsers] = useState<User[]>([]);



  useEffect(() => {


    fetch("http://localhost:8081/api/users")

      .then(response => response.json())

      .then(data=>{

      console.log("USERS FROM API:", data);

      setUsers(data as User[]);

      })

      .catch(error => {

        console.log(error);

      });


  }, []);




  return (

    <div className="p-6">


      <h1 className="text-3xl font-bold mb-6">
        Users Management
      </h1>




      <div className="bg-white rounded-xl shadow overflow-hidden">



        <table className="w-full">



          <thead className="bg-slate-200">


            <tr>


              <th className="p-3 text-left">
                ID
              </th>


              <th className="p-3 text-left">
                Username
              </th>


              <th className="p-3 text-left">
                Email
              </th>


              <th className="p-3 text-left">
                Role
              </th>


            </tr>


          </thead>





          <tbody>


            {

              users.map(user => (


                <tr

                  key={user.id}

                  className="border-b"

                >


                  <td className="p-3">

                    {user.id}

                  </td>




                  <td className="p-3">

                    {user.username}

                  </td>




                  <td className="p-3">

                    {user.email}

                  </td>




                  <td className="p-3">


                    <span className="px-3 py-1 rounded bg-blue-100 text-blue-700">

                      {user.role}

                    </span>


                  </td>




                </tr>


              ))

            }


          </tbody>



        </table>



      </div>



    </div>


  );


}
