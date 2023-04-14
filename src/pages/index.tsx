export default function Home() {
  return (
    <main className="mx-4 min-h-screen">
      <input type="text" />
      <select name="" id="">
        <option value="">asdas</option>
        <option value="">asdas</option>
        <option value="">asdas</option>
      </select>

      <label className="block">
        <span className="text-gray-700">Full name</span>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="name"
          className="block w-full rounded-md border-0 bg-transparent px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
        ></input>
      </label>
    </main>
  );
}
