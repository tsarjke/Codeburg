const getArrFRomTo = (from, to) => {
	const newArr = [];
	for (let i = from; i <= to; i++) {
		newArr.push(i);
	}
	return newArr;
};

const arenaElem = document.querySelector('.arena');
const boardElem = document.querySelector('.board__selected-seat');

const createElemOfArena = (count, className, attrName, iternal = false) => {
	const elemList = getArrFRomTo(1, count).map((num) => {
		const elem = document.createElement('div');
		elem.classList.add(className);
		elem.dataset[attrName] = num;
		if (iternal) {
			const cloneIternal = iternal.map((el) => el.cloneNode(true));
			elem.append(...cloneIternal);
		}
		return elem;
	});
	return elemList;
};

const createArena = (sectorNum, lineNum, seatNum) => {
	const seatList = createElemOfArena(seatNum, 'sector__seat', 'seatNumber');
	const lineList = createElemOfArena(lineNum, 'sector__line', 'lineNumber', seatList);
	const sectorList = createElemOfArena(sectorNum, 'sector', 'sectorNumber', lineList);

	return sectorList;
};

arenaElem.append(...createArena(3, 10, 10));

const onArenaClick = (e) => {
	e.stopPropagation();
	if (e.target.hasAttribute('data-seat-number')) {
		const seat = e.target.dataset.seatNumber;
		const line = e.target.closest('.sector__line').dataset.lineNumber;
		const sector = e.target.closest('.sector').dataset.sectorNumber;
		boardElem.textContent = `S - ${sector} L - ${line} S - ${seat}`;
	} else {
		boardElem.textContent = 'choose seat';
	}
};

arenaElem.addEventListener('click', onArenaClick);

// const craeteSectorSeat = (seatNum) => {
// 	const sectorSeatList = getArrFRomTo(1, seatNum).map((num) => {
// 		const sectorSeat = document.createElement('div');
// 		sectorSeat.classList.add('sector__seat');
// 		sectorSeat.dataset.seatNumber = num;
// 		return sectorSeat;
// 	});
// 	return sectorSeatList;
// };

// const craeteSectorLine = (lineNum, seatNum) => {
// 	const sectorLineList = getArrFRomTo(1, lineNum).map((num) => {
// 		const sectorLine = document.createElement('div');
// 		sectorLine.classList.add('sector__line');
// 		sectorLine.dataset.lineNumber = num;
// 		sectorLine.append(...craeteSectorSeat(seatNum));
// 		return sectorLine;
// 	});
// 	return sectorLineList;
// };

// const createSector = (sectorNum, lineNum, seatNum) => {
// 	const sectorList = getArrFRomTo(1, sectorNum).map((num) => {
// 		const sector = document.createElement('div');
// 		sector.classList.add('sector');
// 		sector.dataset.sectorNumber = num;
// 		sector.append(...craeteSectorLine(lineNum, seatNum));
// 		return sector;
// 	});
// 	return sectorList;
// };

// arenaElem.append(...createSector(3, 10, 10));