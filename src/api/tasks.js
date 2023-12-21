import axiosSecure from "."

// Save a room data in db
export const addTask = async taskData => {
    const { data } = await axiosSecure.post(`/tasks`, taskData)
    return data
  }


  // Fetch all tasks
export const getAllTasks = async email => {
  const { data } = await axiosSecure(`/tasks/${email}`)
  return data
}
// Fetch single task data from db
export const getTask = async id => {
  const { data } = await axiosSecure(`/task/${id}`)
  return data
}