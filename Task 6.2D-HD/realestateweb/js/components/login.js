const Login = {
  template: `
    <div class="d-flex justify-content-center align-items-center min-vh-100">
        <div class="w-100 box-400">
            <form>
            <h1 class="text-center text-sm-start">User Login</h1>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="row">
                <div class="col-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-warning">
                        <router-link to="/home"
                            class="link-offset-2 link-underline link-underline-opacity-0"
                        >Home
                        </router-link>
                    </button>
                </div>
            </div>
            </form>
        </div>
    </div>
    `,
};
