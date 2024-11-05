import React from "react";

export const PrezentatsiyaVideo7 = () => {
  return (
    <div>
      <div className="my-2">
        <iframe
          width="789"
          height="444"
          className="mx-auto"
          src="https://www.youtube.com/embed/cwBpxwzNMd8"
          title="Elektr kernewi hám onı ólshew"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="my-2">
        <iframe
          width="789"
          height="444"
          className="mx-auto"
          src="https://www.youtube.com/embed/J5G1wN1oSyo"
          title="Tok kúshi"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
