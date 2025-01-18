import React, { useState, useEffect } from "react";
import Card from "../../components/cards/Card";
import MainLayout from "../../layouts/mainLayouts/mainLayouts";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<any>({
    totalVisits: 0,
    visitsByMonth: [],
    visitsByStatus: { Active: 0, Inactive: 0, Pending: 0 },
  });

  // Simula la carga de datos (aquí puedes realizar una petición a tu API)
  useEffect(() => {
    const fetchData = () => {
      // Simulando datos de visitas (deberías reemplazarlo por una consulta real)
      setStats({
        totalVisits: 3500,
        visitsByMonth: [
          { month: "Enero", count: 300 },
          { month: "Febrero", count: 450 },
          { month: "Marzo", count: 500 },
          { month: "Abril", count: 400 },
          { month: "Mayo", count: 600 },
        ],
        visitsByStatus: { Active: 2500, Inactive: 800, Pending: 200 },
      });
    };

    fetchData();
  }, []);

  // Datos para el gráfico de visitas por mes
  const visitsByMonthData = {
    labels: stats.visitsByMonth.map((item: any) => item.month),
    datasets: [
      {
        label: "Visitas por Mes",
        data: stats.visitsByMonth.map((item: any) => item.count),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  // Datos para el gráfico de visitas por estado
  const visitsByStatusData = {
    labels: Object.keys(stats.visitsByStatus),
    datasets: [
      {
        label: "Visitas por Estado",
        data: Object.values(stats.visitsByStatus),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        {/* Tarjetas con estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="w-full">
            <h2 className="text-lg font-semibold text-gray-700">Total de Visitas</h2>
            <p className="text-xl font-bold">{stats.totalVisits}</p>
          </Card>
          <Card className="w-full">
            <h2 className="text-lg font-semibold text-gray-700">Visitas Activas</h2>
            <p className="text-xl font-bold">{stats.visitsByStatus.Active}</p>
          </Card>
          <Card className="w-full">
            <h2 className="text-lg font-semibold text-gray-700">Visitas Inactivas</h2>
            <p className="text-xl font-bold">{stats.visitsByStatus.Inactive}</p>
          </Card>
        </div>

        {/* Gráfico de Visitas por Mes */}
        <Card className="w-full">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Visitas por Mes</h2>
          <Line data={visitsByMonthData} />
        </Card>

        {/* Gráfico de Visitas por Estado */}
        <Card className="w-full">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Visitas por Estado</h2>
          <Bar data={visitsByStatusData} />
        </Card>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
