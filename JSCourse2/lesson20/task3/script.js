export default function sumOfSquares() {
	return [].map.apply(arguments, [(el) => el * el])
		.reduce((acc, sq) => acc + sq);
}
