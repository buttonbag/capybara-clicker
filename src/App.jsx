import { useEffect, useState } from "react";

export default function App() {
  const [fedCount, setFedCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  useEffect(() => {
    console.log("nom nom nom");
    console.log("---");
  });

  return (
    <>
      <h1>Capybara Clicker</h1>

      <p>
        This capybara has been fed <strong>{fedCount}</strong> times!
      </p>
      <p>
        This capybara has been pet <strong>{petCount}</strong> times!
      </p>

      <figure onClick={() => setFedCount(fedCount + 1)}>
        {/* Assets in the public/ directory can be referenced using an absolute path. */}
        <img src="/capybara.jpg" alt="Capybara lazing in some grass" />
      </figure>

      <section id="controls">
        <button onClick={() => setFedCount(fedCount + 1)}>Feed</button>
        <button onClick={() => setPetCount(petCount + 1)}>Pet</button>
      </section>
    </>
  );
}
