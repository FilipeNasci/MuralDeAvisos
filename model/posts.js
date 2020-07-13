module.exports = {
    posts: [],
    
    getAll(){
        return this.posts;
    },

    newPost(title, description){
        
        this.posts.push({id: genereteID(), title,description});
    },

    deletePost(id){
        let cont = 0;
        this.posts.forEach(post => {
            if(post.id == id){
                this.posts.splice(cont, 1);
            }else{
                cont++;
            }
        });
    }
}



function genereteID(){
    return Math.random().toString(36).substr(2, 9);
}