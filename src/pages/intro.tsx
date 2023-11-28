import React from "react";
import { useRouter } from "next/router";

const IntroPage: React.FC = () => {
  const router = useRouter();

  // Inline styles
  const containerStyle1: React.CSSProperties = {
    backgroundImage: `url('att.png')`, // Make sure to put the correct path to your image file
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column-reverse" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
    color: "white",
    position: "relative",
  };

  const buttonStyle1: React.CSSProperties = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold" as const,
    color: "#000",
    backgroundColor: "#FFF2C3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer" as const,
    position: "absolute",
    bottom: "100px",
  };

  return (
    <div style={containerStyle1}>
      <button style={buttonStyle1} onClick={() => router.push("/inputform")}>
        Try Now
      </button>
    </div>
  );
};

export default IntroPage;
