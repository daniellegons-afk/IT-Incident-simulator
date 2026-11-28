export const scenarios = [{name: "Database outage", severity:"high", checkpoints:["declare severity", "notify manager", "check logs"]},
                         {name: "Disk full on web server", severity:"medium", checkpoints:["Check disk usage", "clear old logs",    
                         "confirm service"]} ];
export const opening = ["The database is down and customers can't log in! what do we do?!"];
