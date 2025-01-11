
export const Schedule=()=>{
    return(
        <section className="flex justify-center bg-white">
            <section className="flex md:flex-row flex-col-reverse xl:px-[150px] md:px-[74px] px-[20px] md:py-[100px] py-[50px] xl:w-[1280px] md:w-[768px] w-auto gap-[140px] md:gap-0">
            <div className="relative flex flex-col items-start xl:text-[20px] md:w-3/5 md:pl-[30px] pl-9 xl:gap-[67px] md:gap-[50px] gap-8">
            <div className='absolute bg-black left-0 w-0.5 xl:h-[820px] h-[790px]'></div>
                <div className="relative flex flex-col gap-5">
                    <div className='size-3 bg-default absolute md:left-[-35px] left-[-41px] top-[8px]'></div>
                    <h2 className="font-karmatic">Day 1: January 17th, 2025</h2>
                    <div className="flex flex-col gap-3 font-robotoMono">
                    <p className="font-bold">6:30 PM:</p>
                    <p className="font-bold">Reporting & Registration</p>
                    <ul className="list-disc xl:pl-10 pl-7">
                        <li>Complete registration and consent forms.</li>
                        <li>Onboarding and setup for participants.</li>
                    </ul>
                    </div>
                    <div className="font-robotoMono">
                    <p className="font-bold">8:00 PM:</p>
                    <p className="font-bold">Hackathon Begins</p>
                    <ul className="list-disc xl:pl-10 pl-7">
                        <li>Teams start working on their problem statements.</li>
                    </ul>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                <div className='size-3 bg-default absolute md:left-[-35px] left-[-41px] top-[8px]'></div>
                    <h2 className="font-karmatic">Throughout the Event</h2>
                    <div className="font-robotoMono">
                    <p className="font-bold">Mentorship Support:</p>
                    <ul className="list-disc xl:pl-10 pl-7">
                        <li>Expert mentors will be available to guide and assist participants.</li>
                    </ul>
                    </div>
                    <div className="font-robotoMono">
                    <p className="font-bold">Beverages & Food:</p>
                    <ul className="list-disc xl:pl-10 pl-7">
                        <li>Complimentary snacks, meals, and beverages will be provided to keep participants energized.</li>
                    </ul>
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                <div className='size-3 bg-default absolute md:left-[-35px] left-[-41px] top-[8px]'></div>
                    <h2 className="font-karmatic">Final Submission</h2>
                    <div className="font-robotoMono">
                    <p className="font-bold">12:00 PM:</p>
                    <p className="font-bold">January 19th, 2025:</p>
                    <ul className="list-disc xl:pl-10 pl-7">
                        <li>Submit your final project for evaluation.</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black font-robotoMono flex flex-col p-2 md:h-[147px] h-[130px] w-[288px] md:w-2/5 md:leading-10 gap-7">
                <div className="text-default xl:text-[36px] text-[26px] w-[315px] md:w-auto">
                &gt;event schedule: Apptware Hackathon 2025
                </div>
                <p className="md:leading-7">Prepare to innovate, collaborate, and bring your ideas to life. Let's make this hackathon extraordinary!</p>
            </div>
        </section>
        </section>
    )
}