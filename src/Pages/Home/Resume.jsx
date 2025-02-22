import React from "react";

const DownloadImage = () => {
  const handleDownload = () => {
    const imageUrl = "public/resume.png"; // Path to image in 'public' folder
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "downloaded-RESUME.png"; // Name of the file when downloaded
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return <button onClick={handleDownload}>Download PNG</button>;
};

export default DownloadImage;
