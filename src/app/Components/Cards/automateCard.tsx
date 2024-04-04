const AutomateCard = () => {
  return (
    <>
      {/*  */}
      <div className="hidden md:block">
        <div className="bg-[#FBBC12]  py-[168px] flex justify-center w-full autoBgImg">
          <div className="bg-white p-[10px] gap-10 lg:h-[440px] h-[auto]  max-w-[1116px] lg:w-[1116px] w-[720px] rounded-[25px]">
            <div className="flex  flex-col lg:flex-row  items-center justify-start   ">
              <div className="w-[100%] lg:h-[440px] h-[auto]   lg:w-5/12  flex lg:justify-start justify-center items-center">
                <div className="lg:w-[440px] w-[340px] h-[300px] lg:pl-[84px]  lg:py-[0px] py-[20px]  py-[0px]  text-[#127398] leading-[28px]">
                  <span className="font-[700] text-[20px]  ">
                    Automate monitoring
                  </span>{" "}
                  <span className="font-[500] text-[18px]">
                    of your trading accounts 24/7. Control your risks and manage
                    your portfolio like a PRO.
                  </span>
                </div>
              </div>
              <div className="w-[100%] h-[620px]  lg:w-7/12  pl-[auto]">
                <div className="relative w-[642.56px] h-[480px] flex justify-center   ">
                  <div className="w-[626px] m-auto relative">
                    <img
                      src="/images/Group2-fa44477a.svg"
                      alt=""
                      className="absolute  inset-0 m-auto max-w-[780px] top-[-5rem] transform scale-[1]"
                    />
                    <img
                      src="/images/Milestone5-ee66a2ac.svg"
                      alt=""
                      className="absolute bottom-[140px]  inset-x-0 mx-auto transition ease-in-out duration-500 hover:scale-125 max-w-[504px]"
                    />
                    <img
                      src="/images/TradingBehavior5-09fe7a78.svg"
                      alt=""
                      className="absolute top-[-130px] inset-x-0 mx-auto max-w-[504px]"
                    />
                    <img
                      src="/images/Stock5-9cdd1f82.svg"
                      alt=""
                      className="absolute top-[11px] inset-x-0 mx-auto max-w-[504px]"
                    />
                    <img
                      src="/images/Inputfile2-1d155767.svg"
                      alt=""
                      className="absolute top-[160px]  inset-x-0 mx-auto max-w-[454.67px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden py-[30px] min-w-[390px] bg-[#FBBC12] m-auto flex items-center autoBgImgMob">
        <div
          className="bg-white  w-[350px] mx-auto py-[30px] flex flex-col items-center "
          style={{ borderRadius: "25px" }}
        >
          <div className="w-[233px] h-[286px] relative my-[26px]">
            <img
              src="/images/Group2-fa44477a.svg"
              alt=""
              className="absolute top-[-30px]"
            />
            <img
              src="/images/Milestone5-ee66a2ac.svg"
              alt=""
              className="absolute bottom-[220px]"
            />
            <img
              src="/images/TradingBehavior5-09fe7a78.svg"
              alt=""
              className="absolute bottom-[150px]"
            />
            <img
              src="/images/Stock5-9cdd1f82.svg"
              alt=""
              className="absolute bottom-[80px]"
            />
            <img
              src="/images/Inputfile2-1d155767.svg"
              alt=""
              className="absolute bottom-[20px]"
            />{" "}
          </div>
          <div className="w-[290px]  text-[#127398] text-center">
            <span className="font-[700] text-[20px] leading-[24px]">
              Automate monitoring{" "}
            </span>
            <span className="font-[500] text-[17px] leading-[24px]">
              of your trading accounts 24/7. Control your risks and manage your
              portfolio like a PRO.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomateCard;
