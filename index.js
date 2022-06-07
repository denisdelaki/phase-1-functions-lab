// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
   if (distance<42) {
       return (42-distance)
   }
   else {
       return (distance-42)
    }
}
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (destination>start) {
        return ((destination - start) *264);
    } else
        return ((start- destination) * 264);
}
function calculatesFarePrice(start, destination) {
    let travelledDistance = distanceTravelledInFeet (start, destination);
    if (travelledDistance <=400) {
        return 0;
    }
    if (travelledDistance>=400 && travelledDistance<=2000) {
        return (travelledDistance - 400) * 0.02;
    }else if (travelledDistance>=2000 && travelledDistance <=2500) {
        return 25;
    }
    else if (travelledDistance>2500) {
        return "cannot travel that far";
    }
}