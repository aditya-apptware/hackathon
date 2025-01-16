import BackgroundImage from "../assets/images/countdown-bg.png";
import PriveIncentivesTopBox from "../assets/images/price-inventives-top-box.svg";

const obj = [
  {
    place: "First Place",
    amount: "24,000",
    team: "Per Team",
    perAmount: "6,000 Per Person",
    plus: "+",
    perks: "Premium Perks",
  },
  {
    place: "Second Place",
    amount: "20,000",
    team: "Per Team",
    perAmount: "5,000 Per Person",
    plus: "+",
    perks: "Premium Perks",
  },
  {
    place: "Third Place",
    amount: "16,000",
    team: "Per Team",
    perAmount: "4,000 Per Person",
    plus: "+",
    perks: "Premium Perks",
  },
];

export const PriceAndIncentives = () => {
  return (
    <div
      className="py-[48px] md:py-[108px] lg:py-[144px] xl:py-[180px]"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed"
      }}
    >
      <div className="relative w-auto px-5 md:px-0 md:w-[544px] lg:w-[726px] xl:w-[908px] h-[957px] md:h-[351px] lg:h-[469px] xl:h-[587px] mx-auto flex flex-col gap-[53px] md:gap-[30px] lg:gap-[41px] xl:gap-[52px]">
        <div className="absolute top-[-48px] md:top-[-108px] lg:top-[-144px] xl:top-[-180px] left-[40px] md:left-[90px] lg:left-[120px] xl:left-[150px] w-[21px] md:w-[48px] lg:w-[64px] xl:w-[80px] h-[21px] md:h-[48px] lg:h-[64px] xl:h-[80px]">
          <img src={PriveIncentivesTopBox} width={"100%"} height={"100%"} alt="price and incentives svg"/>
        </div>
        <div className="font-karmatic text-default w-auto md:w-[268px] lg:w-[358px] xl:w-[448px] h-[41px] md:h-[92px] lg:h-[123px] text-[35px] md:text-[34px] lg:text-[46px] xl:text-[58px] leading-[45px] md:leading-[45px] lg:leading-[61px] xl:leading-[77px] text-center mx-auto">
          Price and incentives
        </div>
        <div className="md:flex font-robotoMono text-center justify-center">
          {obj.map((each) => {
            const { perks, amount, perAmount, place, plus, team } = each;

            return (
              <div className="w-full md:w-[180px] lg:w-[241px] xl:w-[302px] xl:h-[308px] h-[250px] pb-5 text-white flex flex-col gap-[60px] md:gap-[14px] lg:gap-[13px] xl:gap-[10px] justify-center md:border-r border-b md:border-b-0 border-white border-opacity-[40%] md:last:border-none">
                <div className="flex flex-col gap-[12px] md:gap-[15px] lg:gap-[20px] xl:gap-[25px] h-[30px] md:h-[67px] lg:h-[90px] xl:h-[113px]">
                  <div className="text-[30px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[20px] md:leading-[12px] lg:leading-[16px] xl:leading-[20px]">
                    {place}
                  </div>
                  <div className="text-default text-[28px] md:text-[27px] lg:text-[36px] xl:text-[45px] leading-[20px] md:leading-[12px] lg:leading-[16px] xl:leading-[20px]">
                    {amount}
                  </div>
                  <div className="text-[16px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[20px] md:leading-[12px] lg:leading-[16px] xl:leading-[20px]">{team}</div>
                </div>
                <div className="opacity-[60%] text-[17px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[26px] xl:leading-[30px] h-[16px] md:h-[36px] lg:h-[48px] xl:h-[81px]">
                  {/* <div>{perAmount}</div> */}
                  <div>{plus}</div>
                  <div>{perks}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-robotoMono text-default text-[16px] md:text-[12px] lg:text-[16px] xl:text-[20px] leading-[20px] md:leading-[12px] lg:leading-[16px] xl:leading-[20px] text-center">
          4th-10th Places: <br/>Internship opportunities and Brilliant.org
          eligibility
        </div>
      </div>
    </div>
  );
};
