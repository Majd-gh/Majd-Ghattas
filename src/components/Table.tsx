
import students from "../data/students";
type TableProps={
    level:number
}
const Table = ({level} : TableProps) => {
    return (
      <table className="table">
        <thead>
          <td>Name</td>
          <td>Level</td>
          <td>Average Score</td>
        </thead>
        <tbody>
            {
                students.map((value,id)=>{
                    return (
                        <>
                        {
                            (value.level==level || level==0) ?
                            <tr key={id}>
                                <td>{value.name}</td>
                                <td>{value.level}</td>
                                <td>{value.averageScore}</td>
                            </tr>
                            : <tr key={id}></tr>
                        }</>
                        
                    );
                })
            }
        </tbody>
      </table>
    );
}
 
export default Table;