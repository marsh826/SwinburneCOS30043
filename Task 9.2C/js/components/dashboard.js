const Dashboard = {
  template: `
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="view-tab" data-bs-toggle="tab" data-bs-target="#view-tab-pane" type="button" role="tab" aria-controls="view-tab-pane" aria-selected="true">View</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="insert-tab" data-bs-toggle="tab" data-bs-target="#insert-tab-pane" type="button" role="tab" aria-controls="insert-tab-pane" aria-selected="false">Insert</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="update-tab" data-bs-toggle="tab" data-bs-target="#update-tab-pane" type="button" role="tab" aria-controls="update-tab-pane" aria-selected="false">Update</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="delete-tab" data-bs-toggle="tab" data-bs-target="#delete-tab-pane" type="button" role="tab" aria-controls="delete-tab-pane" aria-selected="false">Delete</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="view-tab-pane" role="tabpanel" aria-labelledby="view-tab" tabindex="0">
      <app-view></app-view>
    </div>
    <div class="tab-pane fade" id="insert-tab-pane" role="tabpanel" aria-labelledby="insert-tab" tabindex="0">
      <app-insert></app-insert>
    </div>
    <div class="tab-pane fade" id="update-tab-pane" role="tabpanel" aria-labelledby="update-tab" tabindex="0">
      <app-update></app-update>
    </div>
    <div class="tab-pane fade" id="delete-tab-pane" role="tabpanel" aria-labelledby="delete-tab" tabindex="0">
      <app-delete></app-delete>
    </div>
  </div>
  `,
};

// <div id="dashboard">
//   <div class="card">
//     <div class="card-header">
//       <h1 class="card-title">Dashboard</h1>
//     </div>
//     <div class="card-body">
//       <ul class="nav nav-tabs" id="myTab" role="tablist">
//         <li class="nav-item" v-for="item in items">
//           <button
//             id="{{item}}"
//             class="nav-link active"
//             data-bs-toggle="tab"
//             type="button"
//             role="tab"
//           >
//             {{ item }}
//           </button>
//         </li>
//       </ul>

//       <div class="tab-content" id="myTabContent">
//         <div
//           aria-labelledby="View"
//           class="tab-pane fade show active"
//           role="tabpanel"
//         >
//           <app-view v-if="tab==0"></app-view>
//         </div>
//         <div aria-labelledby="Insert" class="tab-pane fade" role="tabpanel">
//           <app-insert v-show="tab==1"></app-insert>
//         </div>
//         <div aria-labelledby="Update" class="tab-pane fade" role="tabpanel">
//           <app-delete v-show="tab==2"></app-delete>
//         </div>
//         <div aria-labelledby="Delete" class="tab-pane fade" role="tabpanel">
//           <app-update v-show="tab==3"></app-update>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
