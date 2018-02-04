var carPic = document.createElement("img");
var trackPics = [];


var picsToLoad = 0; // set automatically based on imageList in loadImages()  
function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imagVar, fileName) {
    imagVar.onload = countLoadedImagesAndLaunchIfReady;
    imagVar.src = "images/" + fileName;
}

function loadImageForTrackCode(trackCode, fileName){
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode],fileName);
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile: "playerOneCar.png"}, 
        {trackType: TRACK_ROAD, theFile: "trackRoad.png"}, 
        {trackType: TRACK_WALL, theFile: "trackWall.png"},
        {trackType: TRACK_GOAL, theFile: "goalLine.png"}, 
        {trackType: TRACK_TREE, theFile: "trees.png"}, 
        {trackType: TRACK_FLAG, theFile: "flag.png"}
    ];
    
    picsToLoad = imageList.length;
    
  for(var i=0;i<imageList.length;i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}
	}
}