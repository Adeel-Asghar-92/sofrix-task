const PortFolioCard = () => {
  return (
    <>
      <div className="hidden md:block">
        <div
          className="bg-[#31CE5D] 2xl:py-[73px] py-[73px]  w-full flex justify-center prtFloBgImg"
          // style="background-image: url(&quot;/assets/BackgroundPotfolio-9a0466c1.png&quot;); background-size: contain;"
        >
          <div className="bg-white p-[10px] gap-10 lg:h-[440px] h-[650px]  max-w-[1116px] lg:w-[1116px] w-[720px] rounded-[25px]">
            <div className="flex  flex-col lg:flex-row  items-center justify-center   ">
              <div className="w-[100%] h-[440px]  lg:w-7/12  p-4 pl-[0px]">
                <div className="relative w-[642.56px] h-[480px] flex justify-center   ">
                  <div className="">
                    <img
                      src="/images/BrokersCard-c3720a91.svg"
                      alt=""
                      className="relative bottom-[60px] max-w-[565px]"
                    />
                    <img
                      src="/images/AccountsCard-98251d2f.svg"
                      alt=""
                      className="absolute top-[-100px] left-[60px] inset-0 m-auto max-w-[565px]"
                    />
                    <img
                      src="/images/AccountTypesCard-329dee6a.svg"
                      alt=""
                      className="absolute transition ease-in-out duration-500 hover:scale-125 top-[120px] max-w-[565px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:h-[440px] h-[auto] text-justify pr-[0px]  lg:w-5/12 flex justify-start">
                <div className="w-[340px]   p-4  text-[#127398] leading-[28px] m-auto">
                  <span className="font-[700] text-[20px]  ">
                    Track your net worth{" "}
                  </span>{" "}
                  <span className="font-[500] text-[18px]">
                    automatically and spend less time managing your personal
                    finances. No need to update spreadsheets manually anymore.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div
        className="md:hidden py-[30px]  min-w-[390px] bg-[#31CE5D] m-auto flex items-center prtFloBgImgMob"
        //   style="background-image: url(&quot;/assets/BackgroundPortfolio-3f1fe332.svg&quot;); background-size: contain;"
      >
        <div
          className="bg-white py-[30px] w-[350px] mx-auto flex flex-col justify-center items-center"
          style={{ borderRadius: "25px", padding: "0.5rem" }}
        >
          <div className="w-[233px] h-[174px] mt-[20px] relative">
            <img
              src="/images/BrokersCard-c3720a91.svg"
              alt=""
              className="absolute bottom-[95px]"
            />
            <img
              src="/images/AccountsCard-98251d2f.svg"
              alt=""
              className="absolute bottom-[40px] left-[10px]"
            />
            <img
              src="/images/AccountTypesCard-329dee6a.svg"
              alt=""
              className="absolute bottom-[10px]"
            />
          </div>
          <div className="w-[290px] text-[#127398] text-center">
            <span className="font-[700] text-[20px] leading-[24px]">
              Track your net worth{" "}
            </span>
            <span className="font-[500] text-[17px] leading-[24px]">
              automatically and spend less time managing your personal finances.
              No need to update spreadsheets manually anymore.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolioCard;
