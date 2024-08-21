"use client";

import { useState } from "react";

const Page = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const flipCoin = async () => {
    setLoading(true);
    setResult(null);

    const response = await fetch("/api/heads-tails");
    const data = await response.json();

    setResult(data.result);
    setLoading(false);
  };
  const [number1, setNumber1] = useState<string>("");
  const [number2, setNumber2] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ranloading, setranLoading] = useState<boolean>(false);

  const fetchRandomNumber = async () => {
    setranLoading(true);
    setRandomNumber(null);
    setError(null);

    try {
      const response = await fetch(`/api/random?number1=${number1}&number2=${number2}`);
      const data = await response.json();

      if (response.ok) {
        setRandomNumber(data.randomNumber);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("An error occurred while fetching the random number.");
    } finally {
      setranLoading(false);
    }
  };

  return (
    <main className="card">
      <div className="card-body">
        <button onClick={flipCoin} disabled={loading} className="btn">
          {loading ? "Flipping..." : "Flip Coin"}
        </button>
        {result && <p>The result is: {result}</p>}
      </div>
      <div className="card-body">
        <input
          placeholder="Smallest Num"
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          className="input input-primary"
        />
        <input
          placeholder="Biggest Num"
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          className="input input-primary"
        />
        <button onClick={fetchRandomNumber} disabled={ranloading} className="btn">
          {ranloading ? "Generating..." : "Generate"}
        </button>
        {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </main>
  );
};

export default Page;