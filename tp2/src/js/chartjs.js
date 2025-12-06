import Chart from "https://esm.sh/chart.js/auto";

Chart.defaults.font.family = 'Droidobesh';

let graphique = new Chart(document.querySelector("canvas"), {
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
    datasets: [
      {
        label: "chat",
        data: [18, 28, 16, 36, 38, 8],
        backgroundColor: "rgba(21, 64, 94, 0.53)",
        pointBackgroundColor: "rgb(58, 78, 99)",
        borderWidth: 0
      },
      {
        label: "meow",
        data: [19, 20, 18, 30, 27, 28],
        backgroundColor: "rgba(110, 253, 255, 0.66)",
        pointBackgroundColor: "rgb(131, 207, 218)",
        borderWidth: 0
      },
      {
        label: "gato",
        data: [15, 28, 25, 22, 17, 6],
        backgroundColor: "rgba(68, 102, 152, 0.6)",
        pointBackgroundColor: "rgb(161, 167, 234)",
        borderWidth: 0
      }
    ]
  },
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

setInterval(() => {
for (let ds of graphique.data.datasets) {
for (let i = 0; i < ds.data.length; i++) {
ds.data[i] = Math.round(Math.random() * 40 + 10);
    }
  }
graphique.update();
 }, 1000);