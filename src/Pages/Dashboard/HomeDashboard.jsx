import { useQuery } from "@tanstack/react-query";

import axiosSecure from "../../api";
import useAuth from "../../Hooks/useAuth";
import { DragDropContext } from "react-beautiful-dnd";


const HomeDashboard = () => {

  const onDragEnd = (result) =>{
    const {destination,source} = result;
  }
  
  const { user } = useAuth()
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {

      const res = await axiosSecure.get(`/tasks/${user?.email}`)
      return res.data;


    }
  })

  
  
  return (
   <DragDropContext onDragEnd={onDragEnd}>
     <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 h-screen bg-white shadow-md">
        <h1 className="text-center font-bold text-2xl my-3"> TO Do ({tasks.length})</h1>
        {
          tasks?.map( task => <div  key={task._id} className="shadow-md my-2 mt-5 px-3 mx-4">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <p>{task.description}</p>
          </div>)
        }
        
      </div>
      <div className="col-span-1 h-screen bg-white shadow-md">
        <h1 className="text-center font-bold text-2xl my-3"> ONGOING</h1>
        
      </div>
      <div className="col-span-1 h-screen bg-white shadow-md">
        <h1 className="text-center font-bold text-2xl my-3"> COMPLETE</h1>
        
      </div>
     



    </div>
   </DragDropContext>
  );
};

export default HomeDashboard;