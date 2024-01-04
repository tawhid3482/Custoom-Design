import RouteLink from "./RouteLink";

const Navber2 = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
  ];
  return (
    <nav className="bg-gray-300  p-4  my-5 rounded-lg">
      <div className="">
        <ul className="flex items-center justify-center">
          {routes?.map((route) => (
            <RouteLink key={route.id} route={route}>
              {" "}
            </RouteLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navber2;
