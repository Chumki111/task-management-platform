import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import axiosSecure from "../../api";


const MyTasks = () => {

    const { user } = useAuth()
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data;


        }
    })
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tasks?.map(task => <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{task?.title}</h2>
                      <p>{task?.description}</p>
                     <p>{task?.deadline}</p>
                    </div>
                  </div>)
                }

            </div>
            
        </div>
    );
};

export default MyTasks;