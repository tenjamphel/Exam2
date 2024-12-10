export default function Page() {
    return (
      <>
      <h1 className="text-3xl ml-5">Final Exam</h1>
      <form>
        <label htmlFor="product" className="ml-5">Product Description</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400"/>
        <br />
        <button className="ml-10 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Save</button>
      </form>

      </>
    );
  }
  