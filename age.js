// It is secound Exercise from Homework
let YourName = prompt('The name starting with letter A or a  can enter !')
let firstLetter = YourName.charAt(0).toLowerCase()
if (firstLetter === 'a' || firstLetter === 'A') {
     let age = prompt('How old are you ?')
     if (age >= 20 && age <= 40) {
          let money = prompt('How much do you have $ ?')
          let toIntMoney = parseInt(money)
          if (toIntMoney >= 100) {
               let people = prompt('How many people ?')
               let amountPeople = parseInt(people)
               if (amountPeople <= 10) {
                    console.log('You can enter')
                    document.getElementById('demo').innerHTML = '<em>Welcome to our <br> <b style="color:red; font-size: 72px;">SHarq Clube </b></em>'
               } else {
                    document.getElementById('demo').innerHTML = 'It is too much people, Limit 10 people'
                    console.log('It is too much people, Limit 10 people')
               }
          } else {
               document.getElementById('demo').innerHTML = 'Go away and earn enought money to enter this Clube'
               console.log('Go away and earn enought money to enter this Clube')
          }
     } else {
          document.getElementById('demo').innerHTML = `Your hasn't permission to enter in this Club`
          console.log(`Your hasn't permission to enter in this Club`)
     }
} else {
     document.getElementById('demo').innerHTML = 'Your name is not starting with letter A'
     console.log('Your name is not starting with letter A')
}

