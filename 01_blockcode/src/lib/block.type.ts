export interface LeftBlock {
	type: 'left';
	value: number;
	unit: 'degrees';
}

export interface RightBlock {
	type: 'right';
	value: number;
	unit: 'degrees';
}

export interface ForwardBlock {
	type: 'forward';
	value: number;
	unit: 'steps';
}

export interface BackBlock {
	type: 'back';
	value: number;
	unit: 'steps';
}

export interface CircleBlock {
	type: 'circle';
	value: number;
	unit: 'radius';
}

export interface PenUpBlock {
	type: 'penUp';
}

export interface PenDownBlock {
	type: 'penDown';
}

export interface BackToCenterBlock {
	type: 'backToCenter';
}

export interface HideTurtleBlock {
	type: 'hideTurtle';
}

export interface ShowTurtleBlock {
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

export interface RepeatBlock {
	type: 'repeat';
	value: number;
	children: Block[];
}

export type GeneralBlock = Block | RepeatBlock;
