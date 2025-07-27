interface BLockBase {
	nanoid: string;
}

export interface LeftBlock extends BLockBase {
	type: 'left';
	value: number;
	unit: 'degrees';
}

export interface RightBlock extends BLockBase {
	type: 'right';
	value: number;
	unit: 'degrees';
}

export interface ForwardBlock extends BLockBase {
	type: 'forward';
	value: number;
	unit: 'steps';
}

export interface BackBlock extends BLockBase {
	type: 'back';
	value: number;
	unit: 'steps';
}

export interface CircleBlock extends BLockBase {
	type: 'circle';
	value: number;
	unit: 'radius';
}

export interface PenUpBlock extends BLockBase {
	type: 'penUp';
}

export interface PenDownBlock extends BLockBase {
	type: 'penDown';
}

export interface BackToCenterBlock extends BLockBase {
	type: 'backToCenter';
}

export interface HideTurtleBlock extends BLockBase {
	type: 'hideTurtle';
}

export interface ShowTurtleBlock extends BLockBase {
	type: 'showTurtle';
}

export type Block =
	| LeftBlock
	| RightBlock
	| ForwardBlock
	| BackBlock
	| CircleBlock
	| PenUpBlock
	| PenDownBlock
	| BackToCenterBlock
	| HideTurtleBlock
	| ShowTurtleBlock;

export interface RepeatBlock extends BLockBase {
	type: 'repeat';
	value: number;
	children: Block[];
}

export type GeneralBlock = Block | RepeatBlock;
