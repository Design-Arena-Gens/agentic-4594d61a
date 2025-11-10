import type { CSSProperties } from "react";

const grassBladeCount = 55;

const range = (count: number) => Array.from({ length: count }, (_, i) => i);

export default function Page() {
  return (
    <main className="page">
      <section className="scene" aria-label="Lone samurai resting in tall grass beneath a brooding sky.">
        <div className="sky" />
        <div className="moon" />
        <div className="ambient-glow" />
        <div className="ground-haze" />
        <div className="cloud cloud--1" />
        <div className="cloud cloud--2" />
        <div className="cloud cloud--3" />
        <div className="cross-light" />
        <div className="samurai">
          <div className="samurai__helmet" />
          <div className="samurai__mask" />
          <div className="samurai__shoulder samurai__shoulder--left" />
          <div className="samurai__shoulder samurai__shoulder--right" />
          <div className="samurai__torso" />
          <div className="samurai__knee" />
          <div className="samurai__hand" />
        </div>
        <div className="katana">
          <div className="katana__blade" />
          <div className="katana__guard" />
          <div className="katana__hilt" />
        </div>
        <div className="grass grass--back">
          {range(grassBladeCount).map((index) => (
            <span
              className="blade"
              key={`back-${index}`}
              style={{ "--index": index } as CSSProperties}
            />
          ))}
        </div>
        <div className="grass grass--mid">
          {range(grassBladeCount).map((index) => (
            <span
              className="blade"
              key={`mid-${index}`}
              style={{ "--index": index } as CSSProperties}
            />
          ))}
        </div>
        <div className="grass grass--front">
          {range(grassBladeCount).map((index) => (
            <span
              className="blade"
              key={`front-${index}`}
              style={{ "--index": index } as CSSProperties}
            />
          ))}
        </div>
        <div className="floating-embers">
          {range(18).map((index) => (
            <span
              className="ember"
              key={`ember-${index}`}
              style={
                {
                  "--index": index,
                  "--delay": `${index * 0.8}s`
                } as CSSProperties
              }
            />
          ))}
        </div>
      </section>
      <footer className="caption">
        <h1>Silent Vigil</h1>
        <p>
          A lone samurai endures the restless wind, his spirit reflecting beneath
          a desolate moonlit sky.
        </p>
      </footer>
    </main>
  );
}
