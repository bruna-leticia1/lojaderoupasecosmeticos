import db from "@/lib/db"
export default async () => {
    const alunos = await db.query("select * from usuario")
 return (<>
    <h1>Lista de alunos</h1>
    <h2>sei la</h2>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div>
                  {a.nome} faz parte do projeto {a.cargo}
               </div>
            ) 
         )
      }
   </div>
 </>);
}