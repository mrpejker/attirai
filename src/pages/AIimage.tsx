import React from "react";
import { CSSProperties } from "react";
import { useRouter } from "next/router";

const AIimage: React.FC = () => {
  // Inline styles
  const router = useRouter();

  const containerStyle: CSSProperties = {
    backgroundImage: "url(BackC.png)", // Replace with the correct path to your image
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const headerFooterStyle: CSSProperties = {
    backgroundColor: "#f1f1f1",
    padding: "15px",
    textAlign: "center",
  };

  const mainStyle: CSSProperties = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formContainerStyle: CSSProperties = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const inputContainerStyle: CSSProperties = {
    marginBottom: "20px",
  };

  const buttonStyle: CSSProperties = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#CBC2B9",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <header style={headerFooterStyle}>
        Attirai: your digital fashion room
      </header>
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => router.push("/AIimage.tsx")}
          >
            Share
          </button>
        </div>
      </main>
      <footer style={headerFooterStyle}>
        Terms and conditions & Privacy policy
      </footer>
    </div>
  );
};

export default AIimage;
