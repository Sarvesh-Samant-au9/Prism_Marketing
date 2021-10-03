import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllDogs from "../Components/Dogs/AllDogs";
import { getAllDogs } from "../Redux/Actions/dogsAction";
import { useLocation } from "react-router-dom";
import ParticularDog from "../Components/Dogs/ParticularDog";
const Home = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // console.log(path);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const { isLoading, dogs } = useSelector((state) => state.dogs);

  return (
    <div className="container">
      {isLoading ? (
        <h3 className="text-center">Loading.. </h3>
      ) : (
        <>
          {path && <ParticularDog path={path} />}
          {dogs.status === "success" ? (
            <AllDogs dogs={dogs.message} />
          ) : (
            <h4>Something Went Wrong</h4>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
