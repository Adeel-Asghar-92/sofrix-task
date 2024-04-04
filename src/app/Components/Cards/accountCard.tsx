import "./style.css";
const AccountCard = () => {
  return (
    <>
      {/* tablet and desktop */}
      <div className="hidden md:block">
        <div className="bg-[#3994E9] relative 2xl:py-[73px] py-[73px]  flex justify-center  overflow-hidden acctBgImg">
          <div className="bg-white p-[10px] gap-10 lg:h-[440px] h-[650px]  max-w-[1116px] lg:w-[1116px] w-[720px] rounded-[25px]">
            <div className="flex  flex-col lg:flex-row  items-center justify-center ">
              <div className="w-[100%] lg:h-[440px] h-[auto]  ml-[0px] lg:w-5/12  flex lg:justify-start justify-center items-center">
                <div className="w-[340px]   ml-[50px] py-[0px] md:py-[40px]   text-[#127398] leading-[28px] ">
                  <span className="font-[700] text-[20px]">
                    Connect your brokerage
                  </span>{" "}
                  <span className="font-[500] text-[18px]">
                    accounts and get access to trading ideas, aggregated stats
                    and discussions in your tech investing community right away.
                  </span>
                </div>
              </div>
              <div className="w-[100%] h-[440px] lg:w-7/12 p-4 md:pl-[30px] pl-[0px]">
                <div className="relative w-[642.56px] h-[480px] flex justify-center">
                  <div className="">
                    <img
                      src="/images/Amazoniansgroup-cfc94fd2.svg"
                      alt=""
                      className=" relative left-[20px] bottom-[45px] max-w-[565px]   w-[565px] "
                    />
                    <img
                      src="/images/GooglersGroup-1ade031e.svg"
                      alt=""
                      className="absolute top-[-160px] right-[60px]  inset-0 m-auto  max-w-[565px] "
                    />
                    <img
                      src="/images/StockClubsGroup-f8ae68a2.svg"
                      alt=""
                      className="absolute transition ease-in-out duration-500  hover:scale-125 left-[15px] top-[110px]  max-w-[565px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden py-[30px] bg-[#3994E9] min-w-[390px] m-auto flex  items-center acctBgImgMob">
        <div
          className="bg-white py-[30px] w-[350px] mx-auto flex flex-col  items-center"
          style={{ borderRadius: "25px" }}
        >
          <div className="w-[233px] h-[174px] mt-[20px] relative">
            <img
              src="/images/Amazoniansgroup-cfc94fd2.svg"
              alt=""
              className="absolute bottom-[60px]"
            />
            <img
              src="/images/GooglersGroup-1ade031e.svg"
              alt=""
              className="absolute bottom-[55px]"
            />
            <img
              src="/images/StockClubsGroup-f8ae68a2.svg"
              alt=""
              className="absolute bottom-[10px]"
            />
          </div>
          <div className="w-[290px] text-[#127398] text-center">
            <span className="font-[700] text-[20px] leading-[24px]">
              Connect your brokerage accounts
            </span>{" "}
            <span className="font-[500] text-[17px] leading-[24px]">
              and get access to trading ideas, aggregated stats and discussions
              in your tech investing community right away.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
