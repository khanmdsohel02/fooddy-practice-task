import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-lg shadow-red-400">
        <figure className="px-10 pt-10">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">What is Name?</h2>
          <p>What is Email?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
