import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const DownloadPage: React.FC = () => {
  const router = useRouter();

  const handleAppDownload = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();
    window.open(url, "_blank"); // Open the app store link in a new tab
    window.location.href =
      "https://staging.vself.app/claim/3093602180?strings=1013266691360"; // Navigate to the specified URL in the current tab
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Campaign Image */}
      <div className="relative h-3/4">
        {" "}
        {/* Relative positioning for Image component */}
        <Image
          src="/Campaign.png"
          alt="Campaign"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Download Buttons */}
      <div className="flex flex-grow items-center justify-center">
        {" "}
        {/* Centering content in the remaining space */}
        <div className="mb-6 rounded-lg bg-gray-200 p-8 text-center shadow-md">
          <h1 className="mb-4 text-xl">Download Our App</h1>

          {/* Google Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.sweatwallet"
            className="m-2 inline-block"
            onClick={(e) =>
              handleAppDownload(
                e,
                "https://play.google.com/store/apps/details?id=com.sweatwallet",
              )
            }
          >
            <Image
              src="/google.png"
              alt="Google Play"
              width={150}
              height={50}
            />
          </a>

          {/* Apple App Store Button */}
          <a
            href="https://apps.apple.com/gb/app/sweat-wallet/id1619316571"
            className="m-2 inline-block"
            onClick={(e) =>
              handleAppDownload(
                e,
                "https://apps.apple.com/gb/app/sweat-wallet/id1619316571",
              )
            }
          >
            <Image src="/apple.png" alt="App Store" width={150} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
