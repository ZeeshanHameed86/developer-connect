import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { getProfiles } from "../actions/profile_action";
import ProfileItem from "./ProfileItem";

const Profiles = () => {
  const { profiles, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [getProfiles]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i>Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => {
                return <ProfileItem key={profile._id} profile={profile} />;
              })
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;
