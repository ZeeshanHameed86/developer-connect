import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../actions/profile_action";
import Spinner from "./Spinner";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import { Experience, Education } from ".";

const Dashboard = () => {
  const {
    auth: { user },
    profile: { profile, loading },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <FaUserAlt /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteAccount())}
            >
              <i className="fas fa-user-minus"></i>Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </>
  );
};

export default Dashboard;
