
//part 1 

let userName = prompt('enter your userName please !! ')
let gender = prompt('enter your gender as male or female !!')
let age = prompt('enter your age ..')

let array = []

if (gender=='male' || gender=='female'){
        if (age <=0 ) {
            alert('your age is invalid .. try agin..')
        }
        else {
            let skip = prompt('Enter yes if you want to skip welcome message ..')
            if(skip=='yes'){
                alert('welcome message skipped .. :(  answer the following questions please ')
            }
            else{
                if(gender=='male'){
                    alert('welcome MR ' + userName + ' to our website :) answer the following questions please ')
                }
                else{
                    alert('welcome MS ' + userName + ' to our website :) answer the following questions please ')
                }
            }
        }
        


    }
    else{
        let age = prompt('your gender is invalid please enter your age agian .. ')
        if (age <=0){
            alert('your age is invalid try again please ..')
        }
        else {
            let skip = prompt('enter yes if you want to skip welcome message..')
            if (skip=='yes'){
                alert('welcome message skipped :( answer the following questions please ')
            }
            else{
                    alert('welcome '+ userName + ' to our website :) answer the following questions please ')
            }
        }
    }

    // part 2 
    
    let questionOne = prompt('where are you fom ? ')
    let questionTow = prompt('what is you major ?')
    let questionThree = prompt('how much is your salary ? ')

   
    
     function sendToArray(){

        if (userName=='') {
            userName='invalid input'
        }
           
         if (gender=='') {
            gender='invalid input'
        }
           
         if (age=='') {
            age='invalid input'
        }
           
         if (questionOne=='') {
            questionOne='invalid input'
        }
           
         if (questionTow=='') {
            questionTow='invalid input'
        }
           
         if (questionThree=='') {
            questionThree='invalid input'
        }
       
        
            array.push(userName,gender,age,questionOne,questionTow,questionThree)
        

        
        console.log(array);
    }
    

sendToArray()    

    
// end of part 2

