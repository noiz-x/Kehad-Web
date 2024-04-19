import React from "react";

import Button from "../../layout/button";
import classes from "./pagination.module.css";
import MobilePagination from "../Paginations/mobilePagination";

const Pagination = function (props) {
  const { totalPosts, postsPerPage, backDisable, nextDisable, next, back } = props;
  // console.log(totalPosts, postsPerPage);
  console.log(backDisable)
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  // console.log(pageNumbers);
  const mystyle = {
      padding: "10px",
      fontSize: "small"
    };
  return (
    <div className={classes.pagination}>
      {/* <a className={classes["pagination__arrow--left"]}> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="81"
        viewBox="0 0 43 81"
        // fill="none"
        className={classes["pagination__arrow--left"]}
        onClick={back}
        fill="#07C51A"
        // fill={backDisable ? "#07c51a" : "#484747"}
      >
        <path d="M41.4446 7.44089C41.8055 7.05901 42.0876 6.60978 42.2749 6.11887C42.4622 5.62795 42.5509 5.10496 42.536 4.57975C42.5212 4.05455 42.403 3.53741 42.1883 3.05786C41.9736 2.57832 41.6665 2.14576 41.2846 1.78489C40.9028 1.42402 40.4535 1.1419 39.9626 0.954635C39.4717 0.767373 38.9487 0.678637 38.4235 0.693495C37.8983 0.708352 37.3812 0.826511 36.9016 1.04123C36.4221 1.25594 35.9895 1.56301 35.6286 1.94489L1.62865 37.9449C0.926503 38.6876 0.535278 39.6708 0.535278 40.6929C0.535278 41.7149 0.926503 42.6982 1.62865 43.4409L35.6286 79.4449C35.9871 79.8351 36.4196 80.1503 36.9009 80.372C37.3822 80.5937 37.9028 80.7175 38.4324 80.7363C38.9619 80.7551 39.49 80.6685 39.9858 80.4816C40.4816 80.2946 40.9354 80.0109 41.3206 79.6471C41.7059 79.2833 42.0151 78.8466 42.2301 78.3623C42.4452 77.8779 42.5619 77.3557 42.5734 76.8259C42.585 76.2962 42.4911 75.7694 42.2973 75.2761C42.1036 74.7829 41.8137 74.3331 41.4446 73.9529L10.0366 40.6929L41.4446 7.44089Z" />
      </svg>
      {/* </a> */}
      {/* <a className={classes["pagination__arrow--right"]}> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="96"
        height="97"
        viewBox="0 0 96 97"
        fill="#07c51a"
        className={classes["pagination__arrow--right"]}
        onClick={next}
        // fill={nextDisable ? "#484747" : "#07c51a"}
      >
        <path d="M45.0921 15.4409C44.7312 15.059 44.4491 14.6098 44.2618 14.1189C44.0746 13.628 43.9858 13.105 44.0007 12.5798C44.0156 12.0545 44.1337 11.5374 44.3484 11.0579C44.5631 10.5783 44.8702 10.1458 45.2521 9.78489C45.634 9.42402 46.0832 9.1419 46.5741 8.95464C47.065 8.76737 47.588 8.67864 48.1132 8.69349C48.6384 8.70835 49.1556 8.82651 49.6351 9.04123C50.1147 9.25594 50.5472 9.56301 50.9081 9.94489L84.9081 45.9449C85.6102 46.6876 86.0015 47.6708 86.0015 48.6929C86.0015 49.7149 85.6102 50.6982 84.9081 51.4409L50.9081 87.4449C50.5496 87.8351 50.1171 88.1503 49.6358 88.372C49.1545 88.5937 48.634 88.7175 48.1044 88.7363C47.5748 88.7551 47.0468 88.6685 46.5509 88.4816C46.0551 88.2946 45.6014 88.0109 45.2161 87.6471C44.8308 87.2833 44.5217 86.8466 44.3066 86.3623C44.0915 85.8779 43.9749 85.3557 43.9633 84.8259C43.9518 84.2962 44.0456 83.7694 44.2394 83.2761C44.4332 82.7829 44.723 82.3331 45.0921 81.9529L76.5001 48.6929L45.0921 15.4409Z" />
      </svg>
      {/* </a> */}
      {/* <button onClick={paginate(3)}>+</button> */}
      {/* {props.arrow} */}
      <div className={classes["pagination__button-text"]}>
        {/* <Button
          style={mystyle}
          name={"Previous"}
          action={back}
          altClass={backDisable ? "#07c51a" : "#484747"}
        ></Button>
        <Button
          style={mystyle}
          name={"Next"}
          action={next}
          altClass={nextDisable ? "#484747" : "#07c51a"}
        ></Button> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="81"
          viewBox="0 0 43 81"
          // fill="none"
          className={classes["pagination__small--left"]}
          onClick={back}
          fill="#07C51A"
          // fill={backDisable ? "#07c51a" : "#484747"}
        >
          <path d="M41.4446 7.44089C41.8055 7.05901 42.0876 6.60978 42.2749 6.11887C42.4622 5.62795 42.5509 5.10496 42.536 4.57975C42.5212 4.05455 42.403 3.53741 42.1883 3.05786C41.9736 2.57832 41.6665 2.14576 41.2846 1.78489C40.9028 1.42402 40.4535 1.1419 39.9626 0.954635C39.4717 0.767373 38.9487 0.678637 38.4235 0.693495C37.8983 0.708352 37.3812 0.826511 36.9016 1.04123C36.4221 1.25594 35.9895 1.56301 35.6286 1.94489L1.62865 37.9449C0.926503 38.6876 0.535278 39.6708 0.535278 40.6929C0.535278 41.7149 0.926503 42.6982 1.62865 43.4409L35.6286 79.4449C35.9871 79.8351 36.4196 80.1503 36.9009 80.372C37.3822 80.5937 37.9028 80.7175 38.4324 80.7363C38.9619 80.7551 39.49 80.6685 39.9858 80.4816C40.4816 80.2946 40.9354 80.0109 41.3206 79.6471C41.7059 79.2833 42.0151 78.8466 42.2301 78.3623C42.4452 77.8779 42.5619 77.3557 42.5734 76.8259C42.585 76.2962 42.4911 75.7694 42.2973 75.2761C42.1036 74.7829 41.8137 74.3331 41.4446 73.9529L10.0366 40.6929L41.4446 7.44089Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="97"
          viewBox="0 0 96 97"
          fill="#07c51a"
          className={classes["pagination__small--right"]}
          onClick={next}
          // fill={nextDisable ? "#484747" : "#07c51a"}
        >
          <path d="M45.0921 15.4409C44.7312 15.059 44.4491 14.6098 44.2618 14.1189C44.0746 13.628 43.9858 13.105 44.0007 12.5798C44.0156 12.0545 44.1337 11.5374 44.3484 11.0579C44.5631 10.5783 44.8702 10.1458 45.2521 9.78489C45.634 9.42402 46.0832 9.1419 46.5741 8.95464C47.065 8.76737 47.588 8.67864 48.1132 8.69349C48.6384 8.70835 49.1556 8.82651 49.6351 9.04123C50.1147 9.25594 50.5472 9.56301 50.9081 9.94489L84.9081 45.9449C85.6102 46.6876 86.0015 47.6708 86.0015 48.6929C86.0015 49.7149 85.6102 50.6982 84.9081 51.4409L50.9081 87.4449C50.5496 87.8351 50.1171 88.1503 49.6358 88.372C49.1545 88.5937 48.634 88.7175 48.1044 88.7363C47.5748 88.7551 47.0468 88.6685 46.5509 88.4816C46.0551 88.2946 45.6014 88.0109 45.2161 87.6471C44.8308 87.2833 44.5217 86.8466 44.3066 86.3623C44.0915 85.8779 43.9749 85.3557 43.9633 84.8259C43.9518 84.2962 44.0456 83.7694 44.2394 83.2761C44.4332 82.7829 44.723 82.3331 45.0921 81.9529L76.5001 48.6929L45.0921 15.4409Z" />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
