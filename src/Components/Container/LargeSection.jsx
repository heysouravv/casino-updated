import React from 'react';

const LargestSection = ({ heading, description, imageUrl, videoUrl }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full sm:min-h-screen bg-bg-primary comm-section largest-sec">
      <div className="flex items-center flex-col h-full justify-center w-full max-w-[2000px] px-8 py-8 sm:px-10 lg:px-16 xl:px-20 gap-10 lg:gap-20">
        <div className="largest-wrap flex flex-col lg:flex-row w-full">
          <div className="largest-left lg:w-1/2">
            <div className="largest-info">
              <h3 className="comm-heading lg:text-[52px] uppercase text-3xl gradient-text leading-normal font-extrabold">
                {heading}
              </h3>
              <div className="comm-para w-full max-w-5xl text-base text-white lg:text-xl mt-6">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="largest-right lg:w-1/2 mt-8 lg:mt-0">
            <div className="gaming-video-container home3-video relative">
              <div className="gaming-video-image">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              {!isPlaying && (
                <div className="home3-video-button absolute inset-0 flex items-center justify-center cursor-pointer" onClick={toggleVideo}>
                  <div className="home3-video-button-bg absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="home3-video-button-icon relative z-10">
                    <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/video_play.png" alt="play" className="w-16 h-16" />
                  </div>
                  <div className="home3-video-button-text text-white text-xl font-bold ml-4 relative z-10">Play</div>
                </div>
              )}
              {isPlaying && (
                <>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${videoUrl}?rel=0&enablejsapi=1&autoplay=1`}
                    frameBorder="0"
                    allowFullScreen
                    id="workVideo"
                    className="work-video absolute inset-0"
                  ></iframe>
                  <div className="close-btn absolute top-4 right-4 cursor-pointer z-20" onClick={toggleVideo}>
                    <div className="close-img">
                      <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/cross.svg" alt="click to close" className="w-8 h-8" loading="lazy" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div
        style={{
          borderRadius: '640px',
          background: 'radial-gradient(50% 50% at 50% 50%, #FFB800 0%, rgba(238, 140, 41, 0.00) 100%)',
          filter: 'blur(331.8500061035156px)',
        }}
        className="absolute top-1/2 -translate-y-1/2 z-[10] left-1/2 -translate-x-1/2 max-w-full w-[440px] h-[449px]"
      ></div>
    </section>
  );
};

export default LargestSection;