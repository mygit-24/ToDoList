import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5177';

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    const Item={name:name,isCompleted:false}
    await axios.post(`/items`,Item) 
    
    return {};
  },

  setCompleted: async(id, isCompleted)=>{

    
    await axios.put(`/items/${id}/?isCompleted=${isCompleted}`) 
    return {};
  },

  deleteTask:async(id)=>{
    await axios.delete(`/items/${id}`) 
    return {};
  }
};