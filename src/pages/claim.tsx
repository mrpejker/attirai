import React, { useEffect, useState } from "react";

interface ClaimData {
  property1: string;
  property2: number;
  // ... other properties
}

const ClaimPage: React.FC = () => {
  const [data, setData] = useState<ClaimData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vself.app/claim/2537519565?strings=235222017374",
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const jsonData: ClaimData = await response.json();
        setData(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
        } else {
          console.error("Error fetching data:", error);
        }
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
