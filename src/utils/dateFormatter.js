export function toPersianDateShort(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function toPersianDateLong(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function toPersianDateWeek(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    weekday:"long",
    month: "long",
    day: "numeric",
  });
}
