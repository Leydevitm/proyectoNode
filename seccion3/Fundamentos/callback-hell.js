
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


const getEmpleado=(id, callback) =>{
    const empleado = empleados.find(e => e.id==id)

    if(empleado){
     // return empleado;
      callback(null,empleado);
    }else{
        //return `Empleado con id ${id} no existe`;
         callback( `Empleado con id ${id} no existe`);
    }
   
}

//console.log(getEmpleado(5));
getEmpleado(1, (err,empleado)=>{
    if(err){
        console.log('Error')
        return console.log(err);
    }
    console.log('Empleado encontrado');
    console.log(empleado);
})