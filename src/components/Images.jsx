export const Images = () => {
  return (
    <div className="flex justify-between items-center w-[1440px] h-[200px] mx-auto relative">
      <div className="w-[166px] h-[227px] overflow-hidden absolute top-0 left-0 rounded-r-[45px]">
        <img
          src="/assets/pics/faq1.jpg"
          alt="First"
          className="absolute left-0 h-full object-cover"
        />
      </div>
      <div className="w-[315px] h-[296px] overflow-hidden absolute top-[75%] left-[15%] rounded-[45px]">
        <img
          src="/assets/pics/faq2.jpg"
          alt="Second"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[438px] h-[412px] overflow-hidden absolute top-[100%] left-[50%] rounded-[45px]">
        <img
          src="/assets/pics/faq3.jpg"
          alt="Third"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[166px] h-[227px] overflow-hidden absolute top-[25%] right-0 rounded-l-[45px]">
        <img
          src="/assets/pics/faq4.jpg"
          alt="Fourth"
          className="absolute right-0 h-full object-cover"
        />
      </div>
    </div>
  );
};
