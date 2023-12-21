import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
             <Helmet>
				<title>Dashboard | Details Task</title>

			</Helmet>
         <div className="flex justify-center items-center h-screen">
         <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data?.photo} alt="Shoes" className="rounded-xl" />
    
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Author Name: {data?.name}</h2>
    <p>Author Email : {data?.email}</p>
    <div className="divider"></div> 
    <div className="card-actions">
      <h2 className="text-lg font-bold underline uppercase">Task Details</h2>
  </div>
 </div>
 <div className="flex flex-col mx-2 cursor-pointer">
      <h2 className="text-lg font-bold pl-3 py-3">Task Title : {data?.title}</h2>
      <p className="text-base pl-3 py-3"><span className="font-bold">Task Description</span> : {data?.description}</p>
      <p className="text-base pl-3 py-3"><span className="font-bold">Task Deadline </span>: {data?.deadline}</p>
    </div>
  
   
</div>
         </div>
        </div>
    );
};

export default DetailsPage;