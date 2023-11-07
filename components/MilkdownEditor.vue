<script setup lang="ts">
import { Milkdown, useEditor } from '@milkdown/vue';
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord'
import { commonmark } from '@milkdown/preset-commonmark'
import { math } from '@milkdown/plugin-math';

const markdown =
`# Milkdown Nuxt Commonmark

> You're scared of a world where you're needed.
\`\`\`python
def my_to_str(x: int): str
  return str(x)
\`\`\`

$$
a^2 + b^2 = c^2
$$

This is a demo for using Milkdown with **Nuxt**.`
useEditor((root) => {
  
  return Editor.make()
    .config(nord)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
    })
    .use(commonmark)
    .use(math)
})
</script>

<template>
  <Milkdown />
</template>
