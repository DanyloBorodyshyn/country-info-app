<script lang="ts" setup>
interface IProps {
  placeholder?: string;
  error?: boolean;
}
const modelValue = defineModel<string>();
withDefaults(defineProps<IProps>(), {
  placeholder: '',
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="{ 'border-red-600': error }"
    class="w-full px-5 py-3 bg-[#28282A] border border-[#E0E0E0] outline-none md:text-lg xs:text-sm"
    :placeholder
    type="text"
  >
</template>
