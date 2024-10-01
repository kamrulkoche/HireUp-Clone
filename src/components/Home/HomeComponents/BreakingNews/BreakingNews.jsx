import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-fifth-100 py-4 rounded-3xl px-4">
      <Marquee pauseOnHover={true} speed={60} direction="left">
        <h2 className="text-lg font-medium text-sixth-black">
          1st September Tuesday, all outlets are open except Multiplan Outlets.
          Additionally, our online activities are open and operational.
        </h2>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
