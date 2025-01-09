import Student from "./props/students"

function App() {
  return (
   <div>
    <Student Student_Name=" Viswaa" Student_Age={20} Is_Student={true} />
    <Student Student_Name=" Raja" Student_Age={20} Is_Student={false} />
    <Student Student_Name=" Vinson" Student_Age={19} Is_Student={true} />
   </div>
  )
}

export default App
