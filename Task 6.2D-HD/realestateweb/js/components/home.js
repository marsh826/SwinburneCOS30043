const Home = {
  data() {
    return {
      agents: [],
    };
  },
  mounted() {
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
        self.agents = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        self.message = err;
        this.isLoading = true;
      });
  },
  template: `
        <!-- Home TOP -->
        <div class="card card-top">
          <img class="mh-100 overlay-effect img-fluid card-img-top" src="./css/img/house.jpg" alt="coverimg">
          <div class="caption">
            <h1>Find your dream home here</h1>
          </div>
        </div>
        <br>
  
        <!-- Home Mid Section -->
        <div class="row gy-3">
          <h1 class="text-center">Explore new homes</h1>
          <div class="col-md-4">
            <div class="card h-100">
              <img src="./css/img/card1.jpg" class="home-card card-img-top" alt="checkPrice">
              <div class="card-body">
                <h5 class="card-title">Estimate Home Prices</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <img src="./css/img/card2.jpg" class="home-card card-img-top" alt="listingHouse">
              <div class="card-body">
                <h5 class="card-title">Check out the recently listed homes</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <img src="./css/img/card3.jpg" class="home-card h-100 card-img-top" alt="exploreBySuburb">
              <div class="card-body">
                <h5 class="card-title">Explore homes by suburbs</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <br>
  
        <!-- Home Bottom Section  -->
        <h1 class="text-center">Meet the IAGO Agents</h1>
        <div class="d-flex justify-content-center align-items-center">
          <div id="carouselExampleControls" class="carousel slide carousel-dark w-75" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button v-for="(agent, index) in agents" :key="index" type="button" 
                      :data-bs-target="'#carouselExampleControls'" :data-bs-slide-to="index"
                      :class="{ 'active': index === 0 }" aria-current="true" aria-label="Slide {{index}}">
              </button>
            </div>
            <div class="carousel-inner">
              <div v-for="(agent, index) in agents" :key="agent.AgentID" :class="{ 'carousel-item': true, 'active': index === 0 }">
                <div class="card d-flex justify-content-center align-items-center">
                  <img v-bind:src="agent.AgentImage" class="d-block img-resize pt-3" alt="agentImageProfile">
                  <div class="card-body pb-5 px-5">
                    <h5 class="card-title">{{agent.FirstName}} {{agent.LastName}}</h5>
                    <p class="card-text"><strong>Phone Number:</strong> {{agent.Phone}}</p>
                    <p class="card-text"><strong>Email:</strong> {{agent.Email}}</p>
                    <p class="card-text"><strong>License Number:</strong> {{agent.LicenseNumber}}</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <!-- Slider buttons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>

          </div>
        </div>
  
      `,
};
