import React from "react";
import Image from "next/image";
import ClaimPage from "./claim";
import { useRouter } from "next/router";

const DownloadPage: React.FC = () => {
  const router = useRouter();

  const handleAppDownload = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();
    window.open(url, "_blank"); // Open the app store link in a new tab
    //router.push("/ClaimPage"); // Navigate to ClaimPage in the current tab
  };

  return (
    <div
      className="flex h-screen items-end justify-center"
      style={{
        backgroundImage: `url('/Campaign.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-10 rounded-lg bg-gray-200 p-10 text-center shadow-md">
        <h1 className="mb-4 text-xl">Download Our App</h1>

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
          <Image src="/google.png" alt="Google Play" width={150} height={50} />
        </a>

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
  );
};

export default DownloadPage;
