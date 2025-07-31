// code the button, link the several numbers and weapons, add a feature to turn off some weapons plus buttons to turn all off or all on, maybe also like an original/no reskins button
// add a backend feature to store customized weapon choices, in case for example someone doenst have all the weapons and wants to save it
var isclicked = 0
const weapons = [
    "52 Gal", 
    "52 Gal Deco",
    "96 Gal", 
    "96 Gal Deco", 
    "Aerospray MG", 
    "Aerospray RG",
    "Annaki Splattershot Nova",
    "Ballpoint Splatling",
    "Ballpoint Splatling Nouveau",
    "Bamboozler 14 Mk I",
    "Bamboozler 14 Mk II",
    "Big Swig Roller Express",
    "Big Swig Roller",
    "Blaster",
    "Bloblobber",
    "Bloblobber Deco",
    "Carbon Roller",
    "Carbon Roller Deco",
    "Charcoal Decavitator",
    "Clash Blaster",
    "Clash Blaster Neo",
    "Classic Squiffer",
    "Custom Blaster",
    "Custom Douser Dualies FF",
    "Custom Dualie Squelchers",
    "Custom E-liter 4K Scope",
    "Custom E-liter 4K",
    "Custom Explosher",
    "Custom Goo Tuber",
    "Custom Hydra Splatling",
    "Custom Jet Squelcher",
    "Custom Range Blaster",
    "Custom Splattershot Jr",
    "Custom Wellstring V",
    "Dapple Dualies Nouveau",
    "Dapple Dualies",
    "Dark Tetra Dualies",
    "Douser Dualies FF",
    "Dread Wringer D",
    "Dread Wringer",
    "Dualie Squelchers",
    "Dynamo Roller",
    "E-liter 4K",
    "E-liter 4K Scope",
    "Enperry Splat Dualies",
    "Explosher",
    "Flingza Roller",
    "Foil Flingza Roller",
    "Foil Squeezer",
    "Forge Splattershot Pro",
    "Glooga Dualies",
    "Glooga Dualies Deco",
    "Gold Dynamo Roller",
    "Goo Tuber",
    "H-3 Nozzlenose",
    "H-3 Nozzlenose D",
    "Heavy Edit Splatling",
    "Heavy Edit Splatling Nouveau",
    "Heavy Splatling",
    "Heavy Splatling Deco",
    "Hydra Splatling",
    "Inkbrush",
    "Inkbrush Nouveau",
    "Inkline Tri-Stringer",
    "Jet Squelcher",
    "Krak-On Splat Roller",
    "L-3 Nozzlenose",
    "L-3 Nozzlenose D",
    "Light Tetra Dualies",
    "Luna Blaster Neo",
    "Luna Blaster",
    "Mini Splatling",
    "Mint Decavitator",
    "Nautilus 47",
    "Nautilus 79",
    "Neo Splash-o-matic",
    "Neo Sploosh-o-matic",
    "New Squiffer",
    "N-ZAP '85",
    "N-ZAP '89",
    "Octobrush",
    "Octobrush Nouveau",
    "Painbrush",
    "Painbrush Nouveau",
    "Range Blaster",
    "Rapid Blaster",
    "Rapid Blaster Deco",
    "Rapid Blaster Pro",
    "Rapid Blaster Pro Deco",
    "Recycled Brella 24 Mk I",
    "Recycled Brella 24 Mk II",
    "REEF-LUX 450",
    "REEF-LUX 450 Deco",
    "S-BLAST '91",
    "S-BLAST '92",
    "Slosher Deco",
    "Slosher",
    "Sloshing Machine",
    "Sloshing Machine Neo",
    "Snipewriter 5B",
    "Snipewriter 5H",
    "Sorella Brella",
    "Splash-o-matic",
    "Sploosh-o-matic",
    "Splat Brella",
    "Splat Charger",
    "Splat Dualies",
    "Splat Roller",
    "Splatana Stamper",
    "Splatana Stamper Nouveau",
    "Splatana Wiper",
    "Splatana Wiper Deco",
    "Splatterscope",
    "Splattershot Jr",
    "Splattershot Nova",
    "Splattershot Pro",
    "Splattershot",
    "Squeezer",
    "Tenta Brella",
    "Tenta Sorella Brella",
    "Tentatek Splattershot",
    "Tri-Slosher Nouveau",
    "Tri-Slosher",
    "Tri-Stringer",
    "Undercover Brella",
    "Undercover Sorella Brella",
    "Wellstring V",
    "Z+F Splat Charger",
    "Z+F Splatterscope",
    "Zink Mini Splatling"
];
const weaponslistfull = [ //for the allON button
    "52 Gal", 
    "52 Gal Deco",
    "96 Gal", 
    "96 Gal Deco", 
    "Aerospray MG", 
    "Aerospray RG",
    "Annaki Splattershot Nova",
    "Ballpoint Splatling",
    "Ballpoint Splatling Nouveau",
    "Bamboozler 14 Mk I",
    "Bamboozler 14 Mk II",
    "Big Swig Roller Express",
    "Big Swig Roller",
    "Blaster",
    "Bloblobber",
    "Bloblobber Deco",
    "Carbon Roller",
    "Carbon Roller Deco",
    "Charcoal Decavitator",
    "Clash Blaster",
    "Clash Blaster Neo",
    "Classic Squiffer",
    "Custom Blaster",
    "Custom Douser Dualies FF",
    "Custom Dualie Squelchers",
    "Custom E-liter 4K Scope",
    "Custom E-liter 4K",
    "Custom Explosher",
    "Custom Goo Tuber",
    "Custom Hydra Splatling",
    "Custom Jet Squelcher",
    "Custom Range Blaster",
    "Custom Splattershot Jr",
    "Custom Wellstring V",
    "Dapple Dualies Nouveau",
    "Dapple Dualies",
    "Dark Tetra Dualies",
    "Douser Dualies FF",
    "Dread Wringer D",
    "Dread Wringer",
    "Dualie Squelchers",
    "Dynamo Roller",
    "E-liter 4K",
    "E-liter 4K Scope",
    "Enperry Splat Dualies",
    "Explosher",
    "Flingza Roller",
    "Foil Flingza Roller",
    "Foil Squeezer",
    "Forge Splattershot Pro",
    "Glooga Dualies",
    "Glooga Dualies Deco",
    "Gold Dynamo Roller",
    "Goo Tuber",
    "H-3 Nozzlenose",
    "H-3 Nozzlenose D",
    "Heavy Edit Splatling",
    "Heavy Edit Splatling Nouveau",
    "Heavy Splatling",
    "Heavy Splatling Deco",
    "Hydra Splatling",
    "Inkbrush",
    "Inkbrush Nouveau",
    "Inkline Tri-Stringer",
    "Jet Squelcher",
    "Krak-On Splat Roller",
    "L-3 Nozzlenose",
    "L-3 Nozzlenose D",
    "Light Tetra Dualies",
    "Luna Blaster Neo",
    "Luna Blaster",
    "Mini Splatling",
    "Mint Decavitator",
    "Nautilus 47",
    "Nautilus 79",
    "Neo Splash-o-matic",
    "Neo Sploosh-o-matic",
    "New Squiffer",
    "N-ZAP '85",
    "N-ZAP '89",
    "Octobrush",
    "Octobrush Nouveau",
    "Painbrush",
    "Painbrush Nouveau",
    "Range Blaster",
    "Rapid Blaster",
    "Rapid Blaster Deco",
    "Rapid Blaster Pro",
    "Rapid Blaster Pro Deco",
    "Recycled Brella 24 Mk I",
    "Recycled Brella 24 Mk II",
    "REEF-LUX 450",
    "REEF-LUX 450 Deco",
    "S-BLAST '91",
    "S-BLAST '92",
    "Slosher Deco",
    "Slosher",
    "Sloshing Machine",
    "Sloshing Machine Neo",
    "Snipewriter 5B",
    "Snipewriter 5H",
    "Sorella Brella",
    "Splash-o-matic",
    "Sploosh-o-matic",
    "Splat Brella",
    "Splat Charger",
    "Splat Dualies",
    "Splat Roller",
    "Splatana Stamper",
    "Splatana Stamper Nouveau",
    "Splatana Wiper",
    "Splatana Wiper Deco",
    "Splatterscope",
    "Splattershot Jr",
    "Splattershot Nova",
    "Splattershot Pro",
    "Splattershot",
    "Squeezer",
    "Tenta Brella",
    "Tenta Sorella Brella",
    "Tentatek Splattershot",
    "Tri-Slosher Nouveau",
    "Tri-Slosher",
    "Tri-Stringer",
    "Undercover Brella",
    "Undercover Sorella Brella",
    "Wellstring V",
    "Z+F Splat Charger",
    "Z+F Splatterscope",
    "Zink Mini Splatling"
];

window.addEventListener("mousedown", function() {isclicked = 1});
window.addEventListener("mouseup", function() {isclicked = 0});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function createsite() {
    for (let i = weaponslistfull.length - 1; i > -1; i--) {
        let n = weaponslistfull[i];
        let x = document.getElementById(n);
        x.draggable = false
        x.src = "icons/" + n + ".png";
        x.alt = n;
        x.title = n;
        x.addEventListener("mousedown", () => {toggleweapon(n)});
        x.addEventListener("mouseover", () => {mouseoverweapon(n)});
    }
}

function chooseweapon() {
    let lenweapons = weapons.length;
    let x = document.getElementById("bigimg");
    if (lenweapons == 0) {
        x.src = "icons/random.png";
        x.alt = "None?";
        document.getElementById("smalltxt").innerHTML = "None?";
    }
    else {
        var theone = getRndInteger(0, lenweapons);
        var weaponname = weapons[theone];
        var pathfile = 'icons/' + weaponname + '.png';
        x.src = pathfile;
        x.alt = weaponname;
        document.getElementById("smalltxt").innerHTML = weaponname;
    }
}

function toggleweapon(weapon) {
    var x = document.getElementById(weapon);
    var j = x.style.backgroundColor;
    if (j == "red") {
        document.getElementById(weapon).style.backgroundColor = "greenyellow";
        weapons.push(weapon);
    }
    else {
        document.getElementById(weapon).style.backgroundColor = "red";
        const n = weapons.indexOf(weapon);
        weapons.splice(n, 1); 
    }
}

function mouseoverweapon(weapon) {
    if (isclicked == 1) {
        toggleweapon(weapon);
    }
}

function allOff() {
    for (let i = weapons.length - 1; i > -1; i--) {
        toggleweapon(weapons[i]);
      }
}

function allOn() {
    for (let i = weaponslistfull.length - 1; i > -1; i--) {
        if (weapons.includes(weaponslistfull[i]) == true) {
            continue
        }
        else {
            toggleweapon(weaponslistfull[i]) ;
        }
    }
}

function hideElement(weapon) {
    document.getElementById(weapon).style.display = "none";
}

function showElement(weapon) {
    document.getElementById(weapon).style.display = "initial";
}

function searchit() {
    x = document.getElementById("search").value;
    x = x.toLowerCase();
    for (let i = weaponslistfull.length - 1; i > -1; i--) {
        the = weaponslistfull[i].toLowerCase()
        if (the.includes(x) == true) {
            showElement(weaponslistfull[i]);
        }
        else {
            hideElement(weaponslistfull[i]);
        }
    }
    console.log(x)

}