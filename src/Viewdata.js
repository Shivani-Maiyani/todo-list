function Viewdata(){
   let i;
    const items=JSON.parse(localStorage.getItem('data'));
    console.log(items);
    console.log(items.text);
   
    const item = items.map((i) =>{
      console.log(i);
      return(
        <div>
            <p>{i.text}</p>
        </div>
      );
  });
  return(
      <div>
          <p>{item}</p>
      </div>
  )
}
export default Viewdata;