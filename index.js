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
  x = drivers.filter(function (driver) {
    if (driver["revenue"] > revenue) {
      return driver["name"]
      // return `${driver.name}`;
    }
  })
  return x;
}

function exactMatch(drivers, object) {
  x = drivers.filter(function (driver) {
    if (driver["revenue"] == object) {
      return driver["revenue"]
    }
    if (driver["name"] == object) {
      return driver["name"]
    }
  })
  return x;
}
