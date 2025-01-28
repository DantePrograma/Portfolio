import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="w-full min-h-screen">
      <main className="relative max-w-5xl mx-auto z-10">
        <Header />
        <Presentation />

        <Skills />

        <h2 className="flex mt-10 items-center mb-6 text-4xl font-bold gap-x-2 text-black/80 dark:text-white">
          Projects
        </h2>
        <Projects />
      </main>
      <div className="absolute  top-0 bottom-0 bg-gradient-to-b bg-gray-900  z-[-1] w-full"></div>
    </div>
  );
}

export default App;
