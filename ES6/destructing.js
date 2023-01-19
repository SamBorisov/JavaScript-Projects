const cars = [
    {
      model: "Honda Civic",
      coloursByPopularity: ["black", "silver"],
      speedStats: {
        topSpeed: 140,
        zeroToSixty: 8.5
      }
    },
    {
      model: "Tesla Model 3",
      coloursByPopularity: ["red", "white"],
      speedStats: {
        topSpeed: 150,
        zeroToSixty: 3.2
      }
    }
  ];


const [tesla , honda] = cars;

const {speedStats} = tesla;
const {topSpeed: teslaTopSpeed,zeroToSixty: zeroToSixtyT } = speedStats;

const {speedStats: { topSpeed: hondaTopSpeed,zeroToSixty: zeroToSixtyH }} = honda;

const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;




function Tesla() {
    console.log("Tesla specific" + tesla.model)
    console.log("Top Speed: " + teslaTopSpeed)
    console.log("Top Colour: " + teslaTopColour)
    console.log("Zero To Sixty:"+ zeroToSixtyT)
}
function Honda() {
    console.log("Honda specific" + honda.model)
    console.log("Top Speed: " + hondaTopSpeed)
    console.log("Top Colour: " + hondaTopColour)
    console.log("Zero To Sixty:"+ zeroToSixtyH)
}


Tesla()
Honda()


