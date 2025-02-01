function Form() {
  return (
    <main>
      <form>
        <div>
      <label htmlFor="top-text">top Text</label>
         <input  id="top-text" type="text" placeholder="Top text" className="form--input" />
       </div>
       <div>
       <label htmlFor="bottom-text">Bottom Text </label>
          <input id="bottom-text" type="text" placeholder="bottom text" className="form--input" />
       </div>
        <button className="form--button" >Get a new image 🖼️ </button>
      </form>
    </main>
  );
}

export default Form;
