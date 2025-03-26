const base = {
    get() {
        return {
            url : "http://localhost:8080/biyeluenwenguanlix/",
            name: "biyeluenwenguanlix",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/biyeluenwenguanlix/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "毕业论文管理系统"
        } 
    }
}
export default base
