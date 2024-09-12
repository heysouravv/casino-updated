import React from "react";
import Packages from "../Components/Packages/Packages";
import SectionContainer from "../Components/Container/SectionContainer";

const PackagesPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary ">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden ">
        <div className="mt-44 w-full">
          <SectionContainer heading={" All Packages Include"} desc={""}>
            <section className="relative">
              <div className="container pb-4 mx-auto bg-red-600 flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <div>
                    <img src="/tray.gif" alt="" className="w-44 h-44" />
                  </div>
                  <h2 className="text-white font-bold text-3xl">Food</h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <img src="/games.gif" alt="" className="w-40 h-40" />
                  </div>
                  <h2 className="text-white font-bold text-3xl">Games</h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <img
                      src="/entertainment.gif"
                      alt=""
                      className="w-36 h-36"
                    />
                  </div>
                  <h2 className="text-white font-bold text-3xl">
                    Entertainment
                  </h2>
                </div>
              </div>
            </section>
          </SectionContainer>

          <Packages />
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
