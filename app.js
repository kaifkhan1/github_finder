const github = new Github;
const ui = new UI;


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{


    const userText = e.target.value;

    if(userText != ''){
        github.getUser(userText)
        .then(data => {
                if(data.profileData.message === 'Not Found'){
                    // show alert 

                    ui.showAlert('User Not Found','alert alert-danger');

                }
                else{
                    //show profile
                    ui.showProfile(data.profileData);
                    // repos 
                    ui.showRepos(data.repos);
                }
                
            }
        )
    }
    else{
        ui.clearProfile();
    }

})