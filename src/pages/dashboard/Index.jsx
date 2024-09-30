import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import Layout from "../../layouts/dashboards/Layout";
import Container from "../../layouts/dashboards/Container";

export default function Index() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 820],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <Layout title="Dashboard">
        <Container
          className="sm:!col-span-6"
          title="Invoice">
          <Chart
            type="bar"
            data={chartData}
            options={chartOptions}
          />
        </Container>
        <Container
          className="sm:!col-span-6 sm:-mt-14"
          title="Pendapatan">
          <Chart
            type="line"
            data={chartData}
            options={chartOptions}
          />
        </Container>
        <Container title="Pengguna Terbaru">
          <div class="relative rounded-xl overflow-auto">
            <div class="shadow-sm overflow-x-scroll my-8">
              <table class="border-collapse table-auto w-full text-sm min-w-[600px]">
                <thead>
                  <tr>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Song
                    </th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Artist
                    </th>
                    <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                  <tr>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      Malcolm Lockyer
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1961
                    </td>
                  </tr>
                  <tr>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Witchy Woman
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      The Eagles
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1972
                    </td>
                  </tr>
                  <tr>
                    <td class="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Shining Star
                    </td>
                    <td class="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                      Earth, Wind, and Fire
                    </td>
                    <td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      1975
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
