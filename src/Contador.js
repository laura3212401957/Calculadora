import {UseState} from 'react';

    const Contador = () => {
    const [contador, setContador] = UseState(0);
    const imputNumber = (num) => setContador(num);
    const incrementar = () => SetContador(contador + 1);
    return (
        <div id="contador">
    <label>Contador: {contador}</label>
    <button onClick={incrementar}>incrementar</button>
    <button onClick={()=> imputNumber(0)}>0</button>
    <button onClick={()=> imputNumber(1)}>1</button>
    <button onClick={()=> imputNumber(2)}>2</button>
    <button onClick={()=> imputNumber(3)}>3</button>
    <button onClick={()=> imputNumber(4)}>4</button>
    <button onClick={()=> imputNumber(5)}>5</button>
    <button onClick={()=> imputNumber(6)}>6</button>
    <button onClick={()=> imputNumber(7)}>7</button>
    <button onClick={()=> imputNumber(8)}>8</button>
    <button onClick={()=> imputNumber(9)}>9</button>
    </div>
    );
}
 export default Contador;