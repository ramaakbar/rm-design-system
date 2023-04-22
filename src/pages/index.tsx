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
      <div className="inline-flex flex-col">
        <a href="https://aether.thcl.dev">Aether Design System</a>
        <a href="https://ui.shadcn.com"> Shad ui</a>
        <a href="https://reshaped.so"> Reshaped</a>
      </div>
    </>
  );
}
