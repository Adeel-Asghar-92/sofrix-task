const InvestorReportCard = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-[#9F73C2]  py-[168px] flex justify-center w-full investBgImgMob">
          <div className="bg-white p-[10px] gap-10 lg:h-[440px] h-[auto]  max-w-[1116px] lg:w-[1116px] w-[720px] rounded-[25px]">
            <div className="flex  flex-col lg:flex-row  items-center justify-center   ">
              <div className="w-[100%] h-[620px]  lg:w-7/12 p-4 pl-[0px]">
                <div className="relative w-[642.56px] h-[480px] flex justify-center   ">
                  <div className="w-[626px] m-auto relative">
                    <div className="relative">
                      <img
                        src="/images/Background2-fc37f673.svg"
                        alt=""
                        className="relative  inset-0 m-auto max-w-[780]  top-[-7rem] transform scale-[0.85]"
                      />
                      <img
                        src="/images/IR3-ee2b682a.svg"
                        alt=""
                        className=" w-[350.93px] top-[40px] h-[390px]  absolute right-[-30px]"
                      />
                      <img
                        src="/images/IR2-f83e245c.svg"
                        alt=""
                        className="w-[350.93px] h-[390px] absolute top-0 right-[130px] transition-transform duration-500 transform origin-top-right hover:translate-x-1/4 hover:-translate-y-1/4 "
                      />
                      <img
                        src="/images/IR1-bc8e58d5.svg"
                        alt=""
                        className="w-[350.93px] right-[130px] top-[27px] h-[390px] absolute left-[5px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:h-[440px] h-[auto] py-[0px]  lg:w-5/12 items-center flex justify-center">
                <div className="w-[340px] lg:h-[350px] h-[250px] lg:pb-[0px]    text-[#127398] leading-[28px] ">
                  <span className="font-[700] text-[20px]  ">
                    Receive personalized investor reports{" "}
                  </span>{" "}
                  <span className="font-[500] text-[18px]">
                    and understand how your trading activities contribute to
                    your overall wealth.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}

      <div className="md:hidden py-[30px] min-w-[390px] bg-[#9F73C2] m-auto flex items-center investBgImgMob">
        <div
          className="bg-white w-[350px] mx-auto py-[30px] flex flex-col items-center"
          style={{ borderRadius: "25px" }}
        >
          <div className="w-[233px] h-[230px] relative mt-[30px]">
            {" "}
            <img
              src="/images/BgInvestor-7d326f45.svg"
              alt=""
              className="absolute inset-0 m-auto max-w-[233px] bottom-[60px] "
            />
            <img
              src="/images/IR3Mob-213c4ef1.svg"
              alt=""
              className="absolute left-[100px] bottom-[40px]"
            />
            <img
              src="/images/IR2Mob-e2545c99.svg"
              alt=""
              className="absolute left-[60px] bottom-[40px]"
            />
            <img
              src="/images/IR1-bc8e58d5.svg"
              alt=""
              className="absolute  !max-w-[151px] left-[-20px] bottom-[40px]"
            />
          </div>
          <div className="w-[290px] text-[#127398] text-center z-10">
            <span className="font-[700] text-[20px] leading-[24px]">
              Receive personalized investor reports
            </span>
            &nbsp;
            <span className="font-[500] text-[17px] leading-[24px]">
              and understand how your trading activities contribute to your
              overall wealth.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorReportCard;
