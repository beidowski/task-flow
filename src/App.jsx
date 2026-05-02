import { useState } from "react";
import { cn } from "./utils/cn";

const initialTasks = [
  { id: 1, title: "Design landing page mockup", category: "Design", done: true, priority: "high" },
  { id: 2, title: "Set up project repository", category: "Dev", done: true, priority: "medium" },
  { id: 3, title: "Build navigation component", category: "Dev", done: false, priority: "high" },
  { id: 4, title: "Write API documentation", category: "Docs", done: false, priority: "low" },
  { id: 5, title: "Implement user authentication", category: "Dev", done: false, priority: "high" },
  { id: 6, title: "Create onboarding illustrations", category: "Design", done: false, priority: "medium" },
  { id: 7, title: "Review pull requests", category: "Dev", done: false, priority: "medium" },
  { id: 8, title: "Update changelog for v2.0", category: "Docs", done: false, priority: "low" },
];

const priorityColors = {
  high: "bg-red-100 text-red-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-emerald-100 text-emerald-700",
};

const categoryColors = {
  Design: "bg-violet-100 text-violet-700",
  Dev: "bg-blue-100 text-blue-700",
  Docs: "bg-teal-100 text-teal-700",
};

const filters = ["All", "Active", "Completed"];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeFilter, setActiveFilter] = useState("All");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Dev");
  const [newTaskPriority, setNewTaskPriority] = useState("medium");

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      done: false,
      priority: newTaskPriority,
    };
    setTasks((prev) => [newTask, ...prev]);
    setNewTaskTitle("");
  };

  const filteredTasks = tasks.filter((t) => {
    if (activeFilter === "Active") return !t.done;
    if (activeFilter === "Completed") return t.done;
    return true;
  });

  const completedCount = tasks.filter((t) => t.done).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">TaskFlow</h1>
              <p className="text-xs text-slate-400">JavaScript · React · Tailwind</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-700">{completedCount}/{tasks.length}</p>
            <p className="text-xs text-slate-400">tasks done</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6 space-y-6">
        {/* Progress Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-slate-600">Overall Progress</p>
            <span className="text-2xl font-bold text-indigo-600">{progressPercent}%</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Add Task Form */}
        <form onSubmit={addTask} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm font-semibold text-slate-700 mb-3">Add New Task</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition"
            />
            <select
              value={newTaskCategory}
              onChange={(e) => setNewTaskCategory(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition"
            >
              <option value="Design">Design</option>
              <option value="Dev">Dev</option>
              <option value="Docs">Docs</option>
            </select>
            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 active:scale-[0.97] transition-all"
            >
              Add
            </button>
          </div>
        </form>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-slate-100">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "flex-1 rounded-lg py-2 text-sm font-medium transition-all",
                activeFilter === f
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              {f}
              {f === "Active" && (
                <span className="ml-1.5 text-xs opacity-75">({tasks.filter((t) => !t.done).length})</span>
              )}
              {f === "Completed" && (
                <span className="ml-1.5 text-xs opacity-75">({completedCount})</span>
              )}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-sm">No tasks found for this filter.</p>
            </div>
          )}
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition-all hover:shadow-md",
                task.done && "opacity-60"
              )}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleTask(task.id)}
                className={cn(
                  "h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                  task.done
                    ? "bg-indigo-500 border-indigo-500"
                    : "border-slate-300 hover:border-indigo-400"
                )}
              >
                {task.done && (
                  <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className={cn("text-sm font-medium truncate", task.done ? "line-through text-slate-400" : "text-slate-800")}>
                  {task.title}
                </p>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={cn("text-xs font-medium px-2.5 py-1 rounded-lg", categoryColors[task.category])}>
                  {task.category}
                </span>
                <span className={cn("text-xs font-medium px-2 py-1 rounded-lg", priorityColors[task.priority])}>
                  {task.priority}
                </span>
              </div>

              {/* Delete */}
              <button
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all flex-shrink-0"
                aria-label="Delete task"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-6">
          <p className="text-xs text-slate-400">
            Built with React + Vite + Tailwind CSS — No TypeScript
          </p>
        </footer>
      </main>
    </div>
  );
}
