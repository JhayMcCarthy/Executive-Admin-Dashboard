document.addEventListener("DOMContentLoaded", function () {

  //=====================================
  // Theme Onload Toast
  //=====================================
  window.addEventListener("load", () => {
    let myAlert = document.querySelectorAll('.toast')[0];
    if (myAlert) {
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
  })

  // -----------------------------------------------------------------------
  // Total Active Projecs
  // -----------------------------------------------------------------------

  var options = {
    series: [350, 150], // cashflow, non-cashflow
    chart: {
      type: "donut",
      height: 400,
      width: 400,
    },
    labels: ["Cashflow", "Non-Cashflow"],
    legend: {
      position: "bottom",
      itemMargin: {
        horizontal: 20,
      },
    },
    
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: "Total",
            },
            value: {
              fontSize: "20px",
              show: true,
            },
          },
        },
      },
    },
    colors: ["#32CD32", "#0000FF"], // colors for cashflow and non-cashflow
  };
  var chart = new ApexCharts(document.querySelector("#total-active-projects"), options);
  chart.render();
  

  // -----------------------------------------------------------------------
  // Data Warehouse
  // -----------------------------------------------------------------------

  var options = {
    series: [
      {
        name: 'Available Space',
        data: [250, 300, 280, 230, 350, 420, 300, 450, 400, 500, 380, 480],
      },
      {
        name: 'Used Space',
        data: [200, 250, 300, 280, 320, 350, 250, 400, 330, 420, 280, 440],
      },
    ],
    chart: {
      id: 'warehouse-availability',
      type: 'area',
      height: 400,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.1,
        stops: [100],
      },
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: true,
        position: 'right',
      },
      x: {
        show: false,
      },
      y: {
        formatter: function(val) {
          return val.toLocaleString();
        },
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        formatter: function(val) {
          return val.toLocaleString();
        },
      },
    },
    legend: {
      show: true,
    },
  };
  
  new ApexCharts(document.querySelector('#warehouse-availability'), options).render();
  
  
    

  // -----------------------------------------------------------------------
  // Server response score
  // -----------------------------------------------------------------------
  var chart_bounce_rate = {
    series: [
      {
        name: "Server Response Score",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [85, 90, 92, 88, 95, 90, 70, 50, 95, 80, 95, 60],
      },
    ],
    chart: {
      fontFamily: "inherit",
      height: 350,
      type: "bar",
      offsetX: -10,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    colors: ["#009900"], // Set a color for the chart
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "flat",
        borderRadius: 4,
      },
    },
    tooltip: {
      theme: "dark",
      followCursor: true,
    },
    yaxis: {
      labels: {
        formatter: function(val) {
          return val + "%";
        },
      },
      min: 0,
      max: 100,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  };
  var chart_line_basic = new ApexCharts(
    document.querySelector("#server-response-score"),
    chart_bounce_rate
  );
  chart_line_basic.render();
  
  

  // -----------------------------------------------------------------------
  // Target vs Actual 
  // -----------------------------------------------------------------------

  var chart = {
    series: [
      {
        name: "Actual",
        data: [50, 60, 30, 55, 75, 60, 100, 120, 80, 130, 58, 150,],
      },
      {
        name: "Target",
        data: [70, 80, 50, 70, 90, 80, 140, 160, 100, 150, 70, 160,],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
      fontFamily: "inherit",
      foreColor: "#0000ff",
      height: 450,
      width: "100%",
      zoom: {
        enabled: false,
      },
      offsetX: -10,
    },
    colors: ["#ff0000", "#0000ff"],
    plotOptions: {},
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      itemMargin: {
        horizontal: 20,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    grid: {
      show: true,
      padding: {
        top: 0,
        bottom: 0,
      },
      borderColor: "rgba(0,0,0,0.05)",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec",],
    },
    markers: {
      size: 4,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          fill: "var(--bs-secondary)",
          stroke: "var(--bs-secondary)",
          size: 6,
        },
      ],
    },
    tooltip: {
      theme: "dark",
    },
  };
  
  var chart = new ApexCharts(
    document.querySelector("#actual-target"),
    chart
  );
  chart.render();
  ;

  // =====================================
  // Network Latency
  // =====================================

  // Define chart options
var options = {
  series: [{
    name: 'Network Latency',
    data: [20, 30, 15, 40, 50, 60, 70, 80, 90, 100]
  }],
  chart: {
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 300,
      animateGradually: {
        enabled: true,
        delay: 500
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  xaxis: {
    categories: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45']
  },
  yaxis: {
    title: {
      text: 'Latency (ms)'
    },
    min: 0,
    max: 100
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 20,
      right: 20
    }
  },
  tooltip: {
    x: {
      format: 'HH:mm'
    },
    y: {
      formatter: function(value) {
        return value + ' ms'
      }
    }
  },
  responsive: [{
    breakpoint: 1400,
    options: {
      chart: {
        height: 250
      }
    }
  }]
}

// Create chart
var chart = new ApexCharts(document.querySelector("#Network-Latency"), options);
chart.render();



  // -----------------------------------------------------------------------
  // Timeline Vs Slippage
  // -----------------------------------------------------------------------
  var options = {
    chart: {
        type: 'area',
        height: 350,
        offsetX: 0,
        offsetY: 0
        
    },
    series: [
        {
            name: 'Timeline',
            data: [70, 90, 80, 85, 70, 80, 90, 85, 70, 80, 90, 85]
        },
        {
            name: 'Slippage',
            data: [30, 40, 20, 15, 30, 60, 40, 15, 30, 20, 10, 15]
        }
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    colors: ['#008000', '#CC0066'],
    xaxis: {
        type: 'category'
    },
    legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'top',
        offsetX: 60,
        offsetY: 0
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: true,
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#timeline-vs-slippage"), options);
chart.render();


  // -----------------------------------------------------------------------
  // Activity Output vs Service Experience
  // -----------------------------------------------------------------------

  var chart_users2 = {
    series: [
      {
        name: "April 07 ",
        data: [0, 20, 15, 19, 14, 25, 30],
      },
      {
        name: "Last Week",
        data: [0, 8, 19, 13, 26, 16, 25],
      },
    ],
    chart: {
      fontFamily: "inherit",
      height: 100,
      type: "line",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["var(--bs-primary)", "var(--bs-primary-bg-subtle)"],
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["var(--bs-primary)", "var(--bs-primary-bg-subtle)"],
      width: 2,
    },
    markers: {
      colors: ["var(--bs-primary)", "var(--bs-primary-bg-subtle)"],
      strokeColors: "transparent",
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      followCursor: true,
    },
  };
  var chart_line_basic = new ApexCharts(
    document.querySelector("#sales-overview"),
    chart_users2
  );
  chart_line_basic.render();
  // -----------------------------------------------------------------------
  // Total settlements
  // -----------------------------------------------------------------------
  var activityOutput = {
    series: [
      {
        name: "Activity Output",
        data: [
          40, 40, 80, 80, 30, 30, 10, 10, 30, 30, 100, 100, 20, 20, 140, 140,
        ],
      },
      {
        name: "Service Experience",
        data: [
          20, 20, 60, 60, 50, 50, 30, 30, 60, 60, 150, 150, 40, 40, 120, 120,
        ],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "line",
      height: 300,
      toolbar: { show: !1 },
    },
    legend: { show: !0 },
    dataLabels: { enabled: !1 },
    stroke: {
      curve: "smooth",
      show: !0,
      width: 2,
      colors: ["var(--bs-primary)", "var(--bs-secondary)"],
    },
    xaxis: {
      categories: [
        "1W",
        "",
        "3W",
        "",
        "5W",
        "6W",
        "7W",
        "8W",
        "9W",
        "",
        "11W",
        "",
        "13W",
        "",
        "15W",
      ],
      axisBorder: { show: !1 },
      axisTicks: { show: !1 },
      tickAmount: 6,
      labels: {
        rotate: 0,
        rotateAlways: !0,
        style: { fontSize: "10px", colors: "#adb0bb", fontWeight: "600" },
      },
    },
    yaxis: {
      show: false,
      tickAmount: 3,
    },
    tooltip: {
      theme: "dark",
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)"],
    grid: {
      borderColor: "var(--bs-primary-bg-subtle)",
      strokeDashArray: 4,
      yaxis: { show: true },
    },
    markers: {
      strokeColor: ["var(--bs-primary)", "var(--bs-secondary)"],
      strokeWidth: 3,
    },
  };
  
  var chart_area_spline = new ApexCharts(
    document.querySelector("#activity-output"),
    activityOutput
  );
  chart_area_spline.render();
  
});
