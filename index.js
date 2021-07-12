// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,name){
    return array.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) !== -1)

}

function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }

  function fuzzyMatch(drivers,name){
    return drivers.filter(driver=>
        driver.substring(0,name.length) === name
)
  }