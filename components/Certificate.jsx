import Image from 'next/image'
import React from 'react'

function Certificate() {
  return (
    <div className="pageMainDiv">
        <h3 className="subTitle">Certifications</h3>

        <div>
            <p className="text-center text-[#fdeed4] py-4">
                I have earned the Front End Development Libraries Certificate from{" "}
                <a
                    className="text-[#00FF00] hover:underline"
                    href="https://www.freecodecamp.org/certification/kyawswarlynn14/front-end-development-libraries"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    freeCodeCamp
                </a>. You can verify my certification{" "}
                <a
                    className="text-[#00FF00] hover:underline"
                    href="https://www.freecodecamp.org/certification/kyawswarlynn14/front-end-development-libraries"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>. This certification demonstrates my dedication to mastering front-end development skills.
            </p>

            <div className="w-full md:w-[70%] lg:w-[50%] mx-auto">
                <Image
                className=""
                width={100}
                height={100}
                layout="responsive"
                src='/images/fcc-frontend-certificate.png'
                alt="portfolio images"
                />
            </div>
        </div>
    </div>
  )
}

export default Certificate