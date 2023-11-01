import Image from 'next/image';
import '../app/globals.css'

function ServiceCard({service}) {

  return (
    <div
        className="w-full md:w-[22rem] h-fit mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl dark:shadow-slate-700 dark:shadow-lg relative overflow-hidden"
        key={service.title}
    >
        <div className='w-full h-52 absolute top-0 rounded-t-xl overflow-hidden'>
            <Image width={500} height={500}
                src={service.img_url}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-110 duration-500"
            />
        </div>

        <h3 className="text-lg font-medium pb-4 mt-52 underline underline-offset-4">{service.title}</h3>
        <p
            className="h-52 md:h-60 overflow-y-scroll text-[#fdeed4] text-base px-2 pb-4 text-justify custom-scrollbar"
        >
            {service.content}
        </p>
    </div>
  )
}

export default ServiceCard