
import { Helmet } from "react-helmet-async";
import TaskRow from "../../Components/TaskRow";
import useAuth from "../../Hooks/useAuth";
import axiosSecure from "../../api";
import { useQuery } from "@tanstack/react-query";


const PreviousTask = () => {
    const { user } = useAuth()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data;


        }
    })
    
   return (
        <div>
             <Helmet>
				<title>Dashboard | Previous Task</title>

			</Helmet>
            <h2 className="text-lg font-bold ml-6">My Tasks <span className="text-base-300">( {users.length} )</span></h2>

            <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Priority
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Deadline
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    View Details
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                 {/* tasks colum */}
                 {
                    users?.map((task,index) =>  <TaskRow key={task._id} index={index} task={task} refetch={refetch}/>)
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PreviousTask;