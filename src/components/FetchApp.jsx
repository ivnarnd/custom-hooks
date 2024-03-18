import{ useEffect } from 'react'
import { UseFetch } from '../hooks/UseFetch'

export const FetchApp = () => {
  const  urlBase = 'https://jsonplaceholder.typicode.com/users';
  const {data,isLoading,error,fetchData} = UseFetch();
  const body = {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
  useEffect(() => {
    fetchData(urlBase,"GET");
  }, []);

  return (
    <>
        <h2>Lista de Usuarios: </h2>
        {
            isLoading? <h2>Cargando...</h2>
            :error? <h2>Ha ocurrido un error : {error}</h2>
            :  
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {data.map(user=>{
                        return(
                            <tr key={user.id}>
                                <th scope="row" key={user.id}>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        )
                    })}
                </tbody>
    </table>
        }
    </>
      )
}
