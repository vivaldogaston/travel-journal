import React from "react";
import styled from "styled-components";
import pin from "./images/pin.png";
const Card = (props) => {
  return (
    <StyledCard>
      <Img src={props.imageUrl} />
      <InfoWrapper>
        <Location>
          <img src={pin} width={10} />
          {props.location}
        </Location>
        <GoogleMaps>
          <a href="https://goo.gl/maps/cPsx25w4p2ULFRzd8" target={"_blank"}>
            View on Google Maps
          </a>
        </GoogleMaps>
        <label>{props.title}</label>

        <p>{props.description}</p>
      </InfoWrapper>
    </StyledCard>
  );
};
export default Card;
const StyledCard = styled.div`
  width: 50%;
  height: 200px;
  border: solid 0px red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const Img = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 5px;
  border: solid 1px;
  filter: drop-shadow(1px 2px 4px grey);
  flex: 1;
`;
const InfoWrapper = styled.div`
  border: solid 0px;
  flex: 3;
  height: 80%;
  padding: 10px;
  margin-left: 10px;
  label {
    display: block;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
  }
  p {
    font-size: 17px;
  }
`;
const Location = styled.span`
  text-transform: uppercase;
  img {
    margin-right: 5px;
  }
`;

const GoogleMaps = styled.span`
  margin-left: 15px;
  font-size: 14px;
  font-weight: normal;
  a {
    color: grey;
  }
`;
