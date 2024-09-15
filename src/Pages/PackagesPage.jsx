import React from "react";
import Packages from "../Components/Packages/Packages";
import SectionContainer from "../Components/Container/SectionContainer";
import Faq from "../Components/FAQ/Faq";
import Important from "../Components/Important/Important";

const PackagesPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen bg-bg-primary">
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        <div className="mt-36 md:mt-4 w-full px-4 md:px-8">
          <SectionContainer heading={"All Packages Include"} desc={""}>
            <section className="relative">
              <div className="container mx-auto">
                <div className="highlight-wrap flex flex-wrap gap-6 justify-between">
                  {/* Food */}
                  <div className="flex-1 max-w-xs md:max-w-sm p-4 rounded-lg flex flex-col gap-4 items-center text-center text-white">
                    <div className="high-img mb-4">
                      <img
                        src="/tray.gif"
                        alt="Food"
                        className="w-44 rounded-lg"
                      />
                    </div>
                    <h4 className="comm-sub-hdn text-xl font-bold mb-2">
                      Food
                    </h4>
                    <p className="comm-para">
                      Delicious dishes from around the world, prepared for your
                      enjoyment.
                    </p>
                  </div>
                  {/* Games */}
                  <div className="flex-1 max-w-xs md:max-w-sm p-4 rounded-lg flex flex-col gap-4 items-center text-center text-white">
                    <div className="high-img mb-4">
                      <img
                        src="/games.gif"
                        alt="Games"
                        className="w-44 rounded-lg"
                      />
                    </div>
                    <h4 className="comm-sub-hdn text-xl font-bold mb-2">
                      Games
                    </h4>
                    <p className="comm-para">
                      A range of engaging and thrilling games for you to choose
                      from!
                    </p>
                  </div>
                  {/* Entertainment */}
                  <div className="flex-1 max-w-xs md:max-w-sm p-4 rounded-lg flex flex-col gap-4 items-center text-center text-white">
                    <div className="high-img mb-4">
                      <img
                        src="/entertainment.gif"
                        alt="Entertainment"
                        className="w-44 rounded-lg"
                      />
                    </div>
                    <h4 className="comm-sub-hdn text-xl font-bold mb-2">
                      Entertainment
                    </h4>
                    <p className="comm-para">
                      Add a touch of flair and pizzazz to the ‘Big Daddy’ name.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SectionContainer>

          {/* Important */}
          <Important />

          {/* Packages Component */}
          <Packages />
          {/* Faq Component */}
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
