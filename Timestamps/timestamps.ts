// Define TypeScript interfaces
interface ActivityLog {
    user_id: string;
    device_id: string;
    logged_in: Date;
    logged_out: Date;
    last_seen: Date;
}

// Sample activity logs
const activityLogs: ActivityLog[] = [
    { user_id: "001", device_id: "A", logged_in: new Date("2024-03-27T08:00:00"), logged_out: new Date("1900-01-01T12:00:00"), last_seen: new Date("2024-03-27T11:45:00") },
    { user_id: "001", device_id: "B", logged_in: new Date("2024-03-27T09:00:00"), logged_out: new Date("2024-03-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "0010", device_id: "B", logged_in: new Date("2024-03-27T09:00:00"), logged_out: new Date("2024-03-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "003", device_id: "B", logged_in: new Date("2024-03-27T09:00:00"), logged_out: new Date("2024-03-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "002", device_id: "B", logged_in: new Date("2024-03-27T09:00:00"), logged_out: new Date("2024-01-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "0014", device_id: "B", logged_in: new Date("2024-03-27T09:00:00"), logged_out: new Date("2024-02-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "0015", device_id: "B", logged_in: new Date("2024-02-27T09:00:00"), logged_out: new Date("2021-03-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "0015", device_id: "B", logged_in: new Date("2022-03-27T09:00:00"), logged_out: new Date("2022-03-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "0016", device_id: "B", logged_in: new Date("2014-03-27T09:00:00"), logged_out: new Date("2024-03-27T11:00:00"), last_seen: new Date("2024-03-27T10:30:00") },
    { user_id: "002", device_id: "C", logged_in: new Date("2024-02-27T10:00:00"), logged_out: new Date("2024-03-27T12:30:00"), last_seen: new Date("2024-03-27T12:00:00") }
];

// Function to filter logs by month
function LogsByMonth(logs: ActivityLog[], month: number): ActivityLog[] {
    return logs.filter(log => log.logged_in.getMonth() + 1 === month);
}

// Function to count unique users
function cntUniqueUsers(logs: ActivityLog[]): number {
    const uniqueUserIds = new Set(logs.map(log => log.user_id));
    return uniqueUserIds.size;
}

// Function to count active users (users who haven't logged out yet or logged in after logging out)
function cntActiveUsers(logs: ActivityLog[]): number {
    const activeUserIds = new Set<string>();
    logs.forEach(log => {
        if (log.logged_out.getTime() === new Date("1900-01-01").getTime() || log.logged_out < log.logged_in) {
            activeUserIds.add(log.user_id);
        }
    });
    return activeUserIds.size;
}

// Example: Count logged-in users for March 2024
const marchLogs = LogsByMonth(activityLogs, 3);
const loggedInUsers = cntUniqueUsers(marchLogs);
console.log("Logged-in users for March 2024:", loggedInUsers);

// Example: Count active users for March 2024
const activeUsers = cntActiveUsers(marchLogs);
console.log("Active users for March 2024:", activeUsers);
