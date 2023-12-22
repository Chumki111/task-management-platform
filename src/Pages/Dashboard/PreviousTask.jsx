
import { Helmet } from "react-helmet-async";
import TaskRow from "../../Components/TaskRow";
import useAuth from "../../Hooks/useAuth";
import axiosSecure from "../../api";
import { useQuery } from "@tanstack/react-query";


const PreviousTask = () => {
    const { user } = useAuth()
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data;


        }
    })
    
   return (
        <div>
             <Helmet>
				<title>Dashboard</title>

			</Helmet>
<div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 h-screen bg-white shadow-md">
        <h1 className="text-center font-bold text-2xl my-3"> TO Do ({tasks.length})</h1>
        {
                   tasks?.map((task,index) =>  <TaskRow key={task._id} index={index} task={task} refetch={refetch}/>)
                 }
        
      </div>
      <div className="col-span-1 h-screen bg-white shadow-md">
        <h1 className="text-center font-bold text-2xl my-3"> ONGOING</h1>
        
      </div>
      <div className="col-span-1 h-screen bg-white shadow-md">
        <h1 className="text-center font-bold text-2xl my-3"> COMPLETE</h1>
        
      </div>
     



    </div>
      
        </div>
    );
};

export default PreviousTask;