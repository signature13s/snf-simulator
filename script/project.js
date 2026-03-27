/* =====================================================================
   CENTRIFUGE + WATER‑BATH VIRTUAL LAB  (FULL INTEGRATED LOGIC)
   ===================================================================== */

/* -------------------- 1. Utility helpers --------------------------- */
const $id = (id) => document.getElementById(id);
const $cls = (cls) => document.getElementsByClassName(cls);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* -------------------- 2. DOM references ---------------------------- */
// Lab objects
const pipette = $id("pipette-w");
const measuringCylinder = $id("measuring-cylinder");
const sulphuricAcid = $id("sulphuric-acid");
const waterBathImg = $id("water-bath");
const centrifugeMachine = $id("centrifuge");
const centrifugeLid = $id("centrifuge-g-w");
const milkInPipette = $id("pipetteMilk");
const butryometer = $id("butryometer-w");
const pipetteAcid = $id("pipetteAcid");
const butryometerSecond = $id("butryometer1-w");
const waterButryometer = $id("waterButryometer");
const pipetteWater = $id("pipetteWater-w");
const lactometer = $id("lactometer-w");
const thermometer = $id("thermometer-w");
const thermometerReading = $id("thermometer-w1");

const milk50Solution = $id("milk50-solution-w");
const milkMoreThan50Solution = $id("milk50-solution-w1");

const startBathButton = $id("start");
const startSecondStartButton = $id("begin");

// Water‑bath panel
const tempDisplay = $id("temp");
const celciusLabel = $id("celcius");
const bathPowerBtn = $id("onoff");
const mmBtn = $id("mm");
const ssBtn = $id("ss");
const minDisplay = $id("min");
const secDisplay = $id("sec");
const instructionTxt = $id("ins");
const waterBathControls = $id("waterBathControls");
const waterBathFront = $id("water-bath-w1");
const waterBathBack = $id("water-bath-w");
const butryometerSolution = $id("pouringSolution");
const butryometerMilkSolution = $id("pouringMilkSolution");
const butryometerWaterSolution = $id("pouringSolution1");
const sulphuricAcidSolution = $id("sulphuric-acid-solution");
const milkSolution = $id("milk-solution-w");
const butryometerFilling = $id("butryometer-filling");
const amylAlcoholContainer = $id("amyl-alcohol-w");
const amylAlcoholSolution = $id("amyl-alcohol-solution");
const waterMeasuringCylinder = $id("waterMeasuringCylinder");
// milkSolution.style.width="3vw"

// Centrifuge panel
const rpmDisplay = $id("rpm");
const centrifugeControls = document.getElementById("centrifugeControls");
const centrifugeMinEl = $id("centrifugeMin");
const centrifugeSecEl = $id("centrifugeSec");
// const centrifugeControls = $cls("power-off");
const centrifuge = $id("centrifuge");

const nextButton = $id("nextRender");
const nextButton1 = $id("nextRender1");
const nextButton2 = $id("nextRender2");

/* -------------------- 3. Global state ------------------------------ */
// Water‑bath
let bathPanelState = 11; // 11=off,12=on,13=temp,14=mm,15=ss
let bathHeaterOn = false;
let bathTimerRunning = false;
let bathMin = 0;
let bathSec = 0;

// Pipette animation
let experimentStep = 1;

// Centrifuge
let centrifugePowered = false;
let centrifugeRPM = 0;
let centrifugeMode = ""; // ""=RPM, "mm", "ss"gsgag
let centrifugeMin = 0;
let centrifugeSec = 0;
let centrifugeTimerOn = false;

// centrifugeControls.style.display= "block"
/* =============== 4. Lab object animations =========================== */
// let experimentStep = 1;
// butryometerFilling.style.display="block"
waterButryometer.style.zIndex = 5;
butryometerSecond.style.zIndex = 5;
// pipetteWater.style.display = "none";
// pipetteMilk.style.display = "none";

// thermometerReading.style.transform="translate(9.59vw,-22vh)"

// thermometer.style.transform="translate(8.6vwvw,-10vh)"

// butryometer.style.transform = "translate(-23.2vw,-55vh)";

//     butryometerFilling.style.transform = "translate(-23.2vw,-34.9vh)";

//     butryometer.style.transform = "translate(0vw,-55vh)";

//     butryometerFilling.style.transform = "translate(0vw,-34.9vh)";
//        butryometer.style.transform = "translate(0vw,0vh) rotate(90deg)";
//     butryometerFilling.style.transform =
//       "translate(-1.76vw,16.5vh) rotate(90deg)";
// // waterButryometer.style.display = "block";
// butryometerSecond.style.display = "block";
// // waterBathImg.style.display="none"
// centrifuge.style.display = "block";
// centrifugeLid.style.display="block"
// butryometerSecond.style.transform = "translate(-1vw,-12vh) rotate(0deg)";
// butryometerSecond.style.transform = "translate(-1vw,-50vh)";
// waterButryometer.style.transform = "translate(0vw,-38vh)";

// butryometerSecond.style.transform = "translate(-16.15vw,-50vh)";
// waterButryometer.style.transform = "translate(-15.15vw,-38vh)";
// butryometerSecond.style.transform = "translate(-16.25vw,-30vh)";
// waterButryometer.style.transform = "translate(-15.25vw,-18vh)";

// butryometerSecond.style.transform = "translate(-21.4vw,-42vh)";
// waterButryometer.style.transform = "translate(-20.4vw,-30vh)";

// butryometerSecond.style.transform = "translate(-21.4vw,-21vh)";
// waterButryometer.style.transform = "translate(-20.4vw,-9vh)";

// await wait(1000);
//     butryometerSecond.style.transform = "translate(-20.4vw,-40vh)";
//     waterButryometer.style.transform = "translate(-20.4vw,-20vh)";
// // waterMeasuringCylinder.style.display="block"
// butryometerSecond.style.display = "block";
// butryometerSecond.style.transform = "translate(-1vw,-12vh) rotate(0deg)";
// pipette.style.transform = "translate(23.6vw,-42vh)"
let isPipetteBusy = false;
// butryometer.style.transform = "translate(0vw,0vh) rotate(90deg)";
// butryometerFilling.style.transform = "translate(-1.76vw,16.5vh) rotate(90deg)";
// pipette.style.transform = "translate(0vw,-50vh) rotate(0deg)";

//       pipette.style.transform = "translate(23.6vw,-50vh)";
//       // await wait(1000);
//       pipette.style.transform = "translate(23.6vw,-30vh)";

//       butryometerSecond.style.transform = "translate(-1vw,-16vh) rotate(0deg)";
// butryometer.style.transform = "translate(0vw,-40vh)";
// centrifuge.style.display = "block";
// butryometer.style.zIndex = 3;

// butryometerSecond.style.transform="translate(-2vw,-16vh) rotate(0deg) "
// pipette.style.transform = "translate(0vw,-50vh) rotate(0deg)";
// pipette.style.transform = "translate(42vw,-50vh)"

// pipette.style.transform = "translate(42vw,-35vh)"

//  butryometer.style.transform = "translate(0vw,-20vh) rotate(0deg)";
// butryometer.style.transform = "translate(0vw,-55vh)"

//  butryometerFilling.style.transform = "translate(0vw,-34.9vh)";

//  butryometer.style.transform = "translate(-23.2vw,-55vh)"

//  butryometerFilling.style.transform = "translate(-23.2vw,-34.9vh)";

//  butryometer.style.transform = "translate(-23.2vw,-33vh)"

//  butryometerFilling.style.transform = "translate(-23.2vw,-13vh)";

//  butryometer.style.transform = "translate(-20.4vw,-40vh)";
//   butryometerFilling.style.transform = "translate(-20.4vw,-20vh)";
// await wait(1000);
// butryometer.style.transform = "translate(-20.4vw,-25vh)";
// butryometerFilling.style.transform = "translate(-20.4vw,-5vh)";

// butryometerFilling.style.transform = "translate(0vw,-20vh)"; // Lock to avoid multiple triggers

thermometer.addEventListener("click", async () => {
  if (experimentStep === 27) {
    thermometer.style.transform = "translate(0vw,-50vh)";

    await wait(1000);

    thermometer.style.transform = "translate(8.6vw,-50vh)";
    await wait(1000);

    thermometer.style.transform = "translate(8.6vw,-22vh)";
    await wait(1000);
    thermometerReading.style.display = "block";
    thermometerReading.classList.add("thermometerFilling");
    updateInstruction(experimentStep);
    experimentStep = 28;
    await wait(1000); // ← add this
    showRecordLRButton(); // ← add this
  }
});
lactometer.addEventListener("click", async () => {
  if (experimentStep === 26) {
    lactometer.style.transform = "translate(0vw,-50vh) rotate(0deg)";
    await wait(1000);
    lactometer.style.transform = "translate(16vw,-50vh)";
    await wait(1000);
    lactometer.style.transform = "translate(16vw,-12vh)";
    updateInstruction(experimentStep);
    experimentStep = 27;
  }
});

pipette.addEventListener("click", async () => {
  if (isPipetteBusy) return; // Ignore click if already running

  isPipetteBusy = true; // Lock

  try {
    if (experimentStep === 1) {
      await wait(500);
      pipette.style.transform = "translate(0vw,-50vh) rotate(0deg)";
      await wait(1000);
      pipette.style.transform = "translate(35.4vw,-50vh)";
      await wait(1000);
      pipette.style.transform = "translate(35.4vw,-18vh)";
      await wait(1000);
      updateInstruction(experimentStep);
      sulphuricAcidSolution.classList.add("reducing");
      experimentStep = 2;
    } else if (experimentStep === 3) {
      await wait(1000);
      pipette.style.transform = "translate(23.6vw,-50vh)";
      await wait(1000);
      pipette.style.transform = "translate(42vw,-50vh)";
      await wait(1000);
      pipette.style.transform = "translate(42vw,-35vh)";
      await wait(1000);
      milkSolution.classList.add("reducing");
      await wait(500);
      milkInPipette.style.transform = "translate(0vw,-15vh)";
      pipette.style.transform = "translate(42vw,-50vh)";
      await wait(800);

      pipette.style.transform = "translate(23.6vw,-50vh)";
      milkInPipette.style.transform = "translate(-18.37vw,-15vh)";
      await wait(1000);
      pipette.style.transform = "translate(23.6vw,-45vh)";
      milkInPipette.style.transform = "translate(-18.37vw,-10vh)";
      await wait(500);
      milkInPipette.classList.add("pouring");
      await wait(300);
      pouringMilkSolution.style.display = "block";
      pouringMilkSolution.classList.add("pouring1");
      await wait(800);
      butryometerFilling.classList.add("filling1");
      updateInstruction(experimentStep);
      experimentStep = 4;
    } else if (experimentStep === 4) {
      await wait(1000);
      pipette.style.transform = "translate(28.5vw,-45vh)";
      await wait(1000);
      pipette.style.transform = "translate(28.5vw,-25vh)";
      await wait(1000);
      pipette.style.transform = "translate(28.5vw,-46vh)";
      await wait(1000);
      pipette.style.transform = "translate(23.6vw,-46vh)";
      await wait(1000);
      pipette.style.transform = "translate(23.6vw,-45vh)";
      await wait(1000);
      pipette.style.transform = "translate(0vw,0vh) rotate(90deg)";
      updateInstruction(experimentStep);
      experimentStep = 5;
      console.log("step 3 completed", experimentStep);
    } else if (experimentStep === 13) {
      pipette.style.zIndex = 25;
      pipette.style.transform = "translate(0vw,-50vh) rotate(0deg)";
      await wait(1000);
      pipette.style.transform = "translate(42vw,-50vh)";
      await wait(1000);
      pipetteWater.style.display = "block";

      pipette.style.zIndex = 10;

      pipette.style.transform = "translate(42vw,-35vh)";
      await wait(1000);
      waterMeasuringCylinder.classList.add("reducing1");
      await wait(1000);
      pipetteWater.style.transform = "translate(0vw,-15vh)";

      pipette.style.transform = "translate(42vw,-50vh)";
      await wait(1000);
      pipetteWater.style.transform = "translate(-18.44vw,-15vh)";
      pipette.style.transform = "translate(23.6vw,-50vh)";
      await wait(1000);
      pipetteWater.style.transform = "translate(-18.44vw,-7vh)";
      pipette.style.transform = "translate(23.6vw,-42vh)";
      await wait(800);
      pipetteWater.classList.add("pouring");

      await wait(500);
      butryometerWaterSolution.style.display = "block";
      butryometerWaterSolution.classList.add("pouring1");
      await wait(200);
      waterButryometer.style.display = "block";
      waterButryometer.style.zIndex = 22;

      waterButryometer.classList.add("filling1");

      await wait(1500);
      pipette.style.zIndex = 25;

      pipette.style.transform = "translate(0vw,0vh) rotate(90deg)";
      updateInstruction(experimentStep);

      experimentStep = 14;
    }
  } finally {
    isPipetteBusy = false; // Unlock when done
  }
});
let isButryometerBusy = false;
// ✅ Register butryometer listener only once — outside pipette handler
butryometer.addEventListener("click", async () => {
  // if(isButryometerBusy) return;
  // isButryometerBusy = true;
  if (experimentStep === 2) {
    pipetteAcid.style.display = "block";
    await wait(500);

    butryometer.style.transform = "translate(0vw,-20vh) rotate(0deg)";
    await wait(1000);
    // pipetteAcid.style.display="block"
    pipetteAcid.style.transform = "translate(0vw,-30vh)";
    pipette.style.transform = "translate(35.4vw,-50vh)";
    await wait(1000);
    pipette.style.transform = "translate(23.6vw,-50vh)";
    pipetteAcid.style.transform = "translate(-11.8vw,-30vh)";
    await wait(1000);
    pipette.style.transform = "translate(23.6vw,-45vh)";
    pipetteAcid.style.transform = "translate(-11.8vw,-25vh)";
    await wait(600);
    pipetteAcid.classList.add("pouring");
    await wait(300);
    // butryometerSolution.style.display="bloc"
    butryometerSolution.style.display = "block";

    butryometerSolution.classList.add("pouring1");

    await wait(600);
    butryometerFilling.style.display = "block";
    butryometerFilling.classList.add("filling");
    updateInstruction(experimentStep);

    // await wait(200);
    experimentStep = 3;
  } else if (experimentStep === 5) {
    butryometer.style.transform = "translate(0vw,-40vh)";
    butryometerFilling.style.transform = "translate(0vw,-20vh)";
    await wait(1000);
    butryometer.style.transform = "translate(-20.4vw,-40vh)";
    butryometerFilling.style.transform = "translate(-20.4vw,-20vh)";
    await wait(1000);
    butryometer.style.transform = "translate(-20.4vw,-25vh)";
    butryometerFilling.style.transform = "translate(-20.4vw,-5vh)";
    updateInstruction(experimentStep);
    experimentStep = 6;
    console.log("step no.", experimentStep);
  } else if (experimentStep === 8) {
    butryometer.style.transform = "translate(-20.4vw,-25vh)";
    butryometerFilling.style.transform = "translate(-20.4vw,-5vh)";
    await wait(1000);
    butryometer.style.transform = "translate(-20.4vw,-40vh)";
    butryometerFilling.style.transform = "translate(-20.4vw,-20vh)";
    await wait(1000);
    butryometer.style.transform = "translate(0vw,-40vh)";
    butryometerFilling.style.transform = "translate(0vw,-20vh)";

    await wait(1000);
    butryometer.style.transform = "translate(0vw,0vh) rotate(90deg)";
    butryometerFilling.style.transform =
      "translate(-1.76vw,16.5vh) rotate(90deg)";
    updateInstruction(experimentStep);
    nextButton.style.display = "block";

    experimentStep = 9;
  } else if (experimentStep === 11) {
    butryometer.style.zIndex = 22;
    butryometerFilling.style.zIndex = 21;
    butryometer.style.transform = "translate(0vw,-55vh)";

    butryometerFilling.style.transform = "translate(0vw,-34.9vh)";
    await wait(1000);

    butryometer.style.transform = "translate(-23.2vw,-55vh)";

    butryometerFilling.style.transform = "translate(-23.2vw,-34.9vh)";
    await wait(1000);
    butryometer.style.zIndex = 3;
    butryometerFilling.style.zIndex = 2;

    butryometer.style.transform = "translate(-23.2vw,-33vh)";

    butryometerFilling.style.transform = "translate(-23.2vw,-13vh)";
    updateInstruction(experimentStep);

    experimentStep = 12;
  } else if (experimentStep === 19) {
    butryometer.style.transform = "translate(-23.2vw,-55vh)";

    butryometerFilling.style.transform = "translate(-23.2vw,-34.9vh)";
    await wait(1000);
    butryometer.style.transform = "translate(0vw,-55vh)";

    butryometerFilling.style.transform = "translate(0vw,-34.9vh)";
    await wait(1000);
    butryometerFilling.style.transform = "translate(0vw,-34.9vh)";
    butryometer.style.transform = "translate(0vw,0vh) rotate(90deg)";
    butryometerFilling.style.transform =
      "translate(-1.76vw,16.5vh) rotate(90deg)";
    updateInstruction(experimentStep);
    nextButton1.style.display = "block";

    experimentStep = 20;

    //step for taking the butryomter out of the centrifuge after the process.
  } else if (experimentStep === 21) {
    //this step is for the taking the butryometer again in this water bath for second session
    butryometer.style.transform = "translate(0vw,-40vh)";
    butryometerFilling.style.transform = "translate(0vw,-20vh)";
    await wait(1000);
    butryometer.style.transform = "translate(-20.4vw,-40vh)";
    butryometerFilling.style.transform = "translate(-20.4vw,-20vh)";
    await wait(1000);
    butryometer.style.transform = "translate(-20.4vw,-25vh)";
    butryometerFilling.style.transform = "translate(-20.4vw,-5vh)";
    updateInstruction(experimentStep);
    experimentStep = 22;
  } else if (experimentStep === 24) {
    butryometer.style.transform = "translate(-20.5vw,-55vh)";

    butryometerFilling.style.transform = "translate(-20.5vw,-34.9vh)";
    await wait(1000);
    butryometer.style.transform = "translate(0vw,-55vh)";

    butryometerFilling.style.transform = "translate(0vw,-34.9vh)";
    await wait(1000);
    butryometerFilling.style.transform = "translate(0vw,-34.9vh)";
    butryometer.style.transform = "translate(0vw,0vh) rotate(90deg)";
    butryometerFilling.style.transform =
      "translate(-1.76vw,16.5vh) rotate(90deg)";
    // updateInstruction(experimentStep);
    nextButton2.style.display = "block";
    updateInstruction(experimentStep);
    experimentStep = 25;

    //this step is for taking the readings after the whole process is done
  }
});
butryometerSecond.addEventListener("click", async () => {
  if (experimentStep === 12) {
    butryometerSecond.style.zIndex = 23;
    butryometerSecond.style.transform = "translate(-1vw,-12vh) rotate(0deg)";
    experimentStep = 13;
  } else if (experimentStep === 14) {
    butryometerSecond.style.zIndex = 23;
    butryometerSecond.style.transform = "translate(-1vw,-50vh)";
    waterButryometer.style.transform = "translate(0vw,-38vh)";
    await wait(1000);
    butryometerSecond.style.transform = "translate(-16.15vw,-50vh)";
    waterButryometer.style.transform = "translate(-15.15vw,-38vh)";
    await wait(1000);
    butryometerSecond.style.transform = "translate(-16.25vw,-30vh)";
    waterButryometer.style.transform = "translate(-15.25vw,-18vh)";
    updateInstruction(experimentStep);
    experimentStep = 15;
  }
});

function toggleBathPower() {
  if (experimentStep !== 6 && experimentStep !== 22) return;
  if (experimentStep === 6) {
    experimentStep = 7;
  } else if (experimentStep === 22) {
    updateInstruction(experimentStep);
    experimentStep = 23;
  }
  if (bathPanelState === 11) {
    bathPanelState = 12;
    bathHeaterOn = false;
    setBathDigitsOpacity(1);
    bathPowerBtn.style.background =
      "radial-gradient(rgb(255,215,15), rgb(255,122,6))";
    instructionTxt.innerText = "Press 'TEMP' to set temperature.";
  } else if (bathPanelState === 12 && !bathHeaterOn) {
    bathPanelState = 11;
    setBathDigitsOpacity(0);
    bathPowerBtn.style.background =
      "radial-gradient(rgb(255,255,255), rgb(135,135,135))";
    instructionTxt.innerText = "Press 'ON/OFF' to turn on the water bath.";
    bathTimerRunning = false;
  }
}

function startBathProcess() {
  if (experimentStep === 7) {
    const temp = parseInt(tempDisplay.innerText, 10);
    const min = parseInt(minDisplay.innerText, 10);
    const sec = parseInt(secDisplay.innerText, 10);

    if (temp === 65 && min === 5 && sec === 0) {
      instructionTxt.innerText = "Water bath running for 5 minutes at 65°C...";
      bathTimerRunning = true;
      bathMin = min;
      bathSec = sec;
      runBathTimer();
      console.log("waterBAth running");
      updateInstruction(experimentStep);
      experimentStep = 8;
    } else {
      instructionTxt.innerText =
        "Please set temp to 65°C and timer to 05:00 to start.";
    }
  }
}

function step9() {
  const min = parseInt(minDisplay.innerText, 10);
  const sec = parseInt(secDisplay.innerText, 10);

  if (experimentStep === 9 && min === 0 && sec === 0) {
    waterBathControls.style.display = "none";
    waterBathBack.style.display = "none";
    waterBathFront.style.display = "none";
    centrifuge.style.display = "block";
    sulphuricAcid.style.display = "none";
    milkSolution.style.display = "none";
    // measuringCylinder.style.display="none";
    waterMeasuringCylinder.style.display = "block";
    amylAlcoholContainer.style.display = "none";
    amylAlcoholSolution.style.display = "none";
    butryometerSecond.style.display = "block";

    // centrifugeControls.classList.remove("power-off");
    centrifugeControls.classList.remove("power-off");
    centrifugeControls.style.display = "block";
    nextButton.style.display = "none";
    butryometerSecond.style.zIndex = 22;

    // ← inline style, highest priority

    // centrifuge.style.display = "none";
    // centrifugeControls.style.display = "none";
  } else {
    instructionTxt.innerText =
      "Please wait for the timer to complete before proceeding.";
  }
  updateInstruction(experimentStep);
  centrifugeLid.style.zIndex = 25;
  experimentStep = 10;
}

function toggleCentrifugePower() {
  if (experimentStep !== 16) return;
  centrifugePowered = !centrifugePowered;
  console.log(centrifugePowered);
  centrifugeControls.classList.toggle("power-on", centrifugePowered);
  centrifugeControls.classList.toggle("power-off", !centrifugePowered);
  if (!centrifugePowered) {
    centrifugeRPM = 0;
    updateRPMDisplay();
    centrifugeMode = "";
  }

  updateInstruction(experimentStep);
  experimentStep = 17;
}

function step20() {
  /* Only run if the flow has reached this point */
  console.log(experimentStep);
  if (experimentStep !== 20) return;

  /* 1️⃣  Hide centrifuge */
  centrifuge.style.display = "none";
  centrifugeControls.style.display = "none";
  centrifugeControls.classList.add("power-off");
  centrifugePowered = false;
  centrifugeRPM = 0;
  updateRPMDisplay();

  /* 2️⃣  Show the water‑bath again */

  startBathButton.style.display = "none";
  startSecondStartButton.style.display = "block";
  nextButton1.style.display = "none";
  butryometerSecond.style.display = "none";
  waterButryometer.style.display = "none";
  waterBathBack.style.display = "block"; // base image
  waterBathFront.style.display = "block"; // lid/overlay
  waterBathControls.style.display = "block";
  // control panel

  /* 3️⃣  Reset bath UI + state */
  bathPanelState = 11; // off
  bathHeaterOn = false;
  bathTimerRunning = false;
  bathMin = bathSec = 0;
  minDisplay.innerText = "00";
  secDisplay.innerText = "00";
  tempDisplay.innerText = "00";
  setBathDigitsOpacity(0); // hide digits until powered on
  bathPowerBtn.style.background =
    "radial-gradient(rgb(255,255,255), rgb(135,135,135))";

  /* 4️⃣  Tell the user what to do next */
  instructionTxt.innerText = "Press 'ON/OFF' to turn on the water bath.";

  /* 5️⃣  Advance the flow */
  updateInstruction(experimentStep);
  experimentStep = 21; // or whatever your next stage is
}

async function startBathProcessSecondCycle() {
  if (experimentStep === 23) {
    const temp = parseInt(tempDisplay.innerText, 10);
    const min = parseInt(minDisplay.innerText, 10);
    const sec = parseInt(secDisplay.innerText, 10);

    if (temp === 65 && min === 4 && sec === 0) {
      instructionTxt.innerText = "Water bath running for 4 minutes at 65°C...";
      bathTimerRunning = true;
      bathMin = min;
      bathSec = sec;
      runBathTimer();
      await wait(1000);
      updateInstruction(experimentStep);
      experimentStep = 24;
      console.log("waterBAth running");
    } else {
      instructionTxt.innerText =
        "Please set temp to 65°C and timer to 04:00 to start.";
    }
  }
}
centrifugeLid.addEventListener("click", async () => {
  if (experimentStep === 10) {
    centrifugeLid.style.transform = "translate(0vw,-12vh)";
    await wait(1000);
    centrifugeLid.style.transform = "translate(24vw,-12vh)";
    await wait(1000);
    centrifugeLid.style.zIndex = 21;
    centrifugeLid.style.transform = "translate(24vw,26vh)";
    updateInstruction(experimentStep);
    experimentStep = 11;
  } else if (experimentStep === 15) {
    centrifugeLid.style.zIndex = 25;
    centrifugeLid.style.transform = "translate(24vw,-12vh)";
    await wait(1000);
    centrifugeLid.style.transform = "translate(0vw,-12vh)";
    await wait(1000);
    centrifugeLid.style.transform = "translate(0vw,0vh)";
    updateInstruction(experimentStep);

    experimentStep = 16;
  } else if (experimentStep === 18) {
    centrifugeLid.style.transform = "translate(0vw,-12vh)";
    await wait(1000);
    centrifugeLid.style.transform = "translate(24vw,-12vh)";
    await wait(1000);
    centrifugeLid.style.transform = "translate(24vw,26vh)";
    updateInstruction(experimentStep);
    experimentStep = 19;
  }
});

/* =============== 5. Water‑bath panel logic ========================== */
function setBathDigitsOpacity(val) {
  [tempDisplay, celciusLabel, minDisplay, secDisplay].forEach(
    (el) => (el.style.opacity = val),
  );
}

// function toggleBathPower() {
//   if (bathPanelState === 11) {
//     bathPanelState = 12;
//     bathHeaterOn = false;
//     setBathDigitsOpacity(1);
//     bathPowerBtn.style.background = "radial-gradient(rgb(255,215,15), rgb(255,122,6))";
//     instructionTxt.innerText = "Press 'TEMP' to set temperature.";
//   } else if (bathPanelState === 12 && !bathHeaterOn) {
//     bathPanelState = 11;
//     setBathDigitsOpacity(0);
//     bathPowerBtn.style.background = "radial-gradient(rgb(255,255,255), rgb(135,135,135))";
//     instructionTxt.innerText = "Press 'ON/OFF' to turn on the water bath.";
//     bathTimerRunning = false;
//   }
// }

function adjustBathDisplay(el, min, max, delta) {
  let v = parseInt(el.innerText, 10);
  v = Math.min(Math.max(v + delta, min), max);
  el.innerText = v < 10 ? "0" + v : v;
}

function increaseBathValue() {
  if (bathPanelState === 13) adjustBathDisplay(tempDisplay, 0, 150, +13);
  else if (bathPanelState === 14) adjustBathDisplay(minDisplay, 0, 59, +1);
  else if (bathPanelState === 15) adjustBathDisplay(secDisplay, 0, 59, +1);
}

function decreaseBathValue() {
  if (bathPanelState === 13) adjustBathDisplay(tempDisplay, 0, 150, -1);
  else if (bathPanelState === 14) adjustBathDisplay(minDisplay, 0, 59, -1);
  else if (bathPanelState === 15) adjustBathDisplay(secDisplay, 0, 59, -1);
}

function tryStartBathTimer() {
  bathMin = parseInt(minDisplay.innerText, 10);
  bathSec = parseInt(secDisplay.innerText, 10);
  if (bathMin === 0 && bathSec === 0) return;
  if (!bathTimerRunning) {
    bathTimerRunning = true;
    runBathTimer();
  }
}

function runBathTimer() {
  if (!bathTimerRunning) return;
  if (bathMin === 0 && bathSec === 0) {
    bathTimerRunning = false;
    instructionTxt.innerText = "Water‑bath timer complete.";
    return;
  }
  if (bathSec === 0) {
    bathMin--;
    bathSec = 59;
  } else {
    bathSec--;
  }
  minDisplay.innerText = bathMin.toString().padStart(2, "0");
  secDisplay.innerText = bathSec.toString().padStart(2, "0");
  setTimeout(runBathTimer, 1);
}

/* =============== 6. Centrifuge RPM & timer logic ==================== */
function updateRPMDisplay() {
  rpmDisplay.innerText = centrifugeRPM.toString().padStart(4, "0");
}

function changeRPM(delta) {
  centrifugeRPM = Math.min(Math.max(centrifugeRPM + delta, 0), 15000);
  updateRPMDisplay();
}

function setCentrifugeMinuteMode() {
  centrifugeMode = "mm";
}

function setCentrifugeSecondMode() {
  centrifugeMode = "ss";
}

function updateCentrifugeTimerDisplay() {
  centrifugeMinEl.innerText = centrifugeMin.toString().padStart(2, "0");
  centrifugeSecEl.innerText = centrifugeSec.toString().padStart(2, "0");
}

function increaseCentrifugeTime() {
  if (!centrifugePowered) return;
  if (centrifugeMode === "mm") {
    centrifugeMin = Math.min(centrifugeMin + 1, 59);
  } else if (centrifugeMode === "ss") {
    centrifugeSec = Math.min(centrifugeSec + 1, 59);
  } else {
    changeRPM(+100);
    return;
  }
  updateCentrifugeTimerDisplay();
}

function decreaseCentrifugeTime() {
  if (!centrifugePowered) return;
  if (centrifugeMode === "mm") {
    centrifugeMin = Math.max(centrifugeMin - 1, 0);
  } else if (centrifugeMode === "ss") {
    centrifugeSec = Math.max(centrifugeSec - 1, 0);
  } else {
    changeRPM(-100);
    return;
  }
  updateCentrifugeTimerDisplay();
}

function startCentrifugeTimer() {
  if (centrifugeMin === 0 && centrifugeSec === 0) return;
  if (centrifugeTimerOn) return;
  centrifugeTimerOn = true;
  runCentrifugeTimer();
}

function runCentrifugeTimer() {
  if (!centrifugeTimerOn) return;
  if (centrifugeMin === 0 && centrifugeSec === 0) {
    centrifugeTimerOn = false;
    centrifugePowered = false;
    centrifugeControls.classList.add("power-off");
    centrifugeControls.classList.remove("power-on");
    centrifugeRPM = 0;
    updateRPMDisplay();
    // centrifugeStartBtn.disabled = false; // re-enable if needed
    return;
  }
  if (centrifugeSec === 0) {
    centrifugeMin--;
    centrifugeSec = 59;
  } else {
    centrifugeSec--;
  }
  updateCentrifugeTimerDisplay();
  setTimeout(runCentrifugeTimer, 10);
}

function startCentrifuge() {
  const rpm = parseInt(rpmDisplay.innerText, 10);
  const min = parseInt(centrifugeMinEl.innerText, 10);
  const sec = parseInt(centrifugeSecEl.innerText, 10);

  console.log("🚀 startCentrifuge called");
  console.log("experimentStep:", experimentStep);
  console.log("RPM:", rpm, "Time:", min + ":" + sec);
  console.log(experimentStep);

  if (experimentStep === 17) {
    if (rpm === 1100 && min === 3 && sec === 0) {
      instructionTxt.innerText =
        "Centrifuge running for 3 minutes at 1100 RPM...";
      centrifugeTimerOn = true;
      centrifugePowered = true;
      runCentrifugeTimer();
      updateInstruction(experimentStep);
      experimentStep = 18;
      console.log("✅ Centrifuge started");
      // centrifugeStartBtn.disabled = true;
    } else {
      instructionTxt.innerText =
        "Please set RPM to 1100 and timer to 03:00 to start.";
    }
  } else {
    instructionTxt.innerText = "Centrifuge is not ready yet (Step must be 16).";
  }
}

function step25() {
  if (experimentStep != 25) return;
  nextButton2.style.display = "none";
  waterMeasuringCylinder.style.display = "none";
  milkSolution.style.display = "none";

  thermometer.style.display = "block";
  milk50Solution.style.display = "block";
  // milkMoreThan50Solution.display="block"
  waterBathControls.style.display = "none";
  waterBathBack.style.display = "none";
  waterBathFront.style.display = "none";
  butryometer.style.display = "none";
  butryometerFilling.style.display = "none";
  pipette.style.display = "none";
  lactometer.style.display = "block";

  updateInstruction(experimentStep);

  experimentStep = 26;
}

function updateInstruction(step) {
  const instruction = document.getElementById("instructionText");

  switch (step) {
    // case 1:
    //   instruction.innerText="Click on the pipette to draw 10ml of sulphuric acid and dispense it into the butyrometer.."
    //   break;

    case 1:
      instruction.innerText =
        "Click on the Butryometer to bring it in for dispensing the sulphuric acid";
      break;

    case 2:
      instruction.innerText =
        "Click on the pipette to draw 10.75 ml of milk and dispense it into the butyrometer ";
      break;

    case 3:
      instruction.innerText =
        "Click on the pipette again to draw 1ml of amyl alcohol and dispense it into the butryometer";
      break;
    case 4:
      instruction.innerText =
        "Now click on the butyrometer to place it into the water bath";
      break;
    // Call related step function
    case 5:
      instruction.innerText =
        "Click 'ON/OFF' to power the water bath. Use 'TEMP', 'MM', and 'SS' to select temperature, minutes, and seconds. Adjust the values using the '+' and '−' buttons.Set the temperature 65C and time 5 minutes and 00 seconds. Then start the waterBath ";
      break;

    case 7:
      instruction.innerText =
        "Now click on the butryometer to take it out of the waterbath";
      break;

    case 8:
      instruction.innerText =
        "Click on the next button below to proceed further";
      break;
    case 9:
      instruction.innerText = "Click on centrifuge lid to open it ";
      break;

    case 10:
      instruction.innerText =
        "Now click on the butryometer to place it inside the centrifuge ";
      break;

    case 11:
      instruction.innerText =
        "Click on the second butryometer to bring it on for dispensing the water ";
      break;
    case 12:
      instruction.innerText =
        "Now click on the pipette to draw 21.75ml water and dispense it into the butryometer to balance out the first one ";
      break;

    case 13:
      instruction.innerText =
        "Click on the other butryometer to place it inside the centrifuge to balance out the rotating plate ";
      break;

    case 14:
      instruction.innerText =
        "Now click on the centrifuge lid again to close the centrifuge";
      break;

    case 15:
      instruction.innerText =
        "Click 'ON/OFF' to power the water bath. Use  'MM', and 'SS' to select minutes, and seconds. Adjust the values using the '+' and '−' buttons of rpm and time.Set the rpm 1100 and 3 minutes and 00 seconds.  Then start the centrifuge ";
      break;

    case 16:
      instruction.innerText =
        "Click on the centrifuge start button to start the centrifuge";
      break;

    case 17:
      instruction.innerText =
        "Now click on the centrifuge lid again to open the centrifuge";
      break;

    case 18:
      instruction.innerText =
        "click on the butryometer to take out the butryometer out of the centrifuge machine";
      break;

    case 19:
      instruction.innerText = "Click on the next button to proceed further";
      break;

    case 20:
      instruction.innerText =
        "Again click on the Butryometer to place it inside the waterBath .";

      break;

    case 21:
      instruction.innerText =
        "Click 'ON/OFF' to power the water bath. Use 'TEMP', 'MM', and 'SS' to select temperature, minutes, and seconds.Set the temperatue 65C and time 3 minutes. Adjust the values using the '+' and '−' buttons. Then start the waterBath";
      break;

    case 22:
      instruction.innerText =
        "Click 'ON/OFF' to power the water bath. Use 'TEMP', 'MM', and 'SS' to select temperature, minutes, and seconds.Set the temperatue 65C and time 3 minutes. Adjust the values using the '+' and '−' buttons. Then start the waterBath";
      break;

    case 23:
      instruction.innerText =
        "Now take it out of the waterBath and measure fat laye";

      break;

    case 24:
      instruction.innerText = "Now click on the next button to proceed further";
      break;

    case 25:
      instruction.innerText =
        "Click on the lactometer to place it inside the 50ml Milk to measure the fat and after that click on the thermometer to measure the temperature of the milk";
      break;

    case 26:
      instruction.innerText =
        "Now click on the thermometer to place it inside the measuring cylinder";

    default:
      instruction.innerText = "Experiment.";
  }
}

// function toggleCentrifugePower() {
//   centrifugePowered = !centrifugePowered;
//   centrifugeControls.classList.toggle("power-on", centrifugePowered);
//   centrifugeControls.classList.toggle("power-off", !centrifugePowered);
//   if (!centrifugePowered) {
//     centrifugeRPM = 0;
//     updateRPMDisplay();
//     centrifugeMode = "";
//   }
// }

/* =============== 7. Button bindings ==================== */
function toggleTempSetting() {
  bathPanelState = bathPanelState === 13 ? 12 : 13;
}
function toggleMinuteSetting() {
  bathPanelState = bathPanelState === 14 ? 12 : 14;
}
function toggleSecondSetting() {
  bathPanelState = bathPanelState === 15 ? 12 : 15;
}

/* =============== 8. Expose functions =================== */
window.toggleBathPower = toggleBathPower;
window.increaseBathValue = increaseBathValue;
window.decreaseBathValue = decreaseBathValue;
window.startBathTimer = tryStartBathTimer;

window.toggleCentrifugePower = toggleCentrifugePower;
window.setCentrifugeMinuteMode = setCentrifugeMinuteMode;
window.setCentrifugeSecondMode = setCentrifugeSecondMode;
window.increaseCentrifugeTime = increaseCentrifugeTime;
window.decreaseCentrifugeTime = decreaseCentrifugeTime;
window.startCentrifugeTimer = startCentrifugeTimer;

window.toggleTempSetting = toggleTempSetting;
window.toggleMinuteSetting = toggleMinuteSetting;
window.toggleSecondSetting = toggleSecondSetting;
window.increaseValue = increaseBathValue;
window.decreaseValue = decreaseBathValue;
window.startBathProcess = startBathProcess;
window.startBathProcessSecondCycle = startBathProcessSecondCycle;

window.step9 = step9;
window.step20 = step20;
window.step25 = step25;

/* ================================================================
   ADDITIONS FOR SNF SIMULATOR — Paste this at the BOTTOM of project.js
   
   ALSO make ONE small edit in thermometer.addEventListener:
   After the line:  experimentStep = 28;
   Add these two lines:
       await wait(1000);
       showRecordLRButton();
   ================================================================ */

const STATIC_LR = 28; // Lactometer Reading (at observed temp)
const STATIC_TEMP = 30; // °C — observed milk temperature
const STATIC_FAT = 3.5; // % fat recorded from butyrometer (Step 10)

function calculateCLR(lr, temp) {
  // Quevenne correction: CLR = LR + 0.2 × (T - 15.5)
  return (lr + 0.2 * (temp - 15.5)).toFixed(2);
}

function calculateSNF(clr, fat) {
  // SNF (%) = CLR/4 + 0.25F + 0.6
  return (clr / 4 + 0.25 * fat + 0.6).toFixed(2);
}

function showRecordLRButton() {
  const right = document.getElementById("right");
  right.style.display = "flex";
  right.style.backgroundColor = "#fffbe6";
  right.style.width = "420px";
  right.style.position = "fixed";
  right.style.top = "50%";
  right.style.left = "50%";
  right.style.transform = "translate(-50%, -50%)";
  right.style.height = "auto";
  right.style.maxHeight = "90vh";
  right.style.zIndex = "200";
  right.style.overflowY = "auto";
  right.style.borderRadius = "12px";
  right.style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)";
  right.style.border = "2px solid #f0d988";
  const stepsDiv = document.getElementById("steps");
  stepsDiv.innerHTML = `
    <div style="text-align:center; padding:1rem; font-family:'Segoe UI',sans-serif;">
      <h3 style="color:#d84315; margin-bottom:0.5rem;">📊 Step 11: Record Lactometer Reading</h3>
      <p style="font-size:0.9rem; color:#555;">
        The lactometer is inserted into the 50 ml milk sample.<br/>
        The thermometer is reading the milk temperature.
      </p>
      <button onclick="recordLR()" style="
        margin-top:0.8rem; padding:0.5rem 1.4rem;
        background:#e17055; color:#fff; border:none;
        border-radius:6px; font-size:1rem; cursor:pointer;
        box-shadow:0 2px 6px rgba(0,0,0,0.15);
      ">📋 Record LR Reading</button>
    </div>
  `;
}

window.recordLR = function () {
  const stepsDiv = document.getElementById("steps");
  const clr = calculateCLR(STATIC_LR, STATIC_TEMP);

  stepsDiv.innerHTML = `
    <div style="padding:0.8rem; font-family:'Segoe UI',sans-serif;">
      <h3 style="color:#d84315; margin-bottom:0.4rem;">📊 Step 11 – Reading Recorded</h3>

      <div style="background:#fff3e0; border-left:4px solid #fb8c00;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.6rem; font-size:0.9rem;">
        <strong>Lactometer Reading (LR):</strong> <strong>${STATIC_LR}</strong>
        &nbsp;|&nbsp;
        <strong>Milk Temperature:</strong> <strong>${STATIC_TEMP}°C</strong>
      </div>

      <p style="font-size:0.88rem; color:#555; margin-bottom:0.4rem;">
        Step 12: Calculate the <strong>Corrected Lactometer Reading (CLR)</strong>
        using the Quevenne correction formula:
      </p>
      <div style="background:#e8f5e9; border-left:4px solid #43a047;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.8rem; font-size:0.88rem;">
        CLR = LR + 0.2 × (T − 15.5)<br/>
        CLR = ${STATIC_LR} + 0.2 × (${STATIC_TEMP} − 15.5) = <strong>${clr}</strong>
      </div>

      <button onclick="recordCLR('${clr}')" style="
        padding:0.5rem 1.4rem; background:#43a047; color:#fff;
        border:none; border-radius:6px; font-size:1rem; cursor:pointer;
        box-shadow:0 2px 6px rgba(0,0,0,0.15);
      ">✅ Record CLR &amp; Calculate SNF</button>
    </div>
  `;

  document.getElementById("instructionText").innerText =
    "Step 12: CLR has been calculated. Click 'Record CLR & Calculate SNF' to get the final result.";
};

window.recordCLR = function (clr) {
  const snf = calculateSNF(parseFloat(clr), STATIC_FAT);
  const stepsDiv = document.getElementById("steps");

  stepsDiv.innerHTML = `
    <div style="padding:0.8rem; font-family:'Segoe UI',sans-serif;">
      <h3 style="color:#d84315; margin-bottom:0.6rem;">🧪 Final Results — Experiment Complete</h3>

      <div style="background:#fff3e0; border-left:4px solid #fb8c00;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.5rem; font-size:0.88rem;">
        <strong>Step 11 – LR:</strong> ${STATIC_LR}
        &nbsp;|&nbsp; <strong>Temp:</strong> ${STATIC_TEMP}°C
      </div>

      <div style="background:#e8f5e9; border-left:4px solid #43a047;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.5rem; font-size:0.88rem;">
        <strong>Step 12 – CLR:</strong><br/>
        CLR = ${STATIC_LR} + 0.2 × (${STATIC_TEMP} − 15.5) = <strong>${clr}</strong>
      </div>

      <div style="background:#e3f2fd; border-left:4px solid #1e88e5;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.5rem; font-size:0.88rem;">
        <strong>Step 13 – Fat % (F) from Butyrometer:</strong> <strong>${STATIC_FAT}%</strong>
      </div>

      <div style="background:#fce4ec; border-left:4px solid #e91e63;
        padding:0.8rem 1rem; border-radius:4px; font-size:0.92rem;">
        <strong>Step 13 – SNF Calculation:</strong><br/><br/>
        SNF (%) = CLR / 4 + 0.25 × F + 0.6<br/>
        SNF (%) = ${clr} / 4 + 0.25 × ${STATIC_FAT} + 0.6<br/><br/>
        <span style="font-size:1.2rem; color:#c62828;">
          <strong>SNF = ${snf}%</strong>
        </span>
      </div>

      <div style="margin-top:0.8rem; background:#f3e5f5; border-left:4px solid #8e24aa;
        padding:0.6rem 1rem; border-radius:4px; font-size:0.88rem; color:#4a148c;">
        ✅ <strong>Experiment Completed Successfully!</strong><br/>
        The SNF content of the given milk sample is <strong>${snf}%</strong>.
      </div>
    </div>
  `;

  document.getElementById("instructionText").innerText =
    `✅ Experiment Complete! SNF content of milk = ${snf}%. Determination of SNF in milk is done successfully.`;
};

window.showRecordLRButton = showRecordLRButton;

window.recordLR = function () {
  const stepsDiv = document.getElementById("steps");

  stepsDiv.innerHTML = `
    <div style="padding:0.8rem; font-family:'Segoe UI',sans-serif;">
      <h3 style="color:#d84315; margin-bottom:0.4rem;">📊 Step 11 – Enter Readings</h3>

      <div style="margin-bottom:0.6rem; font-size:0.9rem;">
        <label style="display:block; margin-bottom:0.2rem; color:#555;">
          <strong>Lactometer Reading (LR):</strong>
        </label>
        <input id="inputLR" type="number" value="28" style="
          width:100%; padding:0.4rem 0.6rem; border:1px solid #fb8c00;
          border-radius:4px; font-size:1rem;
        "/>
      </div>

      <div style="margin-bottom:0.6rem; font-size:0.9rem;">
        <label style="display:block; margin-bottom:0.2rem; color:#555;">
          <strong>Milk Temperature (°C):</strong>
        </label>
        <input id="inputTemp" type="number" value="30" style="
          width:100%; padding:0.4rem 0.6rem; border:1px solid #fb8c00;
          border-radius:4px; font-size:1rem;
        "/>
      </div>

      <div style="margin-bottom:0.8rem; font-size:0.9rem;">
        <label style="display:block; margin-bottom:0.2rem; color:#555;">
          <strong>Fat % (F) from Butyrometer:</strong>
        </label>
        <input id="inputFat" type="number" value="3.5" step="0.1" style="
          width:100%; padding:0.4rem 0.6rem; border:1px solid #fb8c00;
          border-radius:4px; font-size:1rem;
        "/>
      </div>

      <button onclick="computeSNF()" style="
        padding:0.5rem 1.4rem; background:#e17055; color:#fff;
        border:none; border-radius:6px; font-size:1rem; cursor:pointer;
        box-shadow:0 2px 6px rgba(0,0,0,0.15); width:100%;
      ">✅ Calculate CLR &amp; SNF</button>
    </div>
  `;

  document.getElementById("instructionText").innerText =
    "Step 11: Enter the Lactometer Reading, Temperature and Fat %. Then click Calculate.";
};

window.computeSNF = function () {
  const lr = parseFloat(document.getElementById("inputLR").value);
  const temp = parseFloat(document.getElementById("inputTemp").value);
  const fat = parseFloat(document.getElementById("inputFat").value);

  if (isNaN(lr) || isNaN(temp) || isNaN(fat)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  const clr = (lr + 0.2 * (temp - 15.5)).toFixed(2);
  const snf = (parseFloat(clr) / 4 + 0.25 * fat + 0.6).toFixed(2);

  const stepsDiv = document.getElementById("steps");
  stepsDiv.innerHTML = `
    <div style="padding:0.8rem; font-family:'Segoe UI',sans-serif;">
      <h3 style="color:#d84315; margin-bottom:0.6rem;">🧪 Final Results — Experiment Complete</h3>

      <div style="background:#fff3e0; border-left:4px solid #fb8c00;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.5rem; font-size:0.88rem;">
        <strong>LR:</strong> ${lr}
        &nbsp;|&nbsp; <strong>Temp:</strong> ${temp}°C
        &nbsp;|&nbsp; <strong>Fat (F):</strong> ${fat}%
      </div>

      <div style="background:#e8f5e9; border-left:4px solid #43a047;
        padding:0.6rem 1rem; border-radius:4px; margin-bottom:0.5rem; font-size:0.88rem;">
        <strong>CLR Calculation:</strong><br/>
        CLR = LR + 0.2 × (T − 15.5)<br/>
        CLR = ${lr} + 0.2 × (${temp} − 15.5) = <strong>${clr}</strong>
      </div>

      <div style="background:#fce4ec; border-left:4px solid #e91e63;
        padding:0.8rem 1rem; border-radius:4px; font-size:0.92rem;">
        <strong>SNF Calculation:</strong><br/><br/>
        SNF (%) = CLR / 4 + 0.25 × F + 0.6<br/>
        SNF (%) = ${clr} / 4 + 0.25 × ${fat} + 0.6<br/><br/>
        <span style="font-size:1.2rem; color:#c62828;">
          <strong>SNF = ${snf}%</strong>
        </span>
      </div>

      <div style="margin-top:0.8rem; background:#f3e5f5; border-left:4px solid #8e24aa;
        padding:0.6rem 1rem; border-radius:4px; font-size:0.88rem; color:#4a148c;">
        ✅ <strong>Experiment Completed Successfully!</strong><br/>
        The SNF content of the given milk sample is <strong>${snf}%</strong>.
      </div>
    </div>
  `;

  document.getElementById("instructionText").innerText =
    `✅ Experiment Complete! SNF content of milk = ${snf}%. Determination of SNF in milk is done successfully.`;
};
