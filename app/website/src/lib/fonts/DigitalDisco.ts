export const font: {
	font: string;
	lineHeight: number;
	size: number;
	texture: Promise<HTMLImageElement>;
	chars: {
		[key: string]: {
			xOffset: number;
			yOffset: number;
			xAdvance: number;
			kerning: {
				[key: string]: number;
			};
			textureRect: { x: number; y: number; width: number; height: number };
		};
	};
} = {
	font: 'DigitalDisco',
	lineHeight: 16,
	size: -16,
	texture: new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = '/fonts/DigitalDisco.png';
	}),
	chars: {
		'32': { xOffset: 0, yOffset: 0, xAdvance: 4, kerning: {}, textureRect: { x: 0, y: 0, width: 4, height: 7 } },
		'33': { xOffset: 0, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 253, y: 61, width: 2, height: 10 } },
		'34': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 8, y: 96, width: 5, height: 3 } },
		'35': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 9, y: 85, width: 8, height: 10 } },
		'36': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 117, y: 27, width: 6, height: 12 } },
		'37': { xOffset: 0, yOffset: 2, xAdvance: 11, kerning: {}, textureRect: { x: 147, y: 52, width: 10, height: 10 } },
		'38': { xOffset: 0, yOffset: 1, xAdvance: 10, kerning: {}, textureRect: { x: 210, y: 26, width: 9, height: 11 } },
		'39': { xOffset: 0, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 18, y: 96, width: 2, height: 3 } },
		'40': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 168, y: 26, width: 3, height: 12 } },
		'41': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 172, y: 26, width: 3, height: 12 } },
		'42': { xOffset: 0, yOffset: 4, xAdvance: 7, kerning: {}, textureRect: { x: 216, y: 82, width: 6, height: 5 } },
		'43': { xOffset: 0, yOffset: 5, xAdvance: 7, kerning: {}, textureRect: { x: 168, y: 85, width: 6, height: 6 } },
		'44': { xOffset: 0, yOffset: 10, xAdvance: 3, kerning: {}, textureRect: { x: 21, y: 96, width: 2, height: 3 } },
		'45': { xOffset: 0, yOffset: 7, xAdvance: 5, kerning: {}, textureRect: { x: 47, y: 96, width: 4, height: 2 } },
		'46': { xOffset: 0, yOffset: 10, xAdvance: 3, kerning: {}, textureRect: { x: 52, y: 96, width: 2, height: 2 } },
		'47': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 151, y: 74, width: 4, height: 10 } },
		'48': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 18, y: 85, width: 8, height: 10 } },
		'49': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 179, y: 74, width: 3, height: 10 } },
		'50': { xOffset: 0, yOffset: 2, xAdvance: 8, kerning: {}, textureRect: { x: 68, y: 75, width: 7, height: 10 } },
		'51': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 27, y: 85, width: 8, height: 10 } },
		'52': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 10, y: 74, width: 8, height: 10 } },
		'53': { xOffset: 0, yOffset: 2, xAdvance: 8, kerning: {}, textureRect: { x: 44, y: 76, width: 7, height: 10 } },
		'54': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 19, y: 74, width: 8, height: 10 } },
		'55': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 97, y: 75, width: 6, height: 10 } },
		'56': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 28, y: 65, width: 8, height: 10 } },
		'57': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 181, y: 62, width: 8, height: 10 } },
		'58': { xOffset: 0, yOffset: 5, xAdvance: 3, kerning: {}, textureRect: { x: 195, y: 84, width: 2, height: 6 } },
		'59': { xOffset: 0, yOffset: 5, xAdvance: 3, kerning: {}, textureRect: { x: 165, y: 85, width: 2, height: 7 } },
		'60': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 67, y: 87, width: 8, height: 8 } },
		'61': { xOffset: 0, yOffset: 5, xAdvance: 7, kerning: {}, textureRect: { x: 182, y: 85, width: 6, height: 6 } },
		'62': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 58, y: 87, width: 8, height: 8 } },
		'63': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 37, y: 65, width: 8, height: 10 } },
		'64': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 209, y: 50, width: 9, height: 10 } },
		'65': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 46, y: 65, width: 8, height: 10 } },
		'66': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 0, y: 85, width: 8, height: 10 } },
		'67': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 199, y: 50, width: 9, height: 10 } },
		'68': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 55, y: 65, width: 8, height: 10 } },
		'69': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 90, y: 75, width: 6, height: 10 } },
		'70': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 76, y: 75, width: 6, height: 10 } },
		'71': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 169, y: 52, width: 9, height: 10 } },
		'72': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 64, y: 64, width: 8, height: 10 } },
		'73': { xOffset: 0, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 191, y: 73, width: 2, height: 10 } },
		'74': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 250, y: 38, width: 4, height: 11 } },
		'75': { xOffset: 0, yOffset: 2, xAdvance: 8, kerning: {}, textureRect: { x: 36, y: 76, width: 7, height: 10 } },
		'76': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 123, y: 75, width: 5, height: 10 } },
		'77': { xOffset: 0, yOffset: 2, xAdvance: 13, kerning: {}, textureRect: { x: 64, y: 53, width: 12, height: 10 } },
		'78': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 73, y: 64, width: 8, height: 10 } },
		'79': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 179, y: 51, width: 9, height: 10 } },
		'80': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 82, y: 64, width: 8, height: 10 } },
		'81': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 30, y: 15, width: 9, height: 12 } },
		'82': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 91, y: 64, width: 8, height: 10 } },
		'83': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 100, y: 64, width: 8, height: 10 } },
		'84': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 104, y: 75, width: 6, height: 10 } },
		'85': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 109, y: 64, width: 8, height: 10 } },
		'86': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 118, y: 64, width: 8, height: 10 } },
		'87': { xOffset: 0, yOffset: 2, xAdvance: 13, kerning: {}, textureRect: { x: 77, y: 53, width: 12, height: 10 } },
		'88': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 127, y: 63, width: 8, height: 10 } },
		'89': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 136, y: 63, width: 8, height: 10 } },
		'90': { xOffset: 0, yOffset: 2, xAdvance: 8, kerning: {}, textureRect: { x: 60, y: 76, width: 7, height: 10 } },
		'91': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 164, y: 26, width: 3, height: 12 } },
		'92': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 146, y: 74, width: 4, height: 10 } },
		'93': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 176, y: 26, width: 3, height: 12 } },
		'94': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 231, y: 81, width: 6, height: 4 } },
		'95': { xOffset: 0, yOffset: 12, xAdvance: 9, kerning: {}, textureRect: { x: 24, y: 96, width: 8, height: 2 } },
		'96': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 251, y: 80, width: 3, height: 3 } },
		'97': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 103, y: 86, width: 8, height: 8 } },
		'98': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 244, y: 61, width: 8, height: 10 } },
		'99': { xOffset: 0, yOffset: 4, xAdvance: 8, kerning: {}, textureRect: { x: 138, y: 85, width: 7, height: 8 } },
		'100': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 235, y: 61, width: 8, height: 10 } },
		'101': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 94, y: 86, width: 8, height: 8 } },
		'102': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 135, y: 74, width: 5, height: 10 } },
		'103': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 162, y: 40, width: 8, height: 11 } },
		'104': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 226, y: 61, width: 8, height: 10 } },
		'105': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 187, y: 73, width: 3, height: 10 } },
		'106': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 146, y: 0, width: 3, height: 13 } },
		'107': { xOffset: 0, yOffset: 2, xAdvance: 8, kerning: {}, textureRect: { x: 52, y: 76, width: 7, height: 10 } },
		'108': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 183, y: 73, width: 3, height: 10 } },
		'109': { xOffset: 0, yOffset: 4, xAdvance: 13, kerning: {}, textureRect: { x: 36, y: 87, width: 12, height: 8 } },
		'110': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 121, y: 86, width: 8, height: 8 } },
		'111': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 49, y: 87, width: 8, height: 8 } },
		'112': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 217, y: 61, width: 8, height: 10 } },
		'113': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 208, y: 61, width: 8, height: 10 } },
		'114': { xOffset: 0, yOffset: 4, xAdvance: 6, kerning: {}, textureRect: { x: 18, y: 53, width: 5, height: 8 } },
		'115': { xOffset: 0, yOffset: 4, xAdvance: 8, kerning: {}, textureRect: { x: 130, y: 85, width: 7, height: 8 } },
		'116': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 161, y: 74, width: 4, height: 10 } },
		'117': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 85, y: 86, width: 8, height: 8 } },
		'118': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 76, y: 86, width: 8, height: 8 } },
		'119': { xOffset: 0, yOffset: 4, xAdvance: 13, kerning: {}, textureRect: { x: 238, y: 72, width: 12, height: 8 } },
		'120': { xOffset: 0, yOffset: 4, xAdvance: 8, kerning: {}, textureRect: { x: 28, y: 76, width: 7, height: 8 } },
		'121': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 247, y: 26, width: 8, height: 11 } },
		'122': { xOffset: 0, yOffset: 4, xAdvance: 8, kerning: {}, textureRect: { x: 10, y: 28, width: 7, height: 8 } },
		'123': { xOffset: -1, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 144, y: 27, width: 4, height: 12 } },
		'124': { xOffset: 0, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 194, y: 26, width: 2, height: 12 } },
		'125': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 149, y: 27, width: 4, height: 12 } },
		'126': { xOffset: 0, yOffset: 6, xAdvance: 8, kerning: {}, textureRect: { x: 0, y: 96, width: 7, height: 3 } },
		'161': { xOffset: 0, yOffset: 4, xAdvance: 3, kerning: {}, textureRect: { x: 194, y: 73, width: 2, height: 10 } },
		'162': { xOffset: 0, yOffset: 3, xAdvance: 7, kerning: {}, textureRect: { x: 217, y: 72, width: 6, height: 9 } },
		'163': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 83, y: 75, width: 6, height: 10 } },
		'164': { xOffset: 0, yOffset: 4, xAdvance: 7, kerning: {}, textureRect: { x: 175, y: 85, width: 6, height: 6 } },
		'165': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 199, y: 61, width: 8, height: 10 } },
		'166': { xOffset: 0, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 188, y: 26, width: 2, height: 12 } },
		'167': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 250, y: 13, width: 5, height: 12 } },
		'168': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 41, y: 96, width: 5, height: 2 } },
		'169': { xOffset: 0, yOffset: 3, xAdvance: 10, kerning: {}, textureRect: { x: 207, y: 72, width: 9, height: 9 } },
		'170': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 251, y: 72, width: 4, height: 7 } },
		'171': { xOffset: 0, yOffset: 6, xAdvance: 9, kerning: {}, textureRect: { x: 198, y: 83, width: 8, height: 5 } },
		'172': { xOffset: 0, yOffset: 5, xAdvance: 8, kerning: {}, textureRect: { x: 223, y: 82, width: 7, height: 4 } },
		'174': { xOffset: 0, yOffset: 3, xAdvance: 10, kerning: {}, textureRect: { x: 197, y: 73, width: 9, height: 9 } },
		'175': { xOffset: 0, yOffset: 2, xAdvance: 8, kerning: {}, textureRect: { x: 33, y: 96, width: 7, height: 2 } },
		'176': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 238, y: 81, width: 4, height: 4 } },
		'177': { xOffset: 0, yOffset: 5, xAdvance: 7, kerning: {}, textureRect: { x: 153, y: 85, width: 6, height: 7 } },
		'178': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 243, y: 81, width: 3, height: 4 } },
		'179': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 247, y: 81, width: 3, height: 4 } },
		'180': { xOffset: 0, yOffset: 1, xAdvance: 4, kerning: {}, textureRect: { x: 14, y: 96, width: 3, height: 3 } },
		'181': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 154, y: 63, width: 8, height: 10 } },
		'182': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 211, y: 0, width: 9, height: 12 } },
		'183': { xOffset: 0, yOffset: 7, xAdvance: 3, kerning: {}, textureRect: { x: 55, y: 96, width: 2, height: 2 } },
		'184': { xOffset: 0, yOffset: 12, xAdvance: 4, kerning: {}, textureRect: { x: 24, y: 70, width: 3, height: 3 } },
		'185': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 24, y: 65, width: 3, height: 4 } },
		'186': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 160, y: 85, width: 4, height: 7 } },
		'187': { xOffset: 0, yOffset: 6, xAdvance: 9, kerning: {}, textureRect: { x: 207, y: 82, width: 8, height: 5 } },
		'188': { xOffset: 0, yOffset: 2, xAdvance: 11, kerning: {}, textureRect: { x: 125, y: 52, width: 10, height: 10 } },
		'189': { xOffset: 0, yOffset: 2, xAdvance: 11, kerning: {}, textureRect: { x: 158, y: 52, width: 10, height: 10 } },
		'190': { xOffset: 0, yOffset: 2, xAdvance: 11, kerning: {}, textureRect: { x: 114, y: 53, width: 10, height: 10 } },
		'191': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 145, y: 63, width: 8, height: 10 } },
		'192': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 133, y: 14, width: 8, height: 12 } },
		'193': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 142, y: 14, width: 8, height: 12 } },
		'194': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 151, y: 14, width: 8, height: 12 } },
		'195': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 160, y: 13, width: 8, height: 12 } },
		'196': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 169, y: 13, width: 8, height: 12 } },
		'197': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 178, y: 13, width: 8, height: 12 } },
		'198': { xOffset: 0, yOffset: 2, xAdvance: 12, kerning: {}, textureRect: { x: 90, y: 53, width: 11, height: 10 } },
		'199': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 101, y: 0, width: 9, height: 13 } },
		'200': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 124, y: 27, width: 6, height: 12 } },
		'201': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 82, y: 28, width: 6, height: 12 } },
		'202': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 110, y: 27, width: 6, height: 12 } },
		'203': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 131, y: 27, width: 6, height: 12 } },
		'204': { xOffset: -1, yOffset: 0, xAdvance: 3, kerning: {}, textureRect: { x: 180, y: 26, width: 3, height: 12 } },
		'205': { xOffset: -1, yOffset: 0, xAdvance: 3, kerning: {}, textureRect: { x: 184, y: 26, width: 3, height: 12 } },
		'206': { xOffset: -1, yOffset: 0, xAdvance: 4, kerning: {}, textureRect: { x: 154, y: 27, width: 4, height: 12 } },
		'207': { xOffset: -1, yOffset: 0, xAdvance: 4, kerning: {}, textureRect: { x: 159, y: 27, width: 4, height: 12 } },
		'208': { xOffset: -1, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 219, y: 50, width: 9, height: 10 } },
		'209': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 124, y: 14, width: 8, height: 12 } },
		'210': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 60, y: 15, width: 9, height: 12 } },
		'211': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 181, y: 0, width: 9, height: 12 } },
		'212': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 40, y: 15, width: 9, height: 12 } },
		'213': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 50, y: 15, width: 9, height: 12 } },
		'214': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 171, y: 0, width: 9, height: 12 } },
		'215': { xOffset: 0, yOffset: 5, xAdvance: 6, kerning: {}, textureRect: { x: 189, y: 84, width: 5, height: 6 } },
		'216': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 229, y: 50, width: 9, height: 10 } },
		'217': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 106, y: 14, width: 8, height: 12 } },
		'218': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 97, y: 15, width: 8, height: 12 } },
		'219': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 88, y: 15, width: 8, height: 12 } },
		'220': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 79, y: 15, width: 8, height: 12 } },
		'221': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 115, y: 14, width: 8, height: 12 } },
		'222': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 163, y: 63, width: 8, height: 10 } },
		'223': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 172, y: 63, width: 8, height: 10 } },
		'224': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 99, y: 41, width: 8, height: 11 } },
		'225': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 117, y: 40, width: 8, height: 11 } },
		'226': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 171, y: 39, width: 8, height: 11 } },
		'227': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 180, y: 39, width: 8, height: 11 } },
		'228': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 189, y: 39, width: 8, height: 11 } },
		'229': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 27, y: 28, width: 8, height: 12 } },
		'230': { xOffset: 0, yOffset: 4, xAdvance: 14, kerning: {}, textureRect: { x: 224, y: 72, width: 13, height: 8 } },
		'231': { xOffset: 0, yOffset: 4, xAdvance: 8, kerning: {}, textureRect: { x: 32, y: 53, width: 7, height: 11 } },
		'232': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 238, y: 26, width: 8, height: 11 } },
		'233': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 220, y: 26, width: 8, height: 11 } },
		'234': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 144, y: 40, width: 8, height: 11 } },
		'235': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 153, y: 40, width: 8, height: 11 } },
		'236': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 171, y: 74, width: 3, height: 10 } },
		'237': { xOffset: 0, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 175, y: 74, width: 3, height: 10 } },
		'238': { xOffset: -1, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 156, y: 74, width: 4, height: 10 } },
		'239': { xOffset: -1, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 141, y: 74, width: 4, height: 10 } },
		'240': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 190, y: 62, width: 8, height: 10 } },
		'241': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 81, y: 41, width: 8, height: 11 } },
		'242': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 18, y: 41, width: 8, height: 11 } },
		'243': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 0, y: 50, width: 8, height: 11 } },
		'244': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 90, y: 41, width: 8, height: 11 } },
		'245': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 108, y: 41, width: 8, height: 11 } },
		'246': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 9, y: 50, width: 8, height: 11 } },
		'247': { xOffset: 0, yOffset: 4, xAdvance: 7, kerning: {}, textureRect: { x: 146, y: 85, width: 6, height: 8 } },
		'248': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 112, y: 86, width: 8, height: 8 } },
		'249': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 45, y: 41, width: 8, height: 11 } },
		'250': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 229, y: 26, width: 8, height: 11 } },
		'251': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 135, y: 40, width: 8, height: 11 } },
		'252': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 225, y: 38, width: 8, height: 11 } },
		'253': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 55, y: 0, width: 8, height: 14 } },
		'254': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 0, y: 37, width: 8, height: 12 } },
		'255': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 28, y: 0, width: 8, height: 14 } },
		'256': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 241, y: 13, width: 8, height: 12 } },
		'257': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 216, y: 38, width: 8, height: 11 } },
		'258': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 223, y: 13, width: 8, height: 12 } },
		'259': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 207, y: 38, width: 8, height: 11 } },
		'260': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 111, y: 0, width: 8, height: 13 } },
		'261': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 198, y: 38, width: 8, height: 11 } },
		'262': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 241, y: 0, width: 9, height: 12 } },
		'263': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 0, y: 62, width: 7, height: 11 } },
		'264': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 231, y: 0, width: 9, height: 12 } },
		'265': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 234, y: 38, width: 7, height: 11 } },
		'266': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 221, y: 0, width: 9, height: 12 } },
		'267': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 8, y: 62, width: 7, height: 11 } },
		'268': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 191, y: 0, width: 9, height: 12 } },
		'269': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 24, y: 53, width: 7, height: 11 } },
		'270': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 196, y: 13, width: 8, height: 12 } },
		'271': { xOffset: 0, yOffset: 2, xAdvance: 12, kerning: {}, textureRect: { x: 102, y: 53, width: 11, height: 10 } },
		'272': { xOffset: -1, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 0, y: 74, width: 9, height: 10 } },
		'273': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 189, y: 51, width: 9, height: 10 } },
		'274': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 103, y: 28, width: 6, height: 12 } },
		'275': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 126, y: 40, width: 8, height: 11 } },
		'276': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 68, y: 28, width: 6, height: 12 } },
		'277': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 72, y: 41, width: 8, height: 11 } },
		'278': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 75, y: 28, width: 6, height: 12 } },
		'279': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 63, y: 41, width: 8, height: 11 } },
		'280': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 129, y: 0, width: 6, height: 13 } },
		'281': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 54, y: 41, width: 8, height: 11 } },
		'282': { xOffset: 0, yOffset: 0, xAdvance: 7, kerning: {}, textureRect: { x: 89, y: 28, width: 6, height: 12 } },
		'283': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 36, y: 41, width: 8, height: 11 } },
		'284': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 10, y: 15, width: 9, height: 12 } },
		'285': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 19, y: 0, width: 8, height: 14 } },
		'286': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 0, y: 24, width: 9, height: 12 } },
		'287': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 37, y: 0, width: 8, height: 14 } },
		'288': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 201, y: 0, width: 9, height: 12 } },
		'289': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 46, y: 0, width: 8, height: 14 } },
		'290': { xOffset: 0, yOffset: 2, xAdvance: 10, kerning: {}, textureRect: { x: 9, y: 0, width: 9, height: 14 } },
		'291': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 0, y: 8, width: 8, height: 15 } },
		'292': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 70, y: 15, width: 8, height: 12 } },
		'293': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 187, y: 13, width: 8, height: 12 } },
		'294': {
			xOffset: -1,
			yOffset: 2,
			xAdvance: 10,
			kerning: {},
			textureRect: { x: 136, y: 52, width: 10, height: 10 },
		},
		'295': { xOffset: -1, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 239, y: 50, width: 9, height: 10 } },
		'296': { xOffset: -2, yOffset: 0, xAdvance: 5, kerning: {}, textureRect: { x: 96, y: 28, width: 6, height: 12 } },
		'297': { xOffset: -2, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 249, y: 50, width: 6, height: 10 } },
		'298': { xOffset: -1, yOffset: 0, xAdvance: 4, kerning: {}, textureRect: { x: 251, y: 0, width: 4, height: 12 } },
		'299': { xOffset: -1, yOffset: 2, xAdvance: 4, kerning: {}, textureRect: { x: 166, y: 74, width: 4, height: 10 } },
		'300': { xOffset: -1, yOffset: 0, xAdvance: 5, kerning: {}, textureRect: { x: 138, y: 27, width: 5, height: 12 } },
		'301': { xOffset: -1, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 117, y: 75, width: 5, height: 10 } },
		'302': { xOffset: -1, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 154, y: 0, width: 3, height: 13 } },
		'303': { xOffset: -1, yOffset: 2, xAdvance: 3, kerning: {}, textureRect: { x: 150, y: 0, width: 3, height: 13 } },
		'304': { xOffset: 0, yOffset: 0, xAdvance: 3, kerning: {}, textureRect: { x: 191, y: 26, width: 2, height: 12 } },
		'305': { xOffset: 0, yOffset: 5, xAdvance: 4, kerning: {}, textureRect: { x: 5, y: 0, width: 3, height: 7 } },
		'306': { xOffset: 1, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 242, y: 38, width: 7, height: 11 } },
		'307': { xOffset: 0, yOffset: 1, xAdvance: 7, kerning: {}, textureRect: { x: 82, y: 0, width: 6, height: 14 } },
		'308': { xOffset: 0, yOffset: 0, xAdvance: 5, kerning: {}, textureRect: { x: 141, y: 0, width: 4, height: 13 } },
		'309': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 136, y: 0, width: 4, height: 13 } },
		'320': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 129, y: 74, width: 5, height: 10 } },
		'336': { xOffset: 0, yOffset: 0, xAdvance: 10, kerning: {}, textureRect: { x: 20, y: 15, width: 9, height: 12 } },
		'352': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 205, y: 13, width: 8, height: 12 } },
		'353': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 16, y: 62, width: 7, height: 11 } },
		'368': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 18, y: 28, width: 8, height: 12 } },
		'369': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 9, y: 37, width: 8, height: 12 } },
		'370': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 120, y: 0, width: 8, height: 13 } },
		'371': { xOffset: 0, yOffset: 4, xAdvance: 9, kerning: {}, textureRect: { x: 27, y: 41, width: 8, height: 11 } },
		'372': { xOffset: 0, yOffset: 0, xAdvance: 13, kerning: {}, textureRect: { x: 158, y: 0, width: 12, height: 12 } },
		'373': { xOffset: 0, yOffset: 1, xAdvance: 13, kerning: {}, textureRect: { x: 197, y: 26, width: 12, height: 11 } },
		'374': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 232, y: 13, width: 8, height: 12 } },
		'375': { xOffset: 0, yOffset: 1, xAdvance: 9, kerning: {}, textureRect: { x: 73, y: 0, width: 8, height: 14 } },
		'376': { xOffset: 0, yOffset: 0, xAdvance: 9, kerning: {}, textureRect: { x: 214, y: 13, width: 8, height: 12 } },
		'377': { xOffset: 0, yOffset: 0, xAdvance: 8, kerning: {}, textureRect: { x: 60, y: 28, width: 7, height: 12 } },
		'378': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 40, y: 53, width: 7, height: 11 } },
		'379': { xOffset: 0, yOffset: 0, xAdvance: 8, kerning: {}, textureRect: { x: 52, y: 28, width: 7, height: 12 } },
		'380': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 48, y: 53, width: 7, height: 11 } },
		'381': { xOffset: 0, yOffset: 0, xAdvance: 8, kerning: {}, textureRect: { x: 44, y: 28, width: 7, height: 12 } },
		'382': { xOffset: 0, yOffset: 1, xAdvance: 8, kerning: {}, textureRect: { x: 56, y: 53, width: 7, height: 11 } },
		'383': { xOffset: 0, yOffset: 2, xAdvance: 6, kerning: {}, textureRect: { x: 111, y: 75, width: 5, height: 10 } },
		'536': { xOffset: 0, yOffset: 2, xAdvance: 9, kerning: {}, textureRect: { x: 64, y: 0, width: 8, height: 14 } },
		'537': { xOffset: 0, yOffset: 4, xAdvance: 8, kerning: {}, textureRect: { x: 36, y: 28, width: 7, height: 12 } },
		'538': { xOffset: 0, yOffset: 2, xAdvance: 7, kerning: {}, textureRect: { x: 89, y: 0, width: 6, height: 14 } },
		'539': { xOffset: 0, yOffset: 2, xAdvance: 5, kerning: {}, textureRect: { x: 96, y: 0, width: 4, height: 14 } },
	},
};