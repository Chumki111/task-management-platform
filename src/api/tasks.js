import axiosSecure from "."

// Save a room data in db
export const addTask = async taskData => {
    const { data } = await axiosSecure.post(`/tasks`, taskData)
    return data
  }