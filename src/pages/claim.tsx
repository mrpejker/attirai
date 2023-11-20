import React, { useEffect, useState } from "react";

const ClaimPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vself.app/claim/2537519565?strings=235222017374",
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Claim Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default ClaimPage;
