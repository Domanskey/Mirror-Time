import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => num.toString().padStart(2, "0");

  return (
    <main>
      <p className="text-5xl">
        {format(date.getHours())}:{format(date.getMinutes())}:
        {format(date.getSeconds())}
      </p>
    </main>
  );
}
