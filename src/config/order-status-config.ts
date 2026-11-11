import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
  /** Tailwind classes: progress fill, progress track, and text colour. */
  bar: string;
  track: string;
  text: string;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  {
    label: "Placed",
    value: "placed",
    progressValue: 5,
    bar: "bg-slate-400",
    track: "bg-slate-200",
    text: "text-slate-600",
  },
  {
    label: "Awaiting Restaurant Confirmation",
    value: "paid",
    progressValue: 25,
    bar: "bg-amber-500",
    track: "bg-amber-100",
    text: "text-amber-600",
  },
  {
    label: "In Progress",
    value: "inProgress",
    progressValue: 50,
    bar: "bg-blue-500",
    track: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    label: "Out for Delivery",
    value: "outForDelivery",
    progressValue: 75,
    bar: "bg-violet-500",
    track: "bg-violet-100",
    text: "text-violet-600",
  },
  {
    label: "Delivered",
    value: "delivered",
    progressValue: 100,
    bar: "bg-green-500",
    track: "bg-green-100",
    text: "text-green-600",
  },
  {
    label: "Cancelled",
    value: "cancelled",
    progressValue: 100,
    bar: "bg-red-500",
    track: "bg-red-100",
    text: "text-red-600",
  },
];

/** Statuses that are still moving, i.e. worth an animated progress bar. */
export const isOrderActive = (status: OrderStatus) =>
  status !== "delivered" && status !== "cancelled";
