export default function Home() {
  return (
    <>
      <div>Docs {">"} About</div>
      <h1 className="text-2xl font-bold">RM Design System</h1>
      <p className="max-w-xl">
        A Design system used for my personal usage. Feel free to use my design
        system, or even contribute to make it better!
      </p>
      <p className="max-w-xl">Heavily Inspired by:</p>
      <div className="flex flex-col">
        <a href="https://aether.thcl.dev">Aether Design System</a>
        <a href="https://ui.shadcn.com"> Shad ui</a>
        <a href="https://reshaped.so"> Reshaped</a>
      </div>
      <label className="block">
        <span className="text-gray-700">Full name</span>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="name"
          className="block w-full rounded-md border-0 bg-transparent px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        ></input>
      </label>
    </>
  );
}
