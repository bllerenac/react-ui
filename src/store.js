const STORE = {
  links: [
    { name: "Inicio", selected: false },
    { name: "Hoy", selected: true },
    { name: "Siguiendo", selected: false },
  ],
  cards: [
    {
      id:1,
      date: "18/02/2021",
      cards: [
          {
            tittle: "Agendas y bullet journals",
            description: "Para días más productivos",
            img: "",
          },

          {
            tittle: "Para IOS",
            description: "Intereses, el nuevo Widget de Pinterest",
            img: "",
          },

          {
            tittle: "Gafas de sol",
            description: "Un accesorio que no puede faltar en tu look",
            img: "",
          },      
        ],
    },

    {
      id:2,
      date: "2021/02/17",
      cards:[
        {
          tittle: "Estilo colonial y moderno",
          description: "Un viaje por la arquitectura mexicana",
          img: "",
        },

        {
          tittle: "Inteligencia Artificial",
          description: "Cómo utilizarla para un mundo mejor",
          img: "",
        },

        {
          tittle: "Ideas para decorar",
          description: "Espejos con mucho estilo para tu casa",
          img: "",
        },

        {
          tittle: "Agendas y bullet journals",
          description: "Para días más productivos",
          img: "",
        },
      ]
    },
  ]
}

export default STORE;
