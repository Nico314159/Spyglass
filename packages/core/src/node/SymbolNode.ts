import type { AstNode } from './AstNode'

export interface SymbolOptions {
	category: string,
}

export interface SymbolBaseNode extends AstNode {
	readonly options: SymbolOptions,
	readonly value: string,
}

export interface SymbolNode extends SymbolBaseNode {
	readonly type: 'symbol',
}
export namespace SymbolNode {
	/* istanbul ignore next */
	export function is(obj: object): obj is SymbolNode {
		return (obj as SymbolNode).type === 'symbol'
	}
}