import PostSummaryList
   from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11 my-auto">
                <div class="input-group mb-3">
                    <span class="input-group-text border-end-0 bg-white wd-pill-left text-dark">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="search" class="form-control border-start-0 bg-white wd-pill-right" placeholder="Search Tuiter">
                </div>
            </div>
            <div class="col-1 my-auto pb-1">
                <h4 class="bg-transparent float-end text-primary">
                    <i class="fa-solid fa-cog"></i>
                </h4> 
            </div>

        </div>
        <ul class="nav mb-2 nav-tabs">
            <ul class="nav nav-tabs mb-0 border-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./for-you.html">For you</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./trending.html">Trending</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./sports.html">Sports</a>
                </li>
                <li class="nav-item d-md-block d-none">
                    <a class="nav-link" href="./entertainment.html">Entertainment</a>
                </li>
            </ul>
        </ul>
        <div class="card">
            <img src="../../images/spaceXStarship.jpg" class="card-img">
            <div class="card-img-overlay d-flex flex-column justify-content-end m-0 py-0">
                <h3 class="card-title text-light"><b>SpaceX's Starship</b></h3>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
