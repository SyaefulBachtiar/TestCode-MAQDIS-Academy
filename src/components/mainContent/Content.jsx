import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Data untuk chart
  const chartData = [
    { name: "Jan", users: 4000, orders: 2400, revenue: 2400 },
    { name: "Feb", users: 3000, orders: 1398, revenue: 2210 },
    { name: "Mar", users: 2000, orders: 9800, revenue: 2290 },
    { name: "Apr", users: 2780, orders: 3908, revenue: 2000 },
    { name: "May", users: 1890, orders: 4800, revenue: 2181 },
    { name: "Jun", users: 2390, orders: 3800, revenue: 2500 },
    { name: "Jul", users: 3490, orders: 4300, revenue: 2100 },
    { name: "Aug", users: 4000, orders: 2400, revenue: 2400 },
    { name: "Sep", users: 3000, orders: 1398, revenue: 2210 },
    { name: "Oct", users: 2000, orders: 9800, revenue: 2290 },
    { name: "Nov", users: 2780, orders: 3908, revenue: 2000 },
    { name: "Dec", users: 1890, orders: 4800, revenue: 2181 },
  ];

  const monthlyData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 75 },
    { month: "Mar", value: 85 },
    { month: "Apr", value: 70 },
    { month: "May", value: 90 },
    { month: "Jun", value: 95 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6 flow-root">
      <div className="max-w-7xl mx-auto my-[100px]">
        {/* Header Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* User Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  USER
                </p>
                <p className="text-3xl font-bold text-blue-600 mt-2">50,088</p>
              </div>
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">75%</span>
              </div>
            </div>
          </div>

          {/* Orders Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  ORDERS
                </p>
                <p className="text-sm font-medium text-orange-600 mt-1">
                  KODE AKTIVASI
                </p>
                <p className="text-3xl font-bold text-orange-600 mt-2">
                  63,108
                </p>
              </div>
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">85%</span>
              </div>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  REVENUE
                </p>
                <p className="text-sm font-medium text-green-600 mt-1">
                  PERTAHUN 2024
                </p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  Rp. 11,889,000
                </p>
              </div>
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                USER DALAM SEBULAN TERAKHIR
              </h3>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    name="Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ fill: "#f59e0b", strokeWidth: 2, r: 4 }}
                    name="Orders"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                    name="Revenue"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Side Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                USER DALAM 6 BULAN TERAKHIR
              </h3>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Month</span>
                <span className="text-sm font-medium text-blue-600">95%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Average: 78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
