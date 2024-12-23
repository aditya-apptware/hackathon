export const AddMember = () => {
  return (
    <div className="font-robotoMono font-black">
      <h1 className="font-medium text-[32px] leading-[25.06px] mb-16">
        Team Member 1
      </h1>
      <form action="" className="flex flex-col gap-10">
        <div>
          <label
            htmlFor="fullName"
            className="font-medium text-[25px] leading-[25.06px]"
          >
            Full Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Type your answer here"
              className="w-[648.05px] placeholder-[#929090] border border-b-[#313030] p-2 outline-none"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-medium text-[25px] leading-[25.06px]"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your answer here"
              className="w-[648.05px] placeholder-[#929090] border border-b-[#313030] p-2 outline-none"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="font-medium text-[25px] leading-[25.06px]"
          >
            Mobile
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Type your answer here"
              className="w-[648.05px] placeholder-[#929090] border border-b-[#313030] p-2 outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="mobile"
            className="font-medium text-[25px] leading-[25.06px]"
          >
            Graduation Year
          </label>
          <div className="mt-2 w-[648.05px] border border-b-[#313030] pb-2 flex gap-8 text-[18px] leading-[25.06px] font-normal">
            <div>
              <input
                type="radio"
                name="graduationYear"
                id="graduationYear1"
                checked
              />
              <label htmlFor="graduationYear1" className="ml-4">
                2023
              </label>
            </div>
            <div>
              <input type="radio" name="graduationYear" id="graduationYear2" />
              <label htmlFor="graduationYear2" className="ml-4">
                2024
              </label>
            </div>
            <div>
              <input type="radio" name="graduationYear" id="graduationYear3" />
              <label htmlFor="graduationYear3" className="ml-4">
                2025
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
