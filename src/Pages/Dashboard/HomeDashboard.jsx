import { useQuery } from "@tanstack/react-query";

import axiosSecure from "../../api";

const HomeDashboard = () => {
    const { data: taks = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/tasks-stats`)
            return res.data;


        }
    })
  
    return (
        <div className="">
             <div className='mt-12'>
        {/* small cards */}
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              {/* <FaDollarSign className='w-6 h-6 text-white' /> */}
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Tasks
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {taks?.tasks}
              </h4>
            </div>
          </div>
        </div>
        
        </div>
        </div>
    );
};

export default HomeDashboard;