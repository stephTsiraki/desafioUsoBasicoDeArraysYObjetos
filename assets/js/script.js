/*Debe crear 1 arreglo por cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de
información que contengan los listados, considerando las propiedades establecidas en la descripción.
*/
//RADIOLOGIA
var radiologia = [{

        hora: '11:00',
        especialista: 'Ignacio Shulz',
        paciente: 'Francisca Rojas',
        rut: '9878782-1',
        prevision: 'Fonasa'
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'Isapre'
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando luna',
        rut: '16445345-3',
        prevision: 'Isapre'

    },
    {
        hora: '15:30',
        especialista: 'Ana Maria Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'Fonasa'
    },
    {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Ulloa',
        rut: '14989389-k',
        prevision: 'Fonasa'
    }




]
//TRAUMATOLOGIA
var traumatologia = [{

        hora: '08:00',
        especialista: 'Maria Paz Alturraza',
        paciente: 'Paula Sanchez',
        rut: '15554774-5',
        prevision: 'Fonasa'
    },
    {
        hora: '10: 00',
        especialista: 'Raul Araya',
        paciente: 'Angelica Navas',
        rut: '15444147-9',
        prevision: 'Isapre'
    },
    {
        hora: '10:30',
        especialista: 'Maria Arriagada',
        paciente: 'Ana Klapp',
        rut: '17879423-9',
        prevision: 'Isapre'

    },
    {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        rut: '1547423-6',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diego Marre',
        rut: '16554741-k',
        prevision: 'Fonasa'
    },
    {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9747535-8',
        prevision: 'Isapre'
    },
    {
        hora: '12:30',
        especialista: 'Andres Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11254785-5',
        prevision: 'Isapre'
    }
]

//DENTAL
var dental = [{

        hora: '08:30',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'Isapre'
    },
    {
        hora: '11: 00',
        especialista: 'Maria Pia Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'Isapre'
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario KKKast',
        rut: '7998789-5',
        prevision: 'Fonasa'

    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18887662-k',
        prevision: 'Fonasa'
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'Fonasa'
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'Isapre'
    }
]

/* Mostrar por pantalla la primera y última atención de cada listado, desplegando el nombre del paciente 
junto con la previsión, separados por un guión (utilizar índices de arreglos para esto).
Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.*/

for (let datos of radiologia) {
    document.getElementById("tablaRadio").innerHTML += `
    <tr>
        <td>${datos.hora}</td>
        <td>${datos.especialista}</td>
        <td>${datos.paciente}</td>
        <td>${datos.rut}</td>
        <td>${datos.prevision}</td>
    </tr>`;
}
for (let datos of traumatologia) {
    document.getElementById("tablaTrauma").innerHTML += `
    <tr>
        <td>${datos.hora}</td>
        <td>${datos.especialista}</td>
        <td>${datos.paciente}</td>
        <td>${datos.rut}</td>
        <td>${datos.prevision}</td>
    </tr>`;
}
for (let datos of dental) {
    document.getElementById("tablaDental").innerHTML += `
    <tr>
        <td>${datos.hora}</td>
        <td>${datos.especialista}</td>
        <td>${datos.paciente}</td>
        <td>${datos.rut}</td>
        <td>${datos.prevision}</td>
    </tr>`;
}

/*2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
nombre del paciente junto con la previsión, separados por un guión (utilizar índices
de arreglos para esto).
Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.
3. Recorrer el arreglo y mostrar su contenido en una tabla.*/

document.getElementById("infoRadio").innerHTML = (`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[4].paciente} - ${radiologia[4].prevision}`)


document.getElementById("infoTrauma").innerHTML = (`Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[6].paciente} - ${traumatologia[6].prevision}`)


document.getElementById("infoDental").innerHTML = (`Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[5].paciente} - ${dental[5].prevision}`)
