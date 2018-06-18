// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] > revenue) {
      return driver
    }
  })
  return x;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] > revenue) {
      return driver["name"]
      // print(driver["name"])
      // return `${driver.name}`;
    }
  })
  return x;
}

function exactMatch(drivers, object1) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] == Object.keys(object1)) {
      return driver["revenue"]
    }
    if (driver["name"] == Object.keys(object1)) {
      return driver["name"]
    }
  })
  return x;
}

function exactMatchToList(drivers, object1) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] == Object.keys(object1)) {
      return driver["revenue"]
    }
    if (driver["name"] == Object.keys(object1)) {
      return driver["name"]
    }
  })
  return x;
}
