const Agents = {
  data() {
    return {
      team: [],
    };
  },
  created() {
    var self = this;
    var viewApiURL = "resources/api_agents.php?action=agentsDisplay";

    fetch(viewApiURL, {
      method: "GET",
      redirect: "error",
      credentials: "include",
    })
      .then((response) => {
        console.log(response.status);
        return response.json(); //convert json body -> js object
      })
      .then((data) => {
        self.team = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        self.message = err;
      });
  },
  template: `
    <h1>IAGO Agent Team</h1>
    <div v-for="agent in team" :key="agent.AgentID">
        <div class="card mb-3 rounded-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img v-bind:src="agent.AgentImage.url" class="img-fluid rounded-start ps-5 img-resize" alt="imageAgents">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <br>
                    <h5 class="card-title">Name: {{agent.FirstName}} {{agent.LastName}}</h5>
                    <div class="row">
                    <div class="col">
                        <p class="card-text"> Phone: {{agent.Phone}}</p>
                    </div>
                    <div class="row">
                        <div class="col">
                        <p class="card-text"> Email: {{agent.Email}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <p class="card-text"> License Number: {{agent.LicenseNumber}}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    `,
};
