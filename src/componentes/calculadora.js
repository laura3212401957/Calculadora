import { useState } from "react";
import Button from "../boton";

const Contador = () => {
const [contador, setContador] = useState(""); //almacena el numero actual
const [contador2, setContador2] = useState(""); // almacena el primer numero
const [operacion, setOperacion] = useState(""); //almacena la operacion a realizar
const imputNumber = (num) => setContador(contador+num); //concatena los numeros para formar el numero completo


//funciones de las operaciones
function Aumentar() {
    setContador(String(Number(contador2) + Number(contador))); //convierte a entero, recibe las dos variables
}
function Disminuir() {
    setContador(String(Number(contador2) - Number(contador)));
}
function Multiplicar() {
    setContador(String(Number(contador2) * Number(contador)));
}
function Dividir() {
    setContador(String(Number(contador2) / Number(contador)));
}


//setea el primer numero, limpia el contador para el segundo y guarda el tipo de operacion
function sumar(inp) {
    setContador2(contador);
    setContador("");
    setOperacion("+");
}
function restar(inp){
    setContador2(contador);
    setContador("");
    setOperacion("-");
}
function multiplicar(inp){
    setContador2(contador);
    setContador("");
    setOperacion("*");
}
function dividir(inp){
    setContador2(contador);
    setContador("");
    setOperacion("/");
}  

// con una condicion realiza la operacion segun el signo a calcular
function calcularR(){
    if(operacion === "+"){
        Aumentar();
    }else if(operacion === "-"){
        Disminuir();
    }else if(operacion === "*"){
        Multiplicar();
    }else if(operacion === "/"){
        Dividir();
    }
}

return (
<div>
    <label>Contador: {contador}</label>
    <br/>
    <Button onClick={()=> imputNumber(0)}>0</Button>
    <br/>
    <Button onClick={()=> imputNumber(1)}>1</Button>
    <Button onClick={()=> imputNumber(2)}>2</Button>
    <Button onClick={()=> imputNumber(3)}>3</Button>
    <br/>
    <Button onClick={()=> imputNumber(4)}>4</Button>
    <Button onClick={()=> imputNumber(5)}>5</Button>
    <Button onClick={()=> imputNumber(6)}>6</Button>
    <br/>
    <Button onClick={()=> imputNumber(7)}>7</Button>
    <Button onClick={()=> imputNumber(8)}>8</Button>
    <Button onClick={()=> imputNumber(9)}>9</Button>
    <br/>
    <Button onClick={()=>sumar("+") }>Sumar</Button>
    <Button onClick={()=>restar("-") }>Restar</Button>
    <br/>
    <Button onClick={()=>multiplicar("*") }>Multiplicar</Button>
    <Button onClick={()=>dividir("/") }>Dividir</Button>
    <br/>
    <Button onClick={calcularR}>=</Button>
    
</div>

    );
};

export default Contador;