# Introduction
`disastro` is an AssemblyScript distribution, similar to Anaconda for Python, and Spring for Java.

`disastro` wants to be a growing collection of AssemblyScript packages, organized in an easy-to-develop manner.

This work is extremely experimental. You know what to expect.

# Installation
``` bash
npm install disastro
```

# Building from sources
You have to build with `--legacy-peer-deps` for now, because `as-pect` and `as-visitor` have different `assemblyscript` required versions.

```bash
npm install --legacy-peer-deps
```

# Usage
For now, I only integrated the `as-big` and `json-as` packages. The entire usage stands now at:

``` typescript
import { Big, JSON } from "disastro/assembly/index.ts";
```

# Motivation
Working with AssemblyScript, I wanted to build my own toolkit in order to ease the process. AssemblyScript already
provides a good standard library, but there are many great AssemblyScript packages that I wanted to use easily.
