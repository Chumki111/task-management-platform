import PropTypes from 'prop-types';
import axiosSecure from '../api';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const TaskRow = ({ task,refetch}) => {
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/tasks/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='shadow-md my-6 mt-2'>
            <div className='flex justify-between mx-2'>
            <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                </div>
               
              <div className=''>
              <button className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                   <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                       <span
                           aria-hidden='true'
                           className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                       ></span>
                       <span onClick={() => handleDelete(task)} className='relative'>Delete</span>
                   </span>
               </button>
               <button className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                   <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                       <span
                           aria-hidden='true'
                           className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                       ></span>
                       <Link to={`/dashboard/updated/${task._id}`}>
                       <span className='relative'>Update</span>
                       </Link>
                   </span>
               </button>
              </div>
            </div>
        </div>
    );
};
TaskRow.propTypes={
    task:PropTypes.object,
    index:PropTypes.number,
    refetch:PropTypes.func
   
}

export default TaskRow;