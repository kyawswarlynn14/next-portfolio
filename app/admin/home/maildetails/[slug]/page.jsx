"use client";

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { getOneMail } from '@/config/services';
import { BsCalendarDate } from 'react-icons/bs';
import Loading from '@/components/Loading';

function MailDetails() {
    const params = useParams();
    const id = params.slug;
    const [ data, setData ] = useState();

    useEffect(() => {
        getOneMail(id).then(data => {
            setData(data);
        })
    }, [id])

    function formatDate(dateTimeString) {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
    }
      

  return (
    <>
    {
        data ? (
            <div className='md:w-[60%] lg:w-[50%] text-white mx-auto mt-8'>
                <div className='rounded-t-lg p-2 bg-gray-700 mb-0'>
                    <h3 className='text-xl m-0 text-center font-semibold'>
                        Mail Details
                    </h3>

                    <p className='text-sm text-green-500 flex items-center gap-2'>
                        <BsCalendarDate /> Date : {formatDate(data?.createdAt)}
                    </p>
                </div>

                <div className='w-full mx-auto px-10 py-6 rounded-b-lg relative h-fit bg-gray-900 flex flex-col gap-4'>
                    <div className='flex gap-2 justify-between'>
                        <p>Name : {data?.name}</p>

                        <p>Company : {data?.company_name}</p>
                    </div>

                    <div className='flex gap-2 justify-between'>
                        <p>Phone : {data?.phone}</p>
                        <p>Email : {data?.email}</p>
                    </div>

                    <div>
                        <p>
                            {data?.message}
                        </p>
                    </div>
                </div>
            </div>
        ) : <Loading />
    }
    </>
  )
}

export default MailDetails;