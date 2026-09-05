import { Link } from "react-router-dom";
import {
  LockKeyholeIcon,
  Location01Icon,
  Call02Icon,
} from "@hugeicons/core-free-icons";
import Icon from "../icons/Icon";

export default function Topbar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden sm:flex items-center space-x-6">
          <span className="inline-flex items-center gap-1.5">
            <Icon
              icon={Location01Icon}
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            H-24, Shivalik Nagar, BHEL, Haridwar-249403
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon
              icon={Call02Icon}
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            +91-9837592424, 9897370320
          </span>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            <Icon icon={LockKeyholeIcon} size={15} strokeWidth={1.8} /> Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
