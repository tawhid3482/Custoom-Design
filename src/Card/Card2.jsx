const Card2 = () => {
  return (
    <div>
      <div className="p-4 md:w-80 lg:w-96 shadow-xl ">
        <div className=" ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQRjrjNOapDStOEE65i9gp1KSzC1hMlGlFw&usqp=CAU" className="w-full md:w-80 lg:w-96 h-60 rounded-xl" alt="" />
        </div>
        <div className="text-center my-5">
          <p className="text-2xl font-bold">Card Name</p>
          <p>Description</p>
        </div>
        <div className="text-center">
          <button className="btn  bg-blue-300">Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
