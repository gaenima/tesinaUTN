import md5 from 'md5';

export const defaultState = {
  // session: {
  //       authenticated:false
  // },
    users: [
      {
        id: "U1",
        name: "Dev",
        passwordHash:md5("TUPLES")
        //passwordHash: md5("TUPLES"),
        //friends: [`U2`],
      },
      {
        id: "U2",
        name: "Tester",
        passwordHash:md5("PROFITING")
        // passwordHash: md5("PROFITING"),
        // friends: [],
      }
    ],
    groups: [
      {
        name: "Por hacer",
        id: "G1",
        owner: "U1",
        total: 0,
      },
      {
        name: "En proceso",
        id: "G2",
        owner: "U1",
        total: 0,
      },
      {
        name: "Finalizado",
        id: "G3",
        owner: "U1",
        total: 0,
      }
    ],
    tasks: [
      {
        name: "testear",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false,
      },
      {
        name: "entrevista",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: true,
      },
      {
        name: "Compilar ES6",
        id: "T3",
        group: "G2",
        owner: "U1",
        isComplete: false,
      },
      {
        name: "actualizar componentes",
        id: "T4",
        group: "G2",
        owner: "U1",
        isComplete: true,
      },
      {
        name: "optimizar producción",
        id: "T5",
        group: "G3",
        owner: "U1",
        isComplete: false,
      }
    ],
    comments: [
      {
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "¡¡Gran trabajo!!",
      }
    ],
    budgets: [
      {      
        name: "Presupuesto en A$R ",
        id: "B1",
        amountInitial: 1000.00,
        amountFinal: 0.00,
        owner: "U1"
      },
      // {       
      //   name: "Presupuesto B",
      //   id: "B2",
      //   amountInitial: 500,
      //   
      //   owner: "U1"
      // }
    ],
    expenses: [
      {
        id: "E1",
        name: "Transporte",
        amount: 100.00,
        bud: "B1",
        owner: "U1"
      },
      {
        id: "E2",
        name: "Cuota",
        amount: 50.25,
        bud: "B1",
        owner: "U1"
      },  {
        id: "E3",
        name: "Alquiler",
        amount: 150.00,
       bud: "B1",
        owner: "U1"
      }
    ]
  }
  