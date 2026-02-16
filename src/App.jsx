import { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
import "./index.css";

export default function App() {
  const [date, setDate] = useState(new Date());
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    let lastTriggered = -1;

    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setDate(now);

      if (hours === minutes && minutes !== lastTriggered) {
        jsConfetti.addConfetti();
        lastTriggered = minutes;
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => num.toString().padStart(2, "0");

  return (
    <main>
      <p className="text-5xl">
        {format(date.getHours())}:{format(date.getMinutes())}
      </p>
    </main>
  );
}
