const express = require("express");
const app = express();
const PORT = process.env.PORT || 7777;

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name && !track) {
    res.status(404).json({ error: "slack_name and track parameters required" });
  }


  const date = new Date();
  //get current date in required utc format
  const currentDate = date.toISOString().slice(0, 19) + "Z";

  const currentDay = date.toLocaleString('en-US', { weekday: 'long' });
  const gitHubFileUrl = "https://github.com/GHOST-LENNY/backend-stage-1/blob/main/server.js";
  const gitHubRepo = "https://github.com/GHOST-LENNY/backend-stage-1";

  const responseData = {
    "slack_name": slack_name,
    "current_day": currentDay,
    "utc_time": currentDate,
   "track": track,
    "github_file_url": gitHubFileUrl,
    "github_repo_url": gitHubRepo,
    "status_code": 200,
  };

  res.json(responseData);
});


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
