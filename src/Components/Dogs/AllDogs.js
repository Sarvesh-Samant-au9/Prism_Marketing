import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getParticularDog } from "../../Redux/Actions/dogsAction";

const AllDogs = ({ dogs }) => {
  const dispatch = useDispatch();
  const getDogsArray = Object.keys(dogs);
  // console.log(getDogsArray);
  const getDetailHandler = (name) => {
    document.body.style.overflow = "hidden";
    dispatch(getParticularDog(name));
  };

  const makeFirstLetterCapital = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div>
      <h3 className="text-center py-2">Dogs Breeds</h3>
      <div className="row">
        {getDogsArray.map((eachDog, index) => {
          return (
            <div className="col-md-3 p-2" key={index}>
              <div className="card" onClick={() => getDetailHandler(eachDog)}>
                <div className="card-body">
                  <h5>
                    <Link to={`/dog/${eachDog}`} style={{ color: "Red" }}>
                      {makeFirstLetterCapital(eachDog)}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllDogs;
