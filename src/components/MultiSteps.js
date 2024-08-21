import React from "react";

const MultiSteps = ({ step }) => {
  return (
    <div className="multiSteps ">
      <div className="multiSteps__inner">
        <div className="">
          <div
            className="multiSteps__inner__count"
            style={{
              backgroundColor: `${
                step == 1 ? "orange" : step > 1 ? "green" : null
              }`,
            }}
          >
            {/* <span style={{color:'white'}}> */}
            {step == 1 ? (
              <span style={{color:'white'}}>1</span> 
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            )}
            {/* </span> */}
          </div>
          <b>Step 1</b>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 jKmKoK"
          >
            <title>chevron-right</title>
            <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
          </svg>
        </div>
      </div>
      <div className="multiSteps__inner ">
        <div className="">
          <div
            className="multiSteps__inner__count"
            style={{
              backgroundColor: `${
                step == 2
                  ? "orange"
                  : step > 2
                  ? "green"
                  : "rgba(163, 163, 163, 0.746)"
              }`,
            }}
          >
            {step > 2 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              <b
                style={{
                  color: `${
                    step == 2 ? "white" : "rgba(163, 163, 163, 2.746)"
                  }`,
                }}
              >
                2
              </b>
            )}
          </div>
          <b
            style={{
              color: `${step < 2 ? "rgba(163, 163, 163, 2.746)" : "black"}`,
            }}
          >
            Step 2
          </b>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 jKmKoK"
          >
            <title>chevron-right</title>
            <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
          </svg>
        </div>
      </div>
      <div className="multiSteps__inner ">
        <div className="">
        <div
            className="multiSteps__inner__count"
            style={{
              backgroundColor: `${
                step == 3
                  ? "orange"
                  : step > 3
                  ? "green"
                  : "rgba(163, 163, 163, 0.746)"
              }`,
            }}
          >
            {step > 3 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              <b
                style={{
                  color: `${
                    step == 3 ? "white" : "rgba(163, 163, 163, 2.746)"
                  }`,
                }}
              >
                3
              </b>
            )}
          </div>
          <b
             style={{
              color: `${
                step == 3 ? "black" : "rgba(163, 163, 163, 2.746)"
              }`,
            }}
          >Preview</b>
        </div>
        <div className="">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 jKmKoK"
          >
            <title>chevron-right</title>
            <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MultiSteps;
