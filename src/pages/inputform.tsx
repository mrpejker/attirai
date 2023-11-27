import React from "react";

const InputForm: React.FC = () => {
  // Separate states for each preview URL
  const [photoPreviewUrl, setPhotoPreviewUrl] = React.useState<string | null>(
    null,
  );
  const [outfitPreviewUrl, setOutfitPreviewUrl] = React.useState<string | null>(
    null,
  );

  // Handle file change for the photo
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        setPhotoPreviewUrl(typeof result === "string" ? result : "");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOutfitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        setOutfitPreviewUrl(typeof result === "string" ? result : "");
      };
      reader.readAsDataURL(file);
    }
  };
  // Handle file upload
  const handleUpload = async () => {
    // Collect files from both inputs
    const photoFiles = document.getElementById(
      "your-photo",
    ) as HTMLInputElement;
    const outfitFiles = document.getElementById("outfit") as HTMLInputElement;

    const formData = new FormData();
    if (photoFiles.files) {
      Array.from(photoFiles.files).forEach((file) =>
        formData.append("photos", file),
      );
    }
    if (outfitFiles.files) {
      Array.from(outfitFiles.files).forEach((file) =>
        formData.append("outfits", file),
      );
    }

    // Only proceed if there are files
    if (formData.has("photos") || formData.has("outfits")) {
      try {
        const response = await fetch("your-upload-endpoint", {
          method: "POST",
          body: formData,
        });

        // Handle the server response
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    } else {
      alert("No files selected");
    }
  };

  // Inline styles
  const containerStyle = {
    backgroundImage: "url(BackC.png)", // Replace with the correct path to your image
    height: "100vh",
    display: "flex",
    flexDirection: "column" as "column",
  };

  const headerFooterStyle = {
    backgroundColor: "#f1f1f1",
    padding: "15px",
    textAlign: "center" as "center",
  };

  const mainStyle = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formContainerStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const inputContainerStyle = {
    marginBottom: "20px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer" as "pointer",
  };

  return (
    <div style={containerStyle}>
      <header style={headerFooterStyle}>
        Attirai: your digital fashion room
      </header>
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="your-photo">Your photo:</label>
            <input type="file" id="your-photo" onChange={handlePhotoChange} />
            {photoPreviewUrl && (
              <img
                src={photoPreviewUrl}
                alt="Photo Preview"
                style={{
                  height: "1.5cm",
                  maxWidth: "100%",
                  marginTop: "10px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="outfit">Outfit:</label>
            <input type="file" id="outfit" onChange={handleOutfitChange} />
            {outfitPreviewUrl && (
              <img
                src={outfitPreviewUrl}
                alt="Outfit Preview"
                style={{
                  height: "1.5cm",
                  maxWidth: "100%",
                  marginTop: "10px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
          <button style={buttonStyle} onClick={handleUpload}>
            Try on
          </button>
        </div>
      </main>
      <footer style={headerFooterStyle}>
        Terms and conditions & Privacy policy
      </footer>
    </div>
  );
};

export default InputForm;