let container=document.createElement("div");
container.className="container";
document.body.appendChild(container);
fetch("https://jsonplaceholder.typicode.com/comments").then((comments)=>{
return comments.json();
}).then((data)=>{
    console.log(data)
    data.forEach(element => {
        let boxComments=document.createElement('div');
        boxComments.className="box-comments";
        let info=document.createElement("div");
        info.className="info";
        let postid=document.createElement("span");
        postid.textContent=`postID: ${element.postId}`;
        let id=document.createElement("span");
        id.textContent=`id: ${element.id}`;
        let name=document.createElement("span");
        name.textContent=`name: ${element.name}`;
        let email=document.createElement("span");
        email.textContent=`email: ${element.email}`;
        info.appendChild(postid);
        info.appendChild(id);
        info.appendChild(name);
        info.appendChild(email);
        let body=document.createElement("div");
        body.className="body" ;
        body.textContent=element.body;
        boxComments.appendChild(info);
        boxComments.appendChild(body);
        container.appendChild(boxComments);
    });

})
