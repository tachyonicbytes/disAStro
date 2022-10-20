# Introduction
`disastro`{.verbatim} is an AssemblyScript distribution, similar to
Anaconda for Python, and Spring for Java.

`disastro`{.verbatim} wants to be a growing collection of AssemblyScript
packages, organized in an easy-to-develop manner.

This work is extremely experimental. You know what to do.

## Stewardship
Am I a good steward for the project? You can check the project name for
that.

# Usage
For now, I only integrated the `as-big` and `json-as` packages. The
entire usage stands now at:

``` bash
npm install disastro
```

``` typescript
import { Big, JSON } from "disastro/assembly/index.ts";
```

# Motivation
Working with AssemblyScript, I wanted to build my own toolkit in order
to ease the process. AssemblyScript already provides a good standard
library, but there are many great AssemblyScript packages that I wanted
to use easily.
