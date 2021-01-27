const flattend = [[0, 1], [2, 3], [4, 5]].reduce(
    (acumulador, array) => {
        console.log('Array', array);
        console.log('Acumulador', acumulador);
        return acumulador.concat(array)
}, []);

const flattend = [[0, 1], [2, 3], [4, 5]].reduce(
    (acumulador, array) => {
        debugger;
        return acumulador.concat(array)
    }, []);
        