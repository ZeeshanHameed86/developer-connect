import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const alert = useSelector((state) => state.alert);

  return (
    <section>
      {alert !== null &&
        alert.length > 0 &&
        alert.map((alt) => {
          return (
            <div key={alt.id} className={`alert alert-${alt.alertType}`}>
              {alt.msg}
            </div>
          );
        })}
    </section>
  );
};

export default Alert;
