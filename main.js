//It is first exercise from Homework
let nameOfUser = prompt('What is your name ?')
let user = 'Alex'
let lowerCaseUser= user.toLowerCase()

if (lowerCaseUser === nameOfUser || user === nameOfUser) {
     let password = prompt('Please write your Password')
     let toIntPass = parseInt(password)
     if (toIntPass === 7777) {
          
          let cash = prompt('How much do you want to cash ?')
          if (parseInt(cash)) {
               let amount = 10000;
               let remain = amount - cash
               console.log(`The rest of your profit ${remain}`)
               console.log(`You have cashed ${cash}`)
          } else {
               console.log('False', 'it is not enought money')
          }
     } else {
          console.log('Please check your password and try again')
     }
     console.log(`Your Username ${nameOfUser}`)
} else {
     console.log('Please check your Username')
}