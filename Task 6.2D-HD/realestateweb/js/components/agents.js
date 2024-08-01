const Agents = {
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      team: [],
      perPage: 2,
      currentPage: 1,
      message: "Loading...",
      isLoading: false,
    };
  },
  mounted() {
    this.loadNewData();
  },
  template: `
  <p v-if="isLoading">{{message}}</p>
  <h1>IAGO Agent Team</h1>
  <div v-for="agent in getItems" :key="agent.AgentID">
      <div class="card mb-3 rounded-5">
          <div class="row g-0">
              <div class="col-md-4">
              <img v-bind:src="agent.AgentImage" class="img-fluid rounded-start img-resize" alt="imageAgents">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                    <br>
                    <h2 class="card-title">{{agent.FirstName}} {{agent.LastName}}</h2>
                    <div class="row">
                    <div class="col">
                        <p class="card-text fs-3 text"> <strong>Phone:</strong> {{agent.Phone}}</p>
                    </div>
                    <div class="row">
                        <div class="col">
                        <p class="card-text fs-3 text"> <strong>Email:</strong> {{agent.Email}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <p class="card-text fs-3 text"> <strong>License Number:</strong> {{agent.LicenseNumber}}</p>
                        </div>
                    </div>
                    </div>
                    <br>

                    <div v-if="$root.isAuthenticated && agent.Likes == $root.authenticatedUser" class="d-flex flex-row mb3">
                      <button class="btn btn-primary" type="button" v-on:click="unLikeAgent(agent.AgentID, $root.authenticatedUser)">
                        <span class="material-icons fs-2">
                          thumb_up
                        </span>
                      </button>
                      <i class="fs-4 text px-2">{{agent.Likes.length}}</i>
                    </div>

                    <div v-else-if="$root.isAuthenticated" class="d-flex flex-row mb3">
                      <button class="btn btn-primary" type="button" v-on:click="newLikeAgent(agent.AgentID, $root.authenticatedUser)">
                        <span class="material-icons-outlined fs-2 text">
                          thumb_up
                        </span>
                      </button>
                      <i class="fs-4 text px-2">{{agent.Likes.length}}</i>
                    </div>

                    <div v-else class="d-flex flex-row mb3">
                        <span class="material-icons-outlined fs-2 text">
                          thumb_up
                        </span>
                      <i class="fs-4 text px-2">{{agent.Likes.length}}</i>
                    </div>


                </div>
              </div>
          </div>
      </div>
  </div>
  <paginate
    :page-count="getPageCount"
    :page-range="2"
    :margin-pages="1"
    :click-handler="clickCallBack"
    :prev-text=" 'Previous' "
    :next-text=" 'Next' "
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
  `,
  computed: {
    getItems: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.team.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.team.length / this.perPage);
    },
  },
  methods: {
    clickCallBack: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
    newLikeAgent: function (id, authenticatedUser) {
      // For debugging
      console.log("Agent ID fetched:" + id);
      var updateApiURL = "resources/api_agents.php?action=agentLike";

      const formData = new FormData();
      formData.append("AgentID", id);
      formData.append("UserName", authenticatedUser);

      console.log("AgentID: " + id);
      console.log("UserName: " + authenticatedUser);

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch(updateApiURL, requestOptions)
        .then((response) => {
          console.log(formData);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log("Data Updated Successfully.");
          this.loadNewData();
          if (!response.ok) {
            throw new Error("Network response error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    unLikeAgent: function (id, authenticatedUser) {
      // For debugging
      console.log("Agent ID fetched:" + id);
      var updateApiURL = "resources/api_agents.php?action=agentUnLike";

      const formData = new FormData();
      formData.append("AgentID", id);
      formData.append("UserName", authenticatedUser);

      console.log("AgentID: " + id);
      console.log("UserName to remove from like list: " + authenticatedUser);

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch(updateApiURL, requestOptions)
        .then((response) => {
          console.log(formData);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log("Data Updated Successfully.");
          this.loadNewData();
          if (!response.ok) {
            throw new Error("Network response error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadNewData: function () {
      // Reload data
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
          self.isLoading = true;
        });
    },
  },
};
