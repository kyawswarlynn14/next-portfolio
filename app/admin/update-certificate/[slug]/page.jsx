"use client";
import {useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
import { deleteFile, storage } from "@/config/firebase";
import { UpdateOneCertificate, getOneCertificate } from "@/config/services";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

function UpdateCertificate() {
    const router = useRouter();
    const params = useParams();
    const id = params.slug;
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
      title: "",
      content: "",
      demo_link: "",
      img_url: "",
      fb_url: "",
    });

    useEffect(() => {
      if (!id) return;
      getOneCertificate(id).then(data => {
        setValues(data)
      })
    }, [id])
    // console.log(id)
    const handleImageChange = () => async (event) => {
        if(values.fb_url) {
          await deleteFile(values.fb_url);
        }
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
          uploadImage(selectedFile);
        }
    };

    const uploadImage = (file) => {
        const imageRef = ref(storage, `certificates/${file.name + v4()}`);
        uploadBytes(imageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setValues({...values, img_url: url, fb_url: imageRef._location.path});
          });
        });
    };

    const handleChange = (e) => {
          const { name, value } = e.target;
          setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await UpdateOneCertificate(id, values);
        setIsLoading(false);
        router.push('/admin/home/certificates')
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred while creating the item: " + error.message);
      }
    };

  return (
    <div className='adminCreatePage'>
      {
        isLoading ? (
          <div className="text-2xl tracking-widest font-bold">Loading...</div>
        ) : (
          <form onSubmit={handleSubmit}
          className=" bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[60%] lg:w-[50%] ">

          <h2 className="text-3xl font-semibold text-center text-pink-400 tracking-widest">
            Update A Certificate
          </h2>

          <div className="flex flex-col justify-between gap-4">

            <div className="flex gap-2">
                <input
                type="file"
                className="input"
                name="img_url"
                onChange={handleImageChange()}
                />

                {values.img_url && (
                    <Image width={100} height={100} className="object-cover w-20 h-auto" src={values.img_url} alt="image" />
                )}
            </div>

            <input
              required
              type="text"
              placeholder="Title"
              className="input"
              name="title"
              value={values.title}
              onChange={handleChange}
            />

            <input
              required
              type="text"
              placeholder="Demo Link"
              className="input"
              name="demo_link"
              value={values.demo_link}
              onChange={handleChange}
            />

            <textarea
              rows={4}
              required
              type="text"
              placeholder="Content"
              className="input"
              name="content"
              value={values.content}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-around">
            <button type="button" onClick={() => router.back()} className="actionButton">
                <IoMdArrowRoundBack className="mr-2" /> Back
            </button>
            <button
              type="submit"
              className="actionButton"
            >
              Submit
            </button>
          </div>
          </form>
        )
      }
    </div>
  )
}

export default UpdateCertificate;