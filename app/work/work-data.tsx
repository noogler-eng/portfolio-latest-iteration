export interface Work {
  title: string;
  description: string;
  start: string;
  end: string;
  company: string;
}

export const works: Work[] = [
  {
    title: "Fullstack Engineer Intern",
    start: "Feb 2025",
    end: "March 2025",
    description: `Works on the backend and frontend of the project, 
    In backend side mostly work on multi tenancy and data isolation 
    in database, build backend for simillar application like shopify`,
    company: "sparkscaleindia",
  },
  {
    title: "Forage Program",
    start: "sep 2024",
    end: "oct 2024",
    description: `works on data redundacy comming in frotned side form backend 
    and improve user interface so that new user can onboard easily`,
    company: "jpmc forage program",
  },
];
