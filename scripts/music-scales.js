let sus = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
let bem = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];

function sliceArray(startArray, positionsArray){
	const firstSlice = startArray.slice(positionsArray[0], positionsArray[1]);
	const secondSlice = startArray.slice(positionsArray[2], positionsArray[3]);

	return [firstSlice, secondSlice];
}

function getEvenIndexes(slice, note){
	let index = slice.indexOf(note);
	return index%2 === 0 ? note : console.log('calculating...');
}

export default function createMajorScale(tone){
	let index = sus.indexOf(tone);
	let [segmentOne, segmentTwo] = sliceArray(sus, [index, sus.length, 0, index]);
	
	segmentTwo.forEach(note => segmentOne.push(note));

	let [firstPortion, secondPortion] = sliceArray(segmentOne, [0, 5, 5, 12]); 
	
	firstPortion = firstPortion.filter(note => getEvenIndexes(firstPortion, note));
	secondPortion = secondPortion.filter(note => getEvenIndexes(secondPortion, note));

	secondPortion.forEach(note => firstPortion.push(note));

	return firstPortion;
}

function createMinorScale(tone){
	let index = bem.indexOf(tone);
	let thirdPortion = [];
  let [segmentOne, segmentTwo] = sliceArray(bem, [index, sus.length, 0, index]);

  segmentTwo.forEach(note => segmentOne.push(note));

  let [firstPortion, secondPortion] = sliceArray(segmentOne, [0, 3, 3, 12]);
	[secondPortion, thirdPortion] = sliceArray(secondPortion, [0, 5, 5, 9]);
   
	firstPortion = firstPortion.filter(note => getEvenIndexes(firstPortion, note));
  secondPortion = secondPortion.filter(note => getEvenIndexes(secondPortion, note));
	thirdPortion = thirdPortion.filter(note => getEvenIndexes(thirdPortion, note));

	thirdPortion.forEach(note => secondPortion.push(note));
  secondPortion.forEach(note => firstPortion.push(note));

  return firstPortion;
}
