
const Card = () => {
    return (
        <div className="ml-8">
            <div className="p-5 md:w-80 lg:w-96 shadow-xl ">
                <div className="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AhT-XBcwTPvMT-K4Kr3TpkfQ4HSq2sU1VmWgPsn6A7Ia-7wQi52Fd1Nr8B_tz6KQbwg&usqp=CAU" className="rounded-xl h-60 w-full md:w-80 lg:w-96" alt="" />
                </div>
                <div className="my-5">
                    <p className="text-2xl font-bold">Card Name</p>
                    <p>Description</p>
                </div>
                <div className="text-right">
                    <button className="btn btn- bg-blue-300">Click Me</button>
                </div>
            </div>
        </div>
    );
};

export default Card;