import React from "react";
import Link from "next/link";
import Image from "next/image";

const DownloadPage: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg bg-gray-200 p-10 text-center shadow-md">
        <h1 className="mb-4 text-xl">Download Our App</h1>

        <Link href="https://play.google.com/store/apps/details?id=com.sweatwallet">
          <a className="m-2 inline-block">
            <Image
              src="/google.png"
              alt="Google Play"
              width={150}
              height={50}
            />
          </a>
        </Link>

        <Link href="https://apps.apple.com/gb/app/sweat-wallet/id1619316571">
          <a className="m-2 inline-block">
            <Image src="/apple.png" alt="App Store" width={150} height={50} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DownloadPage;
