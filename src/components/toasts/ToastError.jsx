import toast from "react-hot-toast";
import "./toast.css";
import { CloseCircleOutlineIcon, CloseIcon } from "@/ui/Icons";

export default function ToastError(message) {
  toast((t) => (
    <span className="w-full flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="bg-red-600/20 text-red-600 p-2 rounded-full">
          <CloseCircleOutlineIcon className="w-6 h-6" />
        </div>
        <div className="text-sm font-medium text-red-600 sm:whitespace-nowrap">
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
        borderRight: "4px solid #dc2626",
        borderTop: "1px solid #dc2626",
        borderBottom: "1px solid #dc2626",
        borderLeft: "1px solid #dc2626"
      },
      duration: 4000
    }
  );
}