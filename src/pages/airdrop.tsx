import React from "react";

const AirdropPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(Back.png)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "white", // Make text color white
        }}
      >
        <h1 style={{ margin: "0", fontSize: "32px" }}>
          SWEAT Wallet Promotion Campaign by vSelf
        </h1>
        <h2 style={{ margin: "0" }}>
          Provide your personal app code from SWEAT wallet and your address to
          receive the airdrop in Swetcoins
        </h2>
        <div
          style={{
            backgroundColor: "hotpink",
            width: "300px",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px", // Add space between subtitle and form
            position: "relative", // Needed for absolute positioning of the label
          }}
        >
          <input
            type="text"
            placeholder="Your app code"
            style={{ marginBottom: "10px", width: "100%", color: "grey" }} // Added grey text color
          />
          <input
            type="text"
            placeholder="NEAR address"
            style={{ width: "100%", color: "grey" }} // Added grey text color
          />
        </div>
        <button
          style={{
            backgroundColor: "white",
            color: "hotpink",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            marginTop: "20px",
          }}
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default AirdropPage;
