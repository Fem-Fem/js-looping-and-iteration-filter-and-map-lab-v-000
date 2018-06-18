// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] > revenue) {
      newObj = {};
      newObj["name"] = driver["name"]
      newObj["name"] = revenue
      return newObj;
    }
  })
  return x;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  x = drivers.map(function (driver) {
    for (const element of drivers) {
      newArr.push(callback(element));
    }

    // if (driver["revenue"] > revenue) {
    //   return `${driver.name}`;
    // }
  })
  return x;
}
