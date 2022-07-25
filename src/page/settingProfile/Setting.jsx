import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdate">Update Your Account</span>
          <span className="settingDelete">Delete Your Account</span>
        </div>
        <form className="settingForm">
          <div className="settingAvata">
            <img
              src="https://newsmd2fr.keeng.net/tiin/archive/imageslead/2022/05/24/90_feb589021311fea61c68a0bb3c35f7ec.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingAvataIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Something" />
          <label>Email</label>
          <input type="email" placeholder="Something" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
