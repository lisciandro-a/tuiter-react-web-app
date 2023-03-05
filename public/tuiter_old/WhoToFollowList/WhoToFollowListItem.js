const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 ps-0">
                    <img src="${who.avatarIcon}" class="img-fluid rounded-circle float-start my-2 mx-3 rounded-3 wd-follow-img-xl wd-follow-img-lg">
                </div>
                <div class="col-xxl-7 col-xl-6 col-lg-6 ps-1 text-nowrap">
                    <medium class="card-text"><b>${who.userName} <i class="fa-solid fa-circle-check"></i></b></medium>
                    <br/>
                    <medium class="card-title">@${who.handle}</medium>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-4">
                    <button class="btn btn-primary w-100 rounded-pill mt-2">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
 }
 export default WhoToFollowListItem;