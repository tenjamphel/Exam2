export default function Page() {
    return (
      <>
      <h1 className="text-3xl ml-5">Final Exam</h1>
      <form>
        <label htmlFor="product" className="ml-5">Product Description</label>
        <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400"/>
        <br />
        <label htmlFor="cars">Choose a car:</label>

        <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>

        <br />


        <div className="ml-5 mt-5">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label><br />
        <input type="radio" id="css" name="fav_language" value="CSS"/>
        <label htmlFor="css">CSS</label><br />
        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
        <label htmlFor="javascript">JavaScript</label>
        </div>

        <div className="ml-5 mt-5">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> I have a bike</label><br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label><br />
        </div>

        <br />


        <button className="ml-10 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Save</button>
      </form>

      </>
    );
  }
  