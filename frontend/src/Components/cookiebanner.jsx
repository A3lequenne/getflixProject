import React, { useState } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get("cookiesAccepted"));

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", true);
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner rounded-3xl lglass">
        <p>
          Ce site utilise des cookies pour améliorer votre expérience. En
          continuant à naviguer sur le site, vous acceptez notre utilisation des
          cookies.
        </p><div className="border border-box border-white justify-center items-center flex-box">
        <button onClick={acceptCookies}>Accepter</button>
      </div>
      </div>
    )
  );
};

export default CookieBanner;
