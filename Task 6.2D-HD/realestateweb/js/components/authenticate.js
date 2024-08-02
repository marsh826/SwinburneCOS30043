const AuthenticationTabs = {
    template: `
    <h1>User Authentication Tabs</h1>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="view-tab" data-bs-toggle="tab" data-bs-target="#view-tab-pane" 
          type="button" role="tab" aria-controls="view-tab-pane" aria-selected="true">Login</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="insert-tab" data-bs-toggle="tab" data-bs-target="#insert-tab-pane" 
          type="button" role="tab" aria-controls="insert-tab-pane" aria-selected="false">Register</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="view-tab-pane" role="tabpanel" aria-labelledby="view-tab" tabindex="0">
        <app-login></app-login>
      </div>
      <div class="tab-pane fade" id="insert-tab-pane" role="tabpanel" aria-labelledby="insert-tab" tabindex="0">
        <app-register></app-register>
      </div>
    </div>
    `,
};