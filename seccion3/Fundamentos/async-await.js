
const empleados=[
    {
    id:1,
    nombre: 'Leivy'
    },
    {
        id:2,
        nombre: 'Ana'
    },
    {
        id:3,
        nombre: 'Luis'
    }

];

const salarios=[
    {
    id:1,
   salario:1000
    },
    {
        id:2,
       salario:5100
    }
   

];


const getEmpleado=(id) =>{
   
    return new Promise((resolve,reject )=>{
     
  const empleado = empleados.find(e => e.id==id)?.nombre;

     (empleado)
     ? resolve(empleado)
     :
     reject(`No existe un empleado con el id ${id}`);
     
    });
    
}

const getSalario =(id)=>{
    return new Promise((resolve,reject)=>{
        const salario = salarios.find(s=>s.id==id)?.salario;
        (salario)
        ? resolve(salario)
        :
        reject(`No existe un salario con el id ${id}`);
    });
}

const getInfoUsuario =async (id)=>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de: $${salario}`;
        } catch (error) {
            return error;
        
    }
}



const id=3; 
getInfoUsuario(id)
.then(msg => console.log(msg))
.catch(err => console.log(err));
