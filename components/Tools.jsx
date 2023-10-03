import React from "react";
import { FaAngular, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";

function Tools() {
  return (
    <div id="tools" className="pageMainDiv">
        <h1 className="subTitle">
          Technologies I Use
        </h1>

        <div className="mt-8 justify-between mx-auto flex gap-8 flex-wrap">
          <div className="tool">
            <h5 className="toolTitle">Backend</h5>

            <div className="toolItem">
                <FaNodeJs size={25} /> Nodejs
            </div>

            <div className="toolItem">
                <FaPython size={25}/>
                Python
            </div>

          </div>

          <div className="tool">
            <h5 className="toolTitle">Database</h5>

            <div className="toolItem">
              <img src="/images/postgresql.png" width="25px" alt="" />
                PostgreSQL
            </div>

            <div className="toolItem">
              <img src="/images/mysql.png" width="25px" alt="" />
                MySQL
            </div>

            <div className="toolItem">
              <img src="/images/mongodb.png" width="25px" alt="" />
                MongoDB
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Frontend</h5>

            <div className="toolItem">
              <FaReact size={25} /> React
            </div>

            <div className="toolItem">
              <FaAngular size={25} />
              Angular
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Mobile</h5>

            <div className="toolItem">
              <RiFlutterFill size={25} /> Flutter
            </div>

            <div className="toolItem">
              <FaReact size={25} />
              ReactNative
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Clouds and DevOps</h5>

            <div className="toolItem">
              <img src="/images/aws.png" width="25px" alt="" /> 
              Amazon Web Services
            </div>

            <div className="toolItem">
              <img src="/images/do.png" width="25px" alt="" />
              Digital Ocean
            </div>

            <div className="toolItem">
              <img src="/images/azure.png" width="25px" alt="" />
              Azure
            </div>
          </div>

          <div className="tool">
            <h5 className="toolTitle">Testing</h5>

            <div className="toolItem">
              <img src="/images/postman.png" width="25px" alt="" /> 
              Postman
            </div>
          </div>
        </div>
    </div>
  );
}

export default Tools;
