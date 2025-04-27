import {
  LucideProps,
  Kanban,
  User,
  Settings,
  Calendar,
  CheckSquare,
  Archive,
  BarChart,
  Check,
  ArrowRight,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  File,
  HelpCircle,
  Home,
  Laptop,
  Loader2,
  Lock,
  Mail,
  MoonIcon,
  MoreVertical,
  Pizza,
  Plus,
  SunMedium,
  Trash,
  Twitter,
  UserPlus,
  Users,
  X,
} from "lucide-react";

export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const Icons = {
  logo: Kanban,
  user: User,
  settings: Settings,
  calendar: Calendar,
  task: CheckSquare,
  archive: Archive,
  chart: BarChart,
  check: Check,
  arrowRight: ArrowRight,
  help: HelpCircle,
  laptop: Laptop,
  sun: SunMedium,
  moon: MoonIcon,
  loader: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  creditCard: CreditCard,
  file: File,
  plus: Plus,
  ellipsis: MoreVertical,
  warning: AlertCircle,
  x: X,
  home: Home,
  mail: Mail,
  lock: Lock,
  team: Users,
  pizza: Pizza,
  userPlus: UserPlus,
  twitter: Twitter,
  spinner: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}; 