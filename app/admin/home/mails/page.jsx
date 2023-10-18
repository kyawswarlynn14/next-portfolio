"use client";
import React, { useEffect, useState } from 'react'
import { DeleteOneMail, DeleteOneSocial, getMails, getSocials } from '@/config/services';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Cookies from 'js-cookie';
import Loading from '@/components/Loading';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

function AdminMails() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    getMails().then(data => {
        setData(data);
    })
  }, [])

  const handleItemDelete = async (event, id) => {
    event.stopPropagation();

    try {
      await DeleteOneMail(id);

      setData(prev => 
        prev.filter(d => d._id != id)
      );
    } catch (error) {
      alert("An error occurred while deleting the item: " + error.message);
    }
  };

  const filteredData = data.filter((d) => {
    const nameMatch = d.name.toLowerCase().includes(searchInput.toLowerCase());
  
    return nameMatch;
  });

  return (
    <>
    {Cookies.get('token') ? (
        <div className='w-[80%] mx-auto '>
          <div className="py-4 flex items-center space-x-4">
              <input
              type="text"
              placeholder="Search by Name..."
              className="px-4 py-2 w-80 rounded-lg bg-gray-800 text-gray-200 focus:outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              />
          </div>

            <p className='font-bold text-xl tracking-wider'>Mails</p>
                 

          <table className="w-full mt-4 shadow-xl text-left text-gray-200">
              <thead className=" bg-gray-700 text-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">No</th>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Mobile</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Company</th>
                    <th scope="col" className="px-6 py-3">Message</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
              </thead>

              <tbody>
                  {data.length > 0 ? (
                      filteredData.map((d, index) => {
                      return (
                          <tr className=" border-b cursor-pointer bg-gray-900 border-gray-700 hover:bg-gray-800" key={d._id} onClick={() => router.push(`/admin/home/maildetails/${d._id}`)}>
          
                            <th className="px-6 py-4">{index + 1}</th>

                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                            {d.name}
                            </th>

                            <td className="px-6 py-4">
                            {d.phone}
                            </td>

                            <td className="px-6 py-4">
                            {d.email}
                            </td>

                            <td className="px-6 py-4">
                            {d.company_name}
                            </td>

                            <td className="px-6 py-2">
                                <div className='w-[250px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                    <p className='m-0'>{d.message}</p>
                                </div>
                            </td>

                            <td className="px-6 py-4 flex gap-4 items-center">
                            <BsFillPersonVcardFill className="hover:text-blue-500" size={20} />
                            |
                            <RiDeleteBin6Fill className="hover:text-red-600" onClick={(e) => handleItemDelete(e, d._id)} size={20} />
                            </td>
                          </tr>
                      )})
                  ) : (
                      <tr>
                          <td className='py-2 px-4'>No Mail</td>
                      </tr>
                  )}
              </tbody>
          </table>
        </div>
    ) : (
      <Loading />
    )}
    </>
  )
}

export default AdminMails;