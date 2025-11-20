"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart as BarChartIcon,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Users,
  AlertTriangle,
  Settings,
  User,
  Search,
  ChevronLeft,
  Moon,
  Sun,
  Filter,
  Download,
  Eye,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Enhanced Dummy data with school student entries only
const keyStats = {
  totalStudents: 1500,
  totalTeachers: 80,
  dropoutRisk: 8,
  averageAttendance: 92,
  averageGPA: 3.2,
  activeCourses: 45,
  newEnrollments: 120,
};

const performanceTrendData = [
  { month: "Jan", score: 70 },
  { month: "Feb", score: 75 },
  { month: "Mar", score: 78 },
  { month: "Apr", score: 82 },
  { month: "May", score: 85 },
  { month: "Jun", score: 88 },
  { month: "Jul", score: 86 },
  { month: "Aug", score: 90 },
  { month: "Sep", score: 84 },
  { month: "Oct", score: 89 },
  { month: "Nov", score: 87 },
  { month: "Dec", score: 91 },
];

const courseDemandData = [
  { course: "Math", demand: 400 },
  { course: "Science", demand: 320 },
  { course: "History", demand: 220 },
  { course: "English", demand: 280 },
  { course: "Art", demand: 180 },
  { course: "Computer Science", demand: 350 },
  { course: "Physical Education", demand: 160 },
  { course: "Languages", demand: 200 },
];

const dropoutPredictionData = [
  { name: "Grade 6", value: 150 },
  { name: "Grade 7", value: 180 },
  { name: "Grade 8", value: 200 },
  { name: "Grade 9", value: 220 },
  { name: "Grade 10", value: 250 },
  { name: "Grade 11", value: 180 },
  { name: "Grade 12", value: 120 },
];

//student data removed

const alertsData = [
  {
    id: 1,
    message: "Low Attendance Alert for John Doe",
    type: "warning",
    time: "2 hours ago",
    priority: "Medium",
  },
  {
    id: 2,
    message: "Predicted Dropout for Alice Johnson",
    type: "danger",
    time: "5 hours ago",
    priority: "High",
  },
  {
    id: 3,
    message: "High Performance in Math Course",
    type: "success",
    time: "1 day ago",
    priority: "Low",
  },
  {
    id: 4,
    message: "New student registered successfully",
    type: "info",
    time: "2 days ago",
    priority: "Low",
  },
  {
    id: 5,
    message: "System maintenance scheduled",
    type: "warning",
    time: "3 days ago",
    priority: "Medium",
  },
  {
    id: 6,
    message: "Grade update for Science class",
    type: "success",
    time: "4 days ago",
    priority: "Low",
  },
  {
    id: 7,
    message: "Potential cheating detected in exam",
    type: "danger",
    time: "5 days ago",
    priority: "High",
  },
  {
    id: 8,
    message: "New course added: Basic Computing",
    type: "info",
    time: "6 days ago",
    priority: "Low",
  },
  {
    id: 9,
    message: "Attendance drop in History class",
    type: "warning",
    time: "1 week ago",
    priority: "Medium",
  },
  {
    id: 10,
    message: "Outstanding performance by Eva Martinez",
    type: "success",
    time: "1 week ago",
    priority: "Low",
  },
  {
    id: 11,
    message: "Server downtime alert",
    type: "danger",
    time: "8 days ago",
    priority: "High",
  },
  {
    id: 12,
    message: "User profile updated",
    type: "info",
    time: "9 days ago",
    priority: "Low",
  },
  {
    id: 13,
    message: "Low enrollment in Art course",
    type: "warning",
    time: "10 days ago",
    priority: "Medium",
  },
];

const COLORS = [
  "#0EA5E9",
  "#6366F1",
  "#22C55E",
  "#FACC15",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

// Sidebar Component
const Sidebar = ({
  isOpen,
  setIsOpen,
  currentPage,
  setCurrentPage,
  theme,
  toggleTheme,
}) => {
  const menuItems = [
    { icon: <BarChartIcon size={18} />, label: "Dashboard", page: "dashboard" },
    { icon: <Users size={18} />, label: "Students", page: "students" },
    { icon: <AlertTriangle size={18} />, label: "Alerts", page: "alerts" },
    { icon: <Settings size={18} />, label: "Settings", page: "settings" },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 240 : 80 }}
      className={`h-screen fixed left-0 top-0 shadow-md border-r flex flex-col z-10 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800 text-gray-300"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && (
          <h1 className="text-xl font-bold text-sky-500">EduPredict Pro</h1>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:opacity-80 transition"
        >
          <ChevronLeft
            size={20}
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <nav className="flex-1 mt-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className={`flex items-center w-full px-5 py-3 text-base hover:opacity-80 transition ${
              currentPage === item.page
                ? "bg-sky-100 text-sky-600 font-semibold"
                : ""
            }`}
          >
            {item.icon}
            {isOpen && <span className="ml-4">{item.label}</span>}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t">
        <button
          onClick={toggleTheme}
          className="flex items-center w-full px-5 py-3 hover:opacity-80 transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          {isOpen && <span className="ml-4">Toggle Theme</span>}
        </button>
      </div>
    </motion.aside>
  );
};

// TopBar Component
const TopBar = ({ theme, userName = "Admin User" }) => (
  <header
    className={`border-b p-4 px-6 flex justify-between items-center shadow-sm transition-colors duration-300 ${
      theme === "dark"
        ? "bg-gray-900 border-gray-800 text-gray-300"
        : "bg-white border-gray-200 text-gray-800"
    }`}
  >
    <h1 className="text-xl font-bold text-sky-600">
      EduPredict Professional Dashboard
    </h1>
    <div className="flex items-center gap-4 text-base">
      <Calendar size={18} className="text-gray-500" />
      <span>{new Date().toLocaleDateString()}</span>
      <User size={18} className="text-gray-500" />
      {userName}
    </div>
  </header>
);

// StatCard Component (Enhanced with hover effects and more data)
const StatCard = ({ title, value, icon, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className={`border p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${
      theme === "dark"
        ? "bg-gray-800 border-gray-700 text-gray-300"
        : "bg-white border-gray-200 text-gray-800"
    }`}
  >
    <div className="flex items-center gap-4">
      <div className="text-sky-500 bg-sky-100 p-3 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

// ChartWrapper Component (Enhanced with legends and better styling)
const ChartWrapper = ({ title, children, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`border p-6 rounded-2xl shadow-md transition-colors duration-300 ${
      theme === "dark"
        ? "bg-gray-800 border-gray-700 text-gray-300"
        : "bg-white border-gray-200 text-gray-800"
    }`}
  >
    <h3 className="text-base font-semibold mb-4">{title}</h3>
    {children}
    <Legend />
  </motion.div>
);

// DashboardHome Page Component (Enhanced with more stats and date filter)
const DashboardHome = ({ theme }) => {
  const [dateRange, setDateRange] = useState("All Time");

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Overview</h2>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className={`border rounded-lg p-3 text-base ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          <option>All Time</option>
          <option>Last Month</option>
          <option>Last Quarter</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={keyStats.totalStudents}
          icon={<Users size={24} />}
          theme={theme}
        />
        <StatCard
          title="Total Teachers"
          value={keyStats.totalTeachers}
          icon={<Users size={24} />}
          theme={theme}
        />
        <StatCard
          title="Dropout Risk"
          value={`${keyStats.dropoutRisk}%`}
          icon={<AlertTriangle size={24} />}
          theme={theme}
        />
        <StatCard
          title="Average Attendance"
          value={`${keyStats.averageAttendance}%`}
          icon={<BarChartIcon size={24} />}
          theme={theme}
        />
        <StatCard
          title="Average GPA"
          value={keyStats.averageGPA}
          icon={<LineChartIcon size={24} />}
          theme={theme}
        />
        <StatCard
          title="Active Courses"
          value={keyStats.activeCourses}
          icon={<PieChartIcon size={24} />}
          theme={theme}
        />
        <StatCard
          title="New Enrollments"
          value={keyStats.newEnrollments}
          icon={<Users size={24} />}
          theme={theme}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartWrapper title="Student Performance Trend" theme={theme}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrendData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
              />
              <XAxis
                dataKey="month"
                stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
              />
              <YAxis stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#0EA5E9"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>

        <ChartWrapper title="Course Demand" theme={theme}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseDemandData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
              />
              <XAxis
                dataKey="course"
                stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
              />
              <YAxis stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Bar dataKey="demand" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>

        <ChartWrapper title="Dropout Prediction by Grade" theme={theme}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dropoutPredictionData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                labelLine={false}
                label={({ name }) => name}
              >
                {dropoutPredictionData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
                  border: "1px solid #e5e7eb",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </div>
    </div>
  );
};

// StudentsPage Component (Enhanced with pagination, more filters, sort, export, view details button)
const StudentsPage = ({ theme }) => {
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [totalRows, setTotalRows] = useState(0);   
  const itemsPerPage = 20;

  // Only show these columns
  const visibleColumns = [
    "StudentID",
    "Age",
    "Absences",
    "StudyTimeWeekly",
    "GPA",
    "GradeClass",
  ];

  useEffect(() => {
    setLoading(true); // Set loading before fetch
    fetch(
      `http://localhost:8000/api/dataset/data?page=${currentPage}&page_size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((json) => {
        setStudentsData(json.data);
        setTotalPages(json.pagination.total_pages); 
        setTotalRows(json.pagination.total_rows);   
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const grades = ["All", ...new Set(studentsData.map((s) => s.grade))];

  const filtered = studentsData.filter(
    (s) =>
      String(s.StudentID).toLowerCase().includes(search.toLowerCase()) ||
      String(s.GradeClass).toLowerCase().includes(search.toLowerCase())
  );

  const filteredDisplayData = filtered;

  //const paginated = filtered.slice(
  //  (currentPage - 1) * itemsPerPage,
  //  currentPage * itemsPerPage
  //);

  const riskColor = (risk) =>
    risk === "Low"
      ? "bg-emerald-500"
      : risk === "Medium"
      ? "bg-yellow-500"
      : "bg-red-500";

  const handleExport = () => {
    // Simulate CSV export
    const csv = filteredDisplayData
      .map(
        (s) =>
          `${s.StudentID},${s.Age},${s.Absences},${s.StudyTimeWeekly},${s.GPA},${s.GradeClass}`
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={18} className="absolute left-4 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-sky-500 transition ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-gray-300"
                : "bg-gray-50 border-gray-200 text-gray-800"
            }`}
          />
        </div>
        <select
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className={`border rounded-lg p-3 flex-1 min-w-[150px] ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          <option>All Risks</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className={`border rounded-lg p-3 flex-1 min-w-[150px] ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          {grades.map((grade, idx) => (
            <option key={`${grade}-${idx}`}>{grade}</option>
          ))}
        </select>
        <select
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [by, order] = e.target.value.split("-");
            setSortBy(by);
            setSortOrder(order);
          }}
          className={`border rounded-lg p-3 flex-1 min-w-[150px] ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          <option value="name-asc">Sort by Name (A-Z)</option>
          <option value="name-desc">Sort by Name (Z-A)</option>
          <option value="attendance-asc">Sort by Attendance (Low-High)</option>
          <option value="attendance-desc">Sort by Attendance (High-Low)</option>
          <option value="performance-asc">
            Sort by Performance (Low-High)
          </option>
          <option value="performance-desc">
            Sort by Performance (High-Low)
          </option>
        </select>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-sky-600 text-white px-5 py-3 rounded-lg hover:bg-sky-700 transition"
        >
          <Download size={18} /> Export CSV
        </button>
      </div>

      <div
        className={`overflow-x-auto border rounded-2xl shadow-md ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <table className="min-w-full divide-y divide-gray-200 text-base">
          <thead>
            <tr>
              {visibleColumns.map((col) => (
                <th key={col} className="px-6 py-4 text-center">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {/*  Using filteredDisplayData for rendering */}
          {filteredDisplayData.map((row, idx) => ( 
            <tr key={idx}>
              {visibleColumns.map((col) => (
                <td key={col} className="px-6 py-2 whitespace-nowrap text-center">{String(row[col] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>
          Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
          {/* total columns of dataset*/}
          {Math.min(currentPage * itemsPerPage, (currentPage - 1) * itemsPerPage + filteredDisplayData.length)} of{" "} 
          {/* total rows of dataset */}
          {totalRows}
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1} 
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(p => p + 1)}
            // total pages from the api
            disabled={currentPage >= totalPages} 
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// AlertsPage Component (Enhanced with search, filter by type/priority, pagination, dismiss all)
const AlertsPage = ({ theme }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const types = ["All", "success", "warning", "danger", "info"];
  const priorities = ["All", "Low", "Medium", "High"];

  const filtered = alertsData
    .filter((a) => a.message.toLowerCase().includes(search.toLowerCase()))
    .filter((a) => typeFilter === "All" || a.type === typeFilter)
    .filter((a) => priorityFilter === "All" || a.priority === priorityFilter);

  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStyle = (type) => {
    switch (type) {
      case "success":
        return {
          icon: "✅",
          classes: `${
            theme === "dark"
              ? "bg-emerald-900 border-emerald-700 text-emerald-300"
              : "bg-emerald-50 border-emerald-200 text-emerald-700"
          } hover:opacity-90`,
        };
      case "warning":
        return {
          icon: "⚠️",
          classes: `${
            theme === "dark"
              ? "bg-yellow-900 border-yellow-700 text-yellow-300"
              : "bg-yellow-50 border-yellow-200 text-yellow-700"
          } hover:opacity-90`,
        };
      case "danger":
        return {
          icon: "❌",
          classes: `${
            theme === "dark"
              ? "bg-red-900 border-red-700 text-red-300"
              : "bg-red-50 border-red-200 text-red-700"
          } hover:opacity-90`,
        };
      default:
        return {
          icon: "ℹ️",
          classes: `${
            theme === "dark"
              ? "bg-blue-900 border-blue-700 text-blue-300"
              : "bg-blue-50 border-blue-200 text-blue-700"
          } hover:opacity-90`,
        };
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">System Alerts</h2>
        <button className="text-sky-600 hover:underline">Dismiss All</button>
      </div>
      <p className="text-base text-gray-500 mb-4">
        Monitor latest updates, warnings, and activities. Filter and search for
        quick insights.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={18} className="absolute left-4 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search alerts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-sky-500 transition ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-gray-300"
                : "bg-gray-50 border-gray-200 text-gray-800"
            }`}
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className={`border rounded-lg p-3 flex-1 min-w-[150px] ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          {types.map((t) => (
            <option key={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
          ))}
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className={`border rounded-lg p-3 flex-1 min-w-[150px] ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-300"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          {priorities.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {paginated.map((a) => {
        const { icon, classes } = getStyle(a.type);
        return (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-start justify-between p-5 rounded-2xl border shadow-md transition duration-300 ${classes}`}
          >
            <div className="flex items-start space-x-4">
              <span className="text-xl">{icon}</span>
              <div>
                <p className="font-semibold text-base">{a.message}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {a.time} • Priority: {a.priority}
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-800 transition">
              ×
            </button>
          </motion.div>
        );
      })}

      <div className="flex justify-between items-center mt-6 text-base text-gray-600 border-t pt-4">
        <p>
          Showing {paginated.length} of {filtered.length} alerts
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-5 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(Math.ceil(filtered.length / itemsPerPage), p + 1)
              )
            }
            disabled={currentPage === Math.ceil(filtered.length / itemsPerPage)}
            className="px-5 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// SettingsPage Component (Enhanced with more fields, theme already in sidebar, notifications, API keys)
const SettingsPage = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "Admin User",
    email: "admin@edupredict.com",
    password: "",
    notifications: true,
    apiKey: "abc123xyz",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save
    alert("Settings saved!");
  };

  return (
    <div className="p-8">
      <div
        className={`max-w-2xl border p-8 rounded-2xl shadow-md transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700 text-gray-300"
            : "bg-white border-gray-200 text-gray-800"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-base">
          <div>
            <label className="block text-gray-500 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-gray-50 border-gray-200 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-500 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-gray-50 border-gray-200 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-500 mb-2">Change Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New Password"
              className={`w-full border rounded-lg p-3 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-gray-50 border-gray-200 text-gray-800"
              }`}
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-5 w-5 text-sky-600"
            />
            <label>Enable Email Notifications</label>
          </div>
          <div>
            <label className="block text-gray-500 mb-2">
              API Key (Read-Only)
            </label>
            <input
              type="text"
              name="apiKey"
              value={formData.apiKey}
              readOnly
              className={`w-full border rounded-lg p-3 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-gray-50 border-gray-200 text-gray-800"
              }`}
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome theme={theme} />;
      case "students":
        return <StudentsPage theme={theme} />;
      case "alerts":
        return <AlertsPage theme={theme} />;
      case "settings":
        return <SettingsPage theme={theme} />;
      default:
        return <DashboardHome theme={theme} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-50 text-gray-800"
      } font-sans`}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main
        style={{ marginLeft: isSidebarOpen ? 240 : 80 }}
        className="transition-all duration-300"
      >
        <TopBar theme={theme} />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}