import axios from '../axiosinstance/axiosInstance';


const UserServices =()=>{
  const services=()=>{
    return{
        getUser: async()=>{
          
            return await axios.get('/users');
        },
        addUser :async (data:object)=>{
            return await  axios.post('/users', data);
        },
        deleteUser: async (id:number)=> {
          return await axios.delete(`/users/${id}`);
        },
        updateUser: async (id: number, data: object) => {
          return await axios.put(`/users/${id}`, data);
        },
        getPeople: async()=>{
          return await axios.get('/peoples');
        },
        deletePeople: async (id:number)=> {
        return await axios.delete(`/peoples/${id}`);
        },
        addPeople :async (data:object)=>{
          return await  axios.post('/peoples', data);
        },

    };
  };
  return services;

}
export default UserServices;