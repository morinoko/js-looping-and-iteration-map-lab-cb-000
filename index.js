function lowerCaseDrivers(driverArray) {
  return driverArray.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(driverArray) {
  return driverArray.map( function(driver) { 
    const splitName = driver.split(' ');
    const firstName = splitName[0];
    const lastName = splitName[0];

    return { firstName: firstName,
             lastName: lastName };
  });
}
