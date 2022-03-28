# J O T A I - N E X U S

Inspired by [Recoil Nexus](https://github.com/luisanton-io/recoil-nexus)

This package gives you the ability to access atom's, e.g read/write to them from outside
React's tree.

## Install

**npm**

`npm i jotai-nexus`

**yarn**

`yarn add jotai-nexus`

## Usage

### 1. Add `JotaiNexus` to your main React file.

```tsx
import React from "react";
import JotaiNexus, { readAtom, writeAtom } from "jotai-nexus";

// Somewhere in your code use readAtom(myAtom) or writeAtom(myAtom, myUpdate)

export default function App() {
  return (
    <SomeLayout>
      {/* ... */}
      <JotaiNexus />
    </SomeLayout>
  );
}

export default App;
```

### 2. Use the following methods to get/set values passing your atom as a parameter.

| Method      | Returns                                                   |
| :---------- | :-------------------------------------------------------- |
| `readAtom`  | getter                                                    |
| `writeAtom` | setter function, pass value to be set as second parameter |
