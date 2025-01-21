

export const Winners=()=>{
    const winnerName=[
        {
            id:'01',
            team:"Dummy Coders",
            names:[
                'Manglesh Nimbalkar ','Pranav Vijay Kolhe ','Karan Pradeep Gulve ','Prathamesh Iranna Dhanashri '
            ]
        },
        {
            id:'02',
            team:"SUdo rm rf",
            names:[
                'Tejas ','Shantanu ','Krishna ','Mustafa '
            ]
        },
        {
            id:'03',
            team:"Tech Titans",
            names:[
                'Rutuja Bagad ','Swaraj Waykar','Yashini Pardeshi ','Pranav'
            ]
        }

    ]
    return(
        <section className="flex justify-center bg-white">
            <section className="bg-white lg:py-[140px] py-[50px] xl:px-[80px] md:px-[50px] px-4 flex flex-col gap-8">
          <div>
            <h1 className="uppercase md:text-[58px] text-[28px] font-karmatic text-default">"The Stars of<br/> innovation!"</h1>
        </div>  
        <div className="text-black text-[22px] font-robotoMono lg:max-w-[900px] w-auto">
            <p>Here are the winners who turned ideas into reality and redefined the future of technology.</p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
        {winnerName.map((item,index)=>(
            <div key={index} className="relative bg-black flex md:flex-row flex-col-reverse md:pt-[60px] pt-5 md:pr-5 pr-2 pb-10 gap-3 md:max-h-[220px] max-h-[170px] lg:min-w-[420px] md:max-w-[440px] w-full max-w-[328px] md:justify-start justify-end overflow-hidden">
                <span className=" text-default font-robotoMono font-light md:text-[170px] md:block hidden">{item.id}</span>
                <span className="absolute -bottom-[50px] text-default font-robotoMono font-light text-[100px] md:hidden block">{item.id}</span>
                <div className="flex flex-col md:gap-[15px] gap-2 pl-[110px] md:pl-0">
                    <h3 className="uppercase font-karmatic text-white md:text-[18px] text-[17px]">{item.team}</h3>
                    <ul className="list-disc text-[14px] text-white pl-5 brightness-75">
                        {item.names.map((nameItem)=>(
                            <li>{nameItem}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
        </div>
        </section>
        </section>
    )
}