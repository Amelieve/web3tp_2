import Chart from "https://esm.sh/chart.js/auto";
 /* Mise en place du fonts pour le chawrt */
Chart.defaults.font.family = 'Droidobesh';
 /* Code pour le graphique */
let graphique = new Chart(document.querySelector("#s"), {
  type: "radar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
     /* Données pour former le graphique */
    datasets: [
      {
        label: "chat",
         /* Données précises */
        data: [18, 28, 16, 36, 38, 8],
         /* Couleurs de la section */
        backgroundColor: "rgba(21, 64, 94, 0.53)",
        pointBackgroundColor: "rgb(58, 78, 99)",
        borderWidth: 0
      },
      {
        label: "meow",
        /* Données précises */
        data: [19, 20, 18, 30, 27, 28],
        /* Couleurs de la section */
        backgroundColor: "rgba(110, 253, 255, 0.66)",
        pointBackgroundColor: "rgb(131, 207, 218)",
        borderWidth: 0
      },
      {
        label: "gato",
        /* Données précises */
        data: [15, 28, 25, 22, 17, 6],
        /* Couleurs de la section */
        backgroundColor: "rgba(68, 102, 152, 0.6)",
        pointBackgroundColor: "rgb(161, 167, 234)",
        borderWidth: 0
      }
    ]
  },
   /* Texte informatique */
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: "Nombre de chats"
      }
    },
    scales: {
      r: {
        angleLines: {
          color: "rgba(222,222,222,0.1)"
        },
        grid: {
          circular: false,
          color: "rgba(222,222,222,0.1)"
        },
        ticks: { stepSize: 10, showLabelBackdrop: false }
      }
    }
  }
});
 /* Animation du graphique */
setInterval(() => {
for (let ds of graphique.data.datasets) {
for (let i = 0; i < ds.data.length; i++) {
ds.data[i] = Math.round(Math.random() * 40 + 10);
    }
  }
graphique.update();
 }, 1000);