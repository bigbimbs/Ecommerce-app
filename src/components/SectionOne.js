import React from "react";
import Filter from "./Filter";

const SectionOne = () => {
  return (
    <div className="section-one d-md-flex">
      <div className="col-md-6 d-flex align-items-center">
        <div>
          <h3 className="mb-4">All Products</h3>
          <p>
            A 360<sup>o</sup> look at Lumin
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-end">
        <div>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
