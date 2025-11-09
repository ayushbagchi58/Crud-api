class homeController{
    async index(req,res){
         res.render('home',{
        title:"Home page1",
       })
    }
}

module.exports=new homeController()