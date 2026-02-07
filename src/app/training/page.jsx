import ITCompanyServices from "@/component/services/ITCompanyServices";
import ITTrainingServices from "@/component/services/ITTrainingServices";
import React from "react";

const page = () => {
  return (
    <div>
      <ITCompanyServices />
      <ITTrainingServices />
    </div>
  );
};

export default page;
