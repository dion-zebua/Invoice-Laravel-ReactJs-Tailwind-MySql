import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import Layout from "../../layouts/dashboards/Layout";
import Container from "../../layouts/dashboards/Container";
import { Link } from "react-router-dom";
import globalFunction from "../../helpers/GLobalFunction";

export default function Index() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [user, setUser] = useState([]);

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

    const userTable = [
      {
        nama: "Andi Setiawan",
        handphone: "081234567890",
        company: "PT. Maju Jaya",
        total_invoice: 150,
      },
      {
        nama: "Budi Santoso",
        handphone: "082345678901",
        company: "CV. Sukses Selalu",
        total_invoice: 2500,
      },
      {
        nama: "Citra Dewi",
        handphone: "083456789012",
        company: "PT. Mitra Abadi",
        total_invoice: 750,
      },
      {
        nama: "Doni Prasetyo",
        handphone: "084567890123",
        company: "UD. Sinar Harapan",
        total_invoice: 20,
      },
      {
        nama: "Eka Ramadhani",
        handphone: "085678901234",
        company: "PT. Teknologi Canggih",
        total_invoice: 1800,
      },
    ];

    setChartData(data);
    setChartOptions(options);
    setUser(userTable);
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
          <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right">
              <thead className="uppercase text-xs bg-slate-100 text-slate-600">
                <tr className="[&_th]:px-6 [&_th]:p-3">
                  <th scope="col">Nama</th>
                  <th scope="col">Handphone</th>
                  <th scope="col">Company</th>
                  <th scope="col">Total Invoice</th>
                </tr>
              </thead>
              <tbody>
                {user.map((e, i) => (
                  <tr
                    key={i}
                    className="odd:bg-white even:bg-slate-50 border-b [&>*]:px-6 [&>*]:py-1 sm:[&>*]:py-4 [&>*]:text-slate-600">
                    <th
                      scope="row"
                      className="font-medium !text-slate-800 whitespace-nowrap">
                      <Link className="underline">{e.nama}</Link>
                    </th>
                    <td>
                      <Link
                        className="underline"
                        target="_blank"
                        to={`https://wa.me/${globalFunction.phoneNumber(e.handphone)}`}>
                        {e.handphone}
                      </Link>
                    </td>
                    <td>{e.company}</td>
                    <td>{e.total_invoice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Layout>
    </>
  );
}
