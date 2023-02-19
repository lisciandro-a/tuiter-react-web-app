const PostSummaryItem = (post) => {
    let postTopic = post.topic ? `<medium class="text-muted">${post.topic}</medium> <br/>` : '';
    let postUsername = post.userName || '';
    let postTime = post.time? `- ${post.time}` : '';
    let postTitle = post.title ? `<medium class="text-white"><b>${post.title}</b></medium>
    <br/>` : '';
    let postTweets = post.tweets ? `<medium class="text-muted">${post.tweets} Tweets</medium>` : '';
    return(`
        <li class="list-group-item">
                <div class="row g-0">
                <div class="col-md-10 col-9">
                    <div class="justify-content-start pe-xl-4 pe-lg-4  ps-0">
                        ${postTopic}
                        <medium class="text-muted"><b class="text-white">${postUsername} <i class="fa-solid fa-circle-check"></i></b> ${postTime} </medium>
                        <br/>
                        ${postTitle}
                        ${postTweets}
                    </div>
                </div>
                <div class="col-md-2 col-3">
                    <img src="${post.image}" class="img-fluid rounded-end bg-transparent  float-end my-2 wd-img-height-xxl wd-img-height-xl wd-img-height-lg wd-img-height-md wd-img-height-sm rounded-3"/>
                </div>
                </div>
        </li>
    `);
 }
 export default PostSummaryItem;