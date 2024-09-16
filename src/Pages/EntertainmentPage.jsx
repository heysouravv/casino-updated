import React from "react";
import Entertainment from "../Components/Entertainement/Entertainment";
import SectionContainer from "../Components/Container/SectionContainer";

const EntertainmentPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        <div className="mt-36 md:mt-60 w-full px-4 md:px-8">
          <SectionContainer heading={"All Packages Include"} desc={""}>
            <section className="relative ">
              <Entertainment />
            </section>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;
