const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-house-chimney"></i>  <span class="d-xxl-inline d-xl-inline d-none">Home</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-hashtag"></i>  <span class="d-xxl-inline d-xl-inline d-none">Explore</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-bell"></i>  <span class="d-xxl-inline d-xl-inline d-none">Notifications</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-envelope"></i>  <span class="d-xxl-inline d-xl-inline d-none">Messages</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-bookmark"></i>  <span class="d-xxl-inline d-xl-inline d-none">Bookmarks</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-list"></i>  <span class="d-xxl-inline d-xl-inline d-none">Lists</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-user"></i>  <span class="d-xxl-inline d-xl-inline d-none">Profile</span>
          </a>

        <a class="list-group-item" href="/">
          <i class="fa-solid fa-ellipsis"></i>  <span class="d-xxl-inline d-xl-inline d-none">More</span>
          </a>
          
      </div>
      <div class="d-grid mt-2">
        <a href="tuit.html"
           class="btn btn-primary btn-block rounded-pill">
           Tuit</a>
      </div>
    `);
   }
   export default NavigationSidebar;