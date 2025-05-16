export interface Project {
  title: string;
  time: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Music Labs",
    time: "1 month",
    description: `A music player app built with React and Tailwind 
    CSS and in backend there is websockets server and express js, 
    postgres for database, it is an async music system in two users 
    from different part of world can listen same music at a time, 
    it also has a features like music queues, priority, vote and down 
    votes host side pause etc`,
    url: "https://github.com/noogler-eng/Music-Labs",
  },
  {
    title: "Paymee",
    time: "10 days",
    description: `A web based payment system, where user can pay and 
    receive money, it enables dbms concepts like trasaction, rollback, 
    commit etc, transactions history is maintained in the database,`,
    url: "https://github.com/noogler-eng/frontend-paymee",
  },
  {
    title: "Contest Tracker",
    time: "2 days",
    description: `A web based contest tracker, where user can track the
    latest upcomming contests, past contests also, there is automatic uploads
    of youtube contest solution video on this platform (automation using google youtube apis)
    and there is feature of user bookmarking the contest. it is deployed on render`,
    url: "https://github.com/noogler-eng/assignment",
  },
  {
    title: "Ai Based Notes Summarizer",
    time: "2 days",
    description: `A web based notes summarizer, where user can write their notes and 
    on time of revising the old notes they can summarize it using AI (gemini ai has been
    used for this purpose), supabase for user authentication and database,`,
    url: "https://github.com/noogler-eng/1811-labs-assignment",
  },
];
