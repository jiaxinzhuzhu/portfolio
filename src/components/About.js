import React from "react";
import photo from "../protfolioBg.jpg";

export default function About() {
  return (
    <main className="bg-green-200 w-full h-full min-h-screen p-12">
      <div>
        <section className="flex">
          <div>
            <img src={photo} alt="Opps..." width={200} className="" />
            <div>
              <h1>Jiaxin(Jackson) Zhu</h1>
              <p>React Developer</p>
            </div>
          </div>
        </section>
        <div>
          <ul>
            <li>Java</li>
            <li>React</li>
            <li>MangoDB</li>
            <li>Devops</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
