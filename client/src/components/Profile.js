import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { getProfileById } from "../actions/profile_action";
import { useParams, Link } from "react-router-dom";
import {
  ProfileTop,
  ProfileAbout,
  ProfileExperience,
  ProfileEducation,
  ProfileGithub,
} from ".";

const Profile = () => {
  const {
    profile: { profile, loading },
    auth,
  } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [getProfileById]);

  return (
    <>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div class="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => {
                    return (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    );
                  })}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map((education) => {
                    return (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    );
                  })}
                </>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </>
      )}{" "}
    </>
  );
};

export default Profile;
