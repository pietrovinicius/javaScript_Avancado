var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(`index.js: \n${campos}`);
//pegou o corpo da tabela
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
    //capturando a coluna tr
    var tr = document.createElement('tr');
    campos.forEach(function (campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
        console.log(`coluna com o valor ${campo.value}`);
    });

    var tdVolume = document.createElement('td');
    //adicionando o valor para essa td
    var cal = campos[1].value * campos[2].value;
    cal = cal.toFixed(2);
    tdVolume.textContent ="R$" + cal;
    //na tr adicionou a td recem criada
    tr.appendChild(tdVolume);
    //adicionou ao corpo da tabela a linha com os dados
    //td td td td na tr 
    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});