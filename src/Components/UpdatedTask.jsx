import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import axiosSecure from "../api";


const UpdatedTask = () => {
    const {_id} = useLoaderData();

    const { register, handleSubmit ,reset} = useForm();
    const navigate = useNavigate()
    const {user} = useAuth()
    const onSubmit = async (data) => {
        try {
            const taskItem = {
                email: user?.email,
                name: user?.displayName,
                photo: user?.photoURL,
                title: data.name,
                priority: data.priority,
                deadline: data.deadline,
                description: data.recipe // Assuming this field corresponds to the task description
            };

             const updatedTask = await axiosSecure.patch(`/tasks/${_id}`, taskItem);
           // On successful addition of task
            if(updatedTask.data.modifiedCount > 0){
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully created a task",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            navigate('/dashboard/previousTask');
        } catch (error) {
            // Error handling
            console.error(error);

            Swal.fire({
                position: "center",
                icon: "error",
                title: `${error.message || 'An error occurred'}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
   
    return (
        <div>
           <h1 className="text-center font-bold text-4xl">Update Your Task</h1>
           <div className="divider"></div> 
           <div className="px-12 py-3 bg-base-200 mx-14 mb-5 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Task Tile*</span>

                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Task Title" className="input input-bordered w-full" />

                    </div>

                    <div className="flex gap-6">
                        {/* category */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>

                            </label>

                            <select defaultValue="default" {...register("priority", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">High</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>


                            </select>


                        </div>

                        {/* price */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadline*</span>
                            </label>
                            <input
                                {...register("deadline", { required: true })}
                                type="date"
                                className="input input-bordered w-full"
                            />

                        </div>



                    </div>


                    {/* recipe details */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Description*</span>

                        </label>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-36" placeholder="Task Descriptions"></textarea>

                    </div>



                  <div className="form-control mt-6">
                  <button className="btn w-full btn-outline">
                        Add Item
                    </button>
                  </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatedTask;