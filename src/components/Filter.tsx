type filterProps={
    setLevel: ()=>{}
}
const Filter = ({setLevel} : filterProps) => {
    return (
      <div className="filter">
        <div>Filter By Level</div>
        <select onChange={(e)=>{setLevel(e.target.value)}}>
          <option value={0}>All Level</option>
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
        </select>
      </div>
    );
}

export default Filter;