import toast from "react-hot-toast";
import "./toast.css";
import { CheckCircleOutlineIcon, CloseIcon } from "@/ui/Icons";

export default function ToastSuccess(message) {
  toast((t) => (
    <span className="w-full flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600/20 text-blue-600 p-2 rounded-full">
          <CheckCircleOutlineIcon className="w-6 h-6" />
        </div>
        <div className="text-sm font-medium text-blue-600 sm:whitespace-nowrap">
          {message}
        </div>
      </div>
      <button onClick={() => toast.dismiss(t.id)} className="text-slate-800">
        <CloseIcon className="w-6 h-6 pl-1" />
      </button>
    </span>
  ),
    {
      style: {
        borderRadius: "8px",
        padding: "10px",
        maxWidth: "none",
        minWidth: "250px",
        width: "auto",
        background: "#fff",
        borderRight: "4px solid #2563eb",
        borderTop: "1px solid #2563eb",
        borderBottom: "1px solid #2563eb",
        borderLeft: "1px solid #2563eb"
      },
      duration: 4000
    }
  );
}