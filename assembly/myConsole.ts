// A way to bring console.log over from javascript.
// TODO: Credit AssemblyScript examples/loader for this.

@external("env", "console.log")
declare function log(s: string): void

@external("env", "console.time")
export declare function time(s: string): void;

@external("env", "console.timeEnd")
export declare function timeEnd(s: string): void;
