class Github{
    constructor(){
        this.clientId = 'c9f6f95fb94ea23096fe';
        this.clientSecret = 'dcffb0e991277c90f7751d72d30db52991d18249';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(users){

        const profileResponse = await fetch(`https://api.github.com/users/${users}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${users}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)

        const profileData = await profileResponse.json();
        const repos = await reposResponse.json();
        
        return{
            profileData,
            repos
        }
    }
}