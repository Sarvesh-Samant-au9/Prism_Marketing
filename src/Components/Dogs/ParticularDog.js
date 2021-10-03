import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

const ParticularDog = ({ path }) => {
  const history = useHistory();
  const { currentDog } = useSelector((state) => state.dogs);
  const exitHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // console.log(currentDog);
  return (
    <CardShadow className="shadow" onClick={exitHandler}>
      <DetailCard>
        <h3 className="text-center">{path}</h3>
        <div className="row">
          {currentDog &&
            currentDog.message.map((image) => (
              <>
                <div className="col-md-2">
                  <img
                    src={image}
                    alt={`${path}dog_image`}
                    style={{ width: "100%" }}
                  />
                </div>
              </>
            ))}
        </div>
      </DetailCard>
    </CardShadow>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 120vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5252c9;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const DetailCard = styled.div`
  margin-top: 10vh;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  min-height: 70%;
  background: #e5e3ff;
  position: absolute;
  left: 10%;
  color: black;
  padding-bottom: 20px;
  img {
    width: 100%;
  }
`;

export default ParticularDog;
